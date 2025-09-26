import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { HiChatBubbleLeftRight, HiXMark, HiPaperAirplane, HiUser, HiCpuChip, HiSparkles } from 'react-icons/hi2';
import '../styles/ChatBot.css';
import { getWelcomeMessages, getSampleQuestions, isPhilosophyRelated, formatPhilosophyResponse } from '../utils/chatUtils';
import { testGeminiAPI } from '../utils/testAPI';
import { findWorkingModel } from '../utils/modelTester';

// Danh sách các models để thử nghiệm (ưu tiên từ nhanh -> mạnh)
// Ưu tiên model 1.5 Flash 8B để tiết kiệm quota so với các biến thể lớn hơn
const GEMINI_MODELS = [
  'gemini-1.5-flash-8b-latest',
  'gemini-1.5-flash-8b',
  'gemini-1.5-flash-latest',
  'gemini-1.5-flash',
  'gemini-2.5-flash',
  'gemini-1.5-pro'
];

const MAX_MODEL_TRIES = 1; // tránh tốn quota: thử 1 model mặc định (có thể tăng lên 2-3 nếu cần)
const REQUEST_MIN_GAP_MS = 1200; // cách nhau tối thiểu giữa 2 lần gọi

const MAX_BACKOFF_RETRY = 1; // số lần retry tối đa khi gặp 429

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [apiStatus, setApiStatus] = useState('online'); // 'online', 'offline', 'testing', 'rate-limited'
  const [retryAfterSec, setRetryAfterSec] = useState(null);
  const messagesEndRef = useRef(null);
  const inFlightRef = useRef(new Map()); // dedupe theo userMessage
  const lastRequestTimeRef = useRef(0); // throttle requests
  const cacheRef = useRef(new Map()); // question cache: key -> { answer, ts }
  const CACHE_TTL_MS = 5 * 60 * 1000; // 5 phút
  const lastUserSubmitRef = useRef(0); // debounce input submissions
  const INPUT_DEBOUNCE_MS = 800; // thời gian tối thiểu giữa 2 lần Enter

  const location = useLocation();
  const isEn = location.pathname.endsWith('/en') || location.pathname.includes('/en/');

  // Helpers for localization
  const t = {
    title: isEn ? 'AI Philosophy Assistant' : 'Trợ lý Triết học AI',
    clear: isEn ? 'Clear' : 'Xóa',
    placeholder: isEn ? 'Ask me about philosophy, class struggle...' : 'Hỏi tôi về triết học, đấu tranh giai cấp...',
    ariaOpen: isEn ? 'Open philosophy chatbot' : 'Mở chatbot triết học',
    ariaClose: isEn ? 'Close chatbot' : 'Đóng chatbot',
    suggestions: isEn ? 'Suggested questions:' : 'Câu hỏi gợi ý:',
    sending: isEn ? 'Sending question to Gemini...' : 'Đang gửi câu hỏi tới Gemini API...',
    status: {
      online: isEn ? 'Gemini AI online' : 'AI Gemini đang hoạt động',
      offline: isEn ? 'Basic mode' : 'Chế độ cơ bản',
      rate: isEn ? 'Rate limited' : 'Đang bị giới hạn lưu lượng',
      testing: isEn ? 'Testing...' : 'Đang kiểm tra...'
    }
  };

  // Cuộn xuống tin nhắn mới nhất
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Tin nhắn chào mừng với gợi ý
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = getWelcomeMessages();
      setMessages([
        {
          id: Date.now(),
          text: welcomeMessage,
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
      setShowSuggestions(true);
    }
  }, [isOpen, messages.length]);

  // Thử kết nối với các model Gemini khác nhau
  const tryGeminiAPI = async (userMessage, modelIndex = 0) => {
    const limit = Math.min(MAX_MODEL_TRIES, GEMINI_MODELS.length);
    if (modelIndex >= limit) {
      throw new Error('Tất cả các model Gemini đều không khả dụng');
    }

  const currentModel = GEMINI_MODELS[modelIndex];
  // Use Vite dev server proxy to avoid CORS and keep API key off the client
  const apiUrl = `/api/gemini/${currentModel}`;

    try {
      console.log(`[Gemini] -> gửi yêu cầu | model=${currentModel} | index=${modelIndex}`);
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Bạn là một chuyên gia triết học Mác-Lênin. Hãy trả lời câu hỏi sau một cách chuyên môn và dễ hiểu: ${userMessage}`
            }]
          }]
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        console.warn(`[Gemini] <- lỗi | model=${currentModel} | status=${response.status} | body=`, errText);
        // For key/project-level issues, don't try more models
        if ([401, 403, 429].includes(response.status)) {
          if (response.status === 429) {
            setApiStatus('rate-limited');
            // Try to parse retry delay from error JSON
            try {
              const j = JSON.parse(errText);
              const details = j?.error?.details;
              const retryInfo = Array.isArray(details) ? details.find(d => d['@type']?.includes('RetryInfo')) : null;
              const delay = retryInfo?.retryDelay || retryInfo?.retry_delay || null;
              // Expect format like "50s"
              if (typeof delay === 'string' && /^(\d+)s$/.test(delay)) {
                const sec = parseInt(delay.replace('s',''), 10);
                if (!Number.isNaN(sec)) setRetryAfterSec(sec);
              }
            } catch {}
          }
          throw new Error(`${response.status}: ${errText}`);
        }
        return await tryGeminiAPI(userMessage, modelIndex + 1);
      }

      const data = await response.json();
      
      if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        console.log(`[Gemini] <- thành công | model=${currentModel}`);
        setApiStatus('online');
        return data.candidates[0].content.parts[0].text;
      } else {
        console.warn(`[Gemini] định dạng phản hồi không hợp lệ, thử model kế tiếp... | model=${currentModel}`);
        return await tryGeminiAPI(userMessage, modelIndex + 1);
      }
    } catch (error) {
      console.warn(`[Gemini] lỗi kết nối | model=${currentModel} |`, error.message);
      return await tryGeminiAPI(userMessage, modelIndex + 1);
    }
  };

  // Gửi tin nhắn đến Gemini API
  const sendToGemini = async (userMessage, attempt = 0) => {
    const lowerMessage = userMessage.toLowerCase();

    // Normalize câu hỏi để cache (trim + lower + bỏ dấu chấm hỏi cuối)
    const normKey = lowerMessage.replace(/\?+$/,'').trim();
    const cached = cacheRef.current.get(normKey);
    if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
      console.log('[Gemini] dùng cache hit cho câu hỏi:', normKey);
      return cached.answer;
    }
    
    // Kiểm tra xem câu hỏi có liên quan đến triết học không
    if (!isPhilosophyRelated(userMessage)) {
      return "Xin lỗi, tôi chỉ có thể trả lời các câu hỏi liên quan đến triết học. Hãy hỏi tôi về triết học phương Đông (Khổng Tử, Lão Tử, Phật giáo), triết học phương Tây (Socrates, Kant, Nietzsche), triết học Mác-Lênin, hoặc các chủ đề như đạo đức, tồn tại, chân lý, ý nghĩa cuộc sống!";
    }

    // Xử lý các câu chào hỏi cơ bản
    if (lowerMessage.includes('xin chào') || lowerMessage.includes('chào') || 
        lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Xin chào! Tôi là trợ lý AI chuyên về triết học. Tôi có thể thảo luận về triết học phương Đông, phương Tây, Mác-Lênin và nhiều trường phái khác. Bạn có câu hỏi gì muốn thảo luận không?";
    }
    
    if (lowerMessage.includes('bạn là ai') || lowerMessage.includes('giới thiệu')) {
      return "Tôi là trợ lý AI chuyên về triết học với kiến thức về nhiều trường phái: triết học cổ điển Hy Lạp, triết học phương Đông (Khổng Tử, Lão Tử, Phật giáo), triết học phương Tây hiện đại, và triết học Mác-Lênin. Hãy đặt câu hỏi về bất kỳ chủ đề triết học nào bạn quan tâm!";
    }

    if (lowerMessage.includes('cảm ơn') || lowerMessage.includes('thank')) {
      return "Rất vui được giúp đỡ bạn! Nếu bạn có thêm câu hỏi nào về triết học, đừng ngần ngại hỏi tôi nhé. Tôi luôn sẵn sàng thảo luận về các chủ đề triết học thú vị!";
    }

    if (lowerMessage.includes('tạm biệt') || lowerMessage.includes('bye')) {
      return "Tạm biệt! Hy vọng cuộc trò chuyện về triết học hôm nay hữu ích với bạn. Chúc bạn có một ngày tốt lành và đừng quên tiếp tục khám phá thế giới triết học nhé!";
    }

    // ƯU TIÊN GỌI API GEMINI CHO TẤT CẢ CÂU HỎI TRIẾT HỌC
  console.log('[Gemini] chuẩn bị gọi API cho câu hỏi:', userMessage);
    
    // Tạo prompt cho các câu hỏi triết học
    const prompt = `Bạn là một chuyên gia triết học có kiến thức sâu rộng về nhiều trường phái triết học khác nhau. Hãy trả lời câu hỏi sau một cách:

- Chính xác và có căn cứ khoa học
- Dễ hiểu, phù hợp với nhiều đối tượng  
- Có ví dụ minh họa cụ thể khi cần thiết
- So sánh giữa các trường phái khi phù hợp
- Bao gồm cả triết học phương Đông và phương Tây
- Liên hệ với thực tiễn đời sống khi có thể

Lĩnh vực chuyên môn bao gồm:
- Triết học cổ điển Hy Lạp (Socrates, Plato, Aristotle)
- Triết học phương Đông (Khổng Tử, Lão Tử, Phật giáo)
- Triết học phương Tây hiện đại (Kant, Hegel, Nietzsche)
- Triết học Mác-Lênin
- Các ngành triết học: đạo đức học, thẩm mỹ học, nhận thức luận

Câu hỏi: ${userMessage}

Hãy trả lời bằng tiếng Việt, ngắn gọn nhưng đầy đủ thông tin (khoảng 150-250 từ). Nếu câu hỏi liên quan đến nhiều trường phái, hãy so sánh quan điểm của họ.`;

    try {
      // In-flight dedupe theo nguyên văn câu hỏi
      if (inFlightRef.current.has(userMessage)) {
        console.log('[Gemini] phát hiện yêu cầu đang xử lý, dùng lại promise sẵn có');
        return inFlightRef.current.get(userMessage);
      }

      // Throttle: đảm bảo cách nhau tối thiểu REQUEST_MIN_GAP_MS
      const now = Date.now();
      const gap = now - lastRequestTimeRef.current;
      if (gap < REQUEST_MIN_GAP_MS) {
        const waitMs = REQUEST_MIN_GAP_MS - gap;
        console.log(`[Gemini] throttle: chờ ${waitMs}ms trước khi gửi`);
        await new Promise(r => setTimeout(r, waitMs));
      }
      lastRequestTimeRef.current = Date.now();

  console.log('🤖', t.sending);
      setApiStatus('testing');

      const p = (async () => {
        const responseText = await tryGeminiAPI(prompt);
        return formatPhilosophyResponse(responseText);
      })();

      // lưu promise để dedupe
      inFlightRef.current.set(userMessage, p);
  const result = await p;
      inFlightRef.current.delete(userMessage);
  // Lưu cache
  cacheRef.current.set(normKey, { answer: result, ts: Date.now() });
      return result;

    } catch (error) {
      console.error('Lỗi khi gọi Gemini API:', error);
      setApiStatus('offline'); // Đánh dấu API offline
      inFlightRef.current.delete(userMessage);
      
      // Backoff tự động cho 429 (nếu còn lượt retry)
      if (error.message.includes('429') && attempt < MAX_BACKOFF_RETRY) {
        // Cố gắng lấy thời gian chờ: ưu tiên state retryAfterSec, nếu chưa có thì parse từ thông điệp
        let waitSec = retryAfterSec;
        if (!waitSec) {
          const match = error.message.match(/"retryDelay"\s*:\s*"(\d+)s"/);
          if (match) waitSec = parseInt(match[1], 10);
        }
        if (!waitSec || Number.isNaN(waitSec)) waitSec = 30; // default
        console.log(`[Gemini] 429: chờ ${waitSec}s rồi retry (attempt ${attempt + 1}/${MAX_BACKOFF_RETRY})`);
        setApiStatus('rate-limited');
        await new Promise(r => setTimeout(r, waitSec * 1000));
        setApiStatus('testing');
        return await sendToGemini(userMessage, attempt + 1);
      }
      
      // CHỈ sử dụng fallback KHI API THẤT BẠI
      const emergencyFallbackResponses = {
        'triết học': 'Triết học là ngành học nghiên cứu những vấn đề cơ bản về thực tại, kiến thức, giá trị và ý nghĩa.',
        'socrates': 'Socrates là triết gia Hy Lạp cổ đại, nổi tiếng với câu "Tôi chỉ biết rằng tôi không biết gì".',
        'khổng tử': 'Khổng Tử là triết gia Trung Quốc, sáng lập Nho giáo, nhấn mạnh đạo đức.',
        'ý nghĩa': 'Ý nghĩa cuộc sống là câu hỏi triết học cơ bản mà nhiều triết gia đã tìm cách trả lời.',
        'tự do': 'Tự do là khả năng tự quyết định và hành động theo ý muốn của mình.',
      };
      
      // Chỉ dùng fallback cho một số câu hỏi cơ bản
      for (const [key, response] of Object.entries(emergencyFallbackResponses)) {
        if (lowerMessage.includes(key)) {
          return `⚠️ **API Offline** - Đang sử dụng chế độ cơ bản:\n\n${response}\n\n*Vui lòng thử lại sau để nhận câu trả lời chi tiết từ AI.*`;
        }
      }
      
      // Error handling chi tiết
      if (error.message.includes('403')) {
        return 'Xin lỗi, khóa API không có quyền truy cập. Vui lòng kiểm tra cấu hình API.';
      }
      if (error.message.includes('401')) {
        return 'Xin lỗi, khóa API không hợp lệ. Vui lòng kiểm tra lại khóa API.';
      }
      if (error.message.includes('404')) {
        return 'Xin lỗi, model AI hiện không khả dụng. Tôi đang sử dụng kiến thức cơ bản để trả lời. Vui lòng hỏi về các chủ đề triết học như: Socrates, Khổng Tử, đạo đức học, tồn tại, chân lý, tự do, ý nghĩa cuộc sống.';
      }
      if (error.message.includes('429')) {
        const hint = retryAfterSec ? `(~${retryAfterSec}s)` : 'trong giây lát';
        return `Xin lỗi, hệ thống đang bị giới hạn lưu lượng và đã thử lại 1 lần. Vui lòng thử lại ${hint}.`;
      }
      return isEn ? `Sorry, I encountered a technical issue: ${error.message}. Please try again later.` : `Xin lỗi, tôi đang gặp sự cố kỹ thuật: ${error.message}. Vui lòng thử lại sau.`;
    }
  };

  // Xử lý gửi tin nhắn
  const handleSendMessage = async (messageText = null) => {
    const textToSend = messageText || inputMessage.trim();
    if (!textToSend || isLoading) return;

    // Debounce kiểm soát spam Enter
    const now = Date.now();
    if (now - lastUserSubmitRef.current < INPUT_DEBOUNCE_MS) {
      console.log('[Gemini] bị chặn bởi debounce input');
      return;
    }
    lastUserSubmitRef.current = now;

    setInputMessage('');
    setShowSuggestions(false);

    // Thêm tin nhắn của user
    const userMsg = {
      id: Date.now(),
      text: textToSend,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);

    // Hiển thị trạng thái đang tải
    setIsLoading(true);

    // Gửi đến Gemini và nhận phản hồi
    const botResponse = await sendToGemini(textToSend);

    // Thêm phản hồi của bot
    const botMsg = {
      id: Date.now() + 1,
      text: botResponse,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  // Xử lý gợi ý câu hỏi
  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  // Xử lý phím Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Toggle chatbot
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Clear chat
  const clearChat = () => {
    setMessages([]);
    setShowSuggestions(true);
    // Thêm lại tin nhắn chào mừng
    setTimeout(() => {
      const welcomeMessage = getWelcomeMessages();
      setMessages([{
        id: Date.now(),
        text: welcomeMessage,
        sender: 'bot',
        timestamp: new Date()
      }]);
    }, 100);
  };

  return (
    <div className="chatbot-container">
      {/* Nút mở chatbot */}
      {!isOpen && (
        <button 
          className="chatbot-toggle-btn"
          onClick={toggleChat}
          aria-label={t.ariaOpen}
        >
          <HiChatBubbleLeftRight className="w-6 h-6" />
          <span className="chatbot-badge">AI</span>
        </button>
      )}

      {/* Cửa sổ chat */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <HiCpuChip className="w-5 h-5 text-blue-400" />
              <div>
                <h3>{t.title}</h3>
                <p className="flex items-center gap-2">
                  <span className={`api-status ${apiStatus}`}></span>
                  {apiStatus === 'online' ? t.status.online : 
                   apiStatus === 'offline' ? t.status.offline : 
                   apiStatus === 'rate-limited' ? `${t.status.rate}${retryAfterSec ? ` (~${retryAfterSec}s)` : ''}` : t.status.testing}
                </p>
              </div>
            </div>
            <div className="chatbot-header-actions">
              <button 
                onClick={clearChat}
                className="chatbot-clear-btn"
                title={isEn ? 'Clear conversation' : 'Xóa cuộc trò chuyện'}
              >
                {t.clear}
              </button>
              <button 
                onClick={toggleChat}
                className="chatbot-close-btn"
                aria-label={t.ariaClose}
              >
                <HiXMark className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                <div className="message-avatar">
                  {message.sender === 'user' ? (
                    <HiUser className="w-4 h-4" />
                  ) : (
                    <HiCpuChip className="w-4 h-4" />
                  )}
                </div>
                <div className="message-content">
                  <p dangerouslySetInnerHTML={{ __html: message.text }}></p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString('vi-VN', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
              </div>
            ))}

            {/* Gợi ý câu hỏi */}
            {showSuggestions && messages.length <= 1 && (
              <div className="suggestions-container">
                <div className="suggestions-header">
                  <HiSparkles className="w-4 h-4" />
                  <span>{t.suggestions}</span>
                </div>
                <div className="suggestions-grid">
                  {getSampleQuestions().map((question, index) => (
                    <button
                      key={index}
                      className="suggestion-btn"
                      onClick={() => handleSuggestionClick(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Loading indicator */}
            {isLoading && (
              <div className="message bot-message">
                <div className="message-avatar">
                  <HiCpuChip className="w-4 h-4" />
                </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t.placeholder}
              className="chatbot-textarea"
              rows="2"
              disabled={isLoading}
            />
            <button 
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isLoading}
              className="chatbot-send-btn"
              aria-label="Gửi tin nhắn"
            >
              <HiPaperAirplane className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;