import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { HiChatBubbleLeftRight, HiXMark, HiPaperAirplane, HiUser, HiCpuChip, HiSparkles } from 'react-icons/hi2';
import '../styles/ChatBot.css';
import { getWelcomeMessages, getSampleQuestions, isGreeting, isOnTopic, detectLanguage, formatPhilosophyResponse } from '../utils/chatUtils';

// Cloudflare Workers AI config
const REQUEST_MIN_GAP_MS = 1000;
const MAX_BACKOFF_RETRY = 1;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [apiStatus, setApiStatus] = useState('online'); // 'online', 'offline', 'testing', 'rate-limited'
  const [retryAfterSec, setRetryAfterSec] = useState(null);
  const [lockBodyScroll, setLockBodyScroll] = useState(false);
  const messagesEndRef = useRef(null);
  const inFlightRef = useRef(new Map()); // dedupe theo userMessage
  const lastRequestTimeRef = useRef(0); // throttle requests
  const cacheRef = useRef(new Map()); // question cache: key -> { answer, ts }
  const CACHE_TTL_MS = 5 * 60 * 1000; // 5 phút
  const lastUserSubmitRef = useRef(0); // debounce input submissions
  const INPUT_DEBOUNCE_MS = 800; // thời gian tối thiểu giữa 2 lần Enter

  const location = useLocation();
  const isEn = location.pathname.endsWith('/en') || location.pathname.includes('/en/');

  // Only lock body scroll on narrow/mobile screens (desktop users should still be able to scroll the page)
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)');
    const update = () => setLockBodyScroll(mql.matches);
    update();
    if (mql.addEventListener) mql.addEventListener('change', update);
    else mql.addListener(update);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', update);
      else mql.removeListener(update);
    };
  }, []);

  // Helpers for localization
  const t = {
    title: isEn ? 'AI Philosophy Assistant' : 'Trợ lý Triết học AI',
    clear: isEn ? 'Clear' : 'Xóa',
    placeholder: isEn ? 'Ask me about philosophy, class struggle...' : 'Hỏi tôi về triết học, đấu tranh giai cấp...',
    ariaOpen: isEn ? 'Open philosophy chatbot' : 'Mở chatbot triết học',
    ariaClose: isEn ? 'Close chatbot' : 'Đóng chatbot',
    suggestions: isEn ? 'Suggested questions:' : 'Câu hỏi gợi ý:',
    sending: isEn ? 'Sending question to AI...' : 'Đang gửi câu hỏi tới AI...',
    status: {
      online: isEn ? 'AI online' : 'AI đang hoạt động',
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

  // Gọi Cloudflare Workers AI endpoint (/api/ai/chat)
  const callWorkersAI = async (prompt, setApiStatus, langHint = 'vi', options = {}) => {
    const sys = langHint === 'en'
      ? 'You are a learning assistant for Ho Chi Minh Thought on great national solidarity. Respond in clear, concise ENGLISH.'
      : 'Bạn là trợ lý học tập về Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc. Trả lời bằng TIẾNG VIỆT rõ ràng, súc tích.';
    const payload = {
      messages: [ { role: 'system', content: sys }, { role: 'user', content: prompt } ],
      max_tokens: options.max_tokens
    };
    const response = await fetch('/api/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    let data;
    try {
      data = await response.json();
    } catch (e) {
      const raw = await response.text();
      throw new Error(`Invalid JSON from AI: ${raw}`);
    }
    // If serverless fell back to input/prompt format, shape still similar; extract robustly
    const answer = data?.result?.response || data?.result?.output || data?.response || data?.output || JSON.stringify(data).slice(0, 600);
    if (!response.ok) {
      if (response.status === 429) setApiStatus('rate-limited');
      throw new Error(`${response.status}: ${answer}`);
    }
    setApiStatus('online');
    return typeof answer === 'string' ? answer : JSON.stringify(answer);
  };

  // Gửi tin nhắn đến AI
  const sendToAI = async (userMessage, attempt = 0) => {
    const lowerMessage = userMessage.toLowerCase();

    // Normalize câu hỏi để cache (trim + lower + bỏ dấu chấm hỏi cuối)
    const normKey = lowerMessage.replace(/\?+$/,'').trim();
    const cached = cacheRef.current.get(normKey);
    if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
      console.log('[AI] dùng cache hit cho câu hỏi:', normKey);
      return cached.answer;
    }
    
    // Kiểm tra xem câu hỏi có liên quan đến triết học không
    const langHint = detectLanguage(userMessage);

    if (isGreeting(userMessage)) {
      return langHint === 'en'
        ? "Hello! I’m your AI study assistant for Ho Chi Minh Thought on great national solidarity. Ask me about roles, objectives, forces, foundations, or the united front."
        : "Xin chào! Tôi là trợ lý học tập về tư tưởng Hồ Chí Minh. Bạn muốn hỏi về vai trò, mục tiêu, lực lượng, nền tảng hay mặt trận đại đoàn kết?";
    }

    if (!isOnTopic(userMessage)) {
      return langHint === 'en'
        ? "I can help with topics related to Ho Chi Minh Thought on great national solidarity. Please ask about unity, the united front, roles, objectives, forces, or foundations."
        : "Tôi chỉ hỗ trợ các câu hỏi về tư tưởng Hồ Chí Minh và đại đoàn kết toàn dân tộc. Bạn có thể hỏi về vai trò, mục tiêu, lực lượng, nền tảng hoặc mặt trận.";
    }

    // ƯU TIÊN GỌI API AI CHO TẤT CẢ CÂU HỎI TRIẾT HỌC
  console.log('[AI] chuẩn bị gọi API cho câu hỏi:', userMessage);
    
    // Simple language detection: only answer in English when the user writes English
    // Tạo prompt cho các câu hỏi triết học
    const prompt = langHint === 'en'
      ? `You are a learning assistant on Ho Chi Minh Thought.
Answer clearly, concisely, and directly.

REQUIREMENTS:
- Max 90–120 words.
- Prefer 3–5 bullet points.
- Avoid long historical background.
- If comparison is needed, keep it to one short sentence.

Question: ${userMessage}

Answer in English.`
      : `Bạn là trợ lý học tập về Tư tưởng Hồ Chí Minh.
Hãy trả lời đúng trọng tâm, ngắn gọn, dễ hiểu.

YÊU CẦU BẮT BUỘC:
- Tối đa 90-120 từ.
- Ưu tiên 3-5 gạch đầu dòng.
- Không lan man, không thêm phần lịch sử dài.
- Nếu cần so sánh, chỉ 1 câu ngắn.

Câu hỏi: ${userMessage}

Trả lời bằng tiếng Việt.`;

    try {
      // In-flight dedupe theo nguyên văn câu hỏi
      if (inFlightRef.current.has(userMessage)) {
        console.log('[AI] phát hiện yêu cầu đang xử lý, dùng lại promise sẵn có');
        return inFlightRef.current.get(userMessage);
      }

      // Throttle: đảm bảo cách nhau tối thiểu REQUEST_MIN_GAP_MS
      const now = Date.now();
      const gap = now - lastRequestTimeRef.current;
      if (gap < REQUEST_MIN_GAP_MS) {
        const waitMs = REQUEST_MIN_GAP_MS - gap;
        console.log(`[AI] throttle: chờ ${waitMs}ms trước khi gửi`);
        await new Promise(r => setTimeout(r, waitMs));
      }
      lastRequestTimeRef.current = Date.now();

  console.log('🤖', t.sending);
      setApiStatus('testing');

      const p = (async () => {
      const responseText = await callWorkersAI(prompt, setApiStatus, langHint, { max_tokens: 320 });
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
      console.error('Lỗi khi gọi AI:', error);
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
        console.log(`[AI] 429: chờ ${waitSec}s rồi retry (attempt ${attempt + 1}/${MAX_BACKOFF_RETRY})`);
        setApiStatus('rate-limited');
        await new Promise(r => setTimeout(r, waitSec * 1000));
        setApiStatus('testing');
        return await sendToAI(userMessage, attempt + 1);
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
      console.log('[AI] bị chặn bởi debounce input');
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

    try {
      // Gửi đến AI và nhận phản hồi
      const botResponse = await sendToAI(textToSend);

      // Thêm phản hồi của bot
      const botMsg = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      const errMsg = isEn
        ? `Sorry, I ran into a problem. Please try again later. (${error?.message || 'unknown error'})`
        : `Xin lỗi, tôi gặp lỗi khi xử lý. Vui lòng thử lại sau. (${error?.message || 'lỗi không xác định'})`;
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: errMsg,
        sender: 'bot',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
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

  // Lock body scroll only on mobile (keep desktop page scroll working)
  useEffect(() => {
    let scrollY = 0;
    if (isOpen && lockBodyScroll) {
      scrollY = window.scrollY;
      document.body.dataset.chatbotScrollY = String(scrollY);
      document.body.classList.add('chatbot-scroll-locked');
      // Prevent layout shift while locking scroll
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
    } else {
      if (document.body.classList.contains('chatbot-scroll-locked')) {
        const y = parseInt(document.body.dataset.chatbotScrollY || '0', 10);
        document.body.classList.remove('chatbot-scroll-locked');
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        window.scrollTo(0, y);
      }
    }
    return () => {
      if (document.body.classList.contains('chatbot-scroll-locked')) {
        const y = parseInt(document.body.dataset.chatbotScrollY || '0', 10);
        document.body.classList.remove('chatbot-scroll-locked');
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        window.scrollTo(0, y);
      }
    };
  }, [isOpen, lockBodyScroll]);

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
                <HiXMark style={{width: '20px', height: '20px'}} />
                ×
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