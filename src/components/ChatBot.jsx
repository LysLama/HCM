import React, { useState, useEffect, useRef } from 'react';
import { HiChatBubbleLeftRight, HiXMark, HiPaperAirplane, HiUser, HiCpuChip, HiSparkles } from 'react-icons/hi2';
import '../styles/ChatBot.css';
import { getWelcomeMessages, getSampleQuestions, isPhilosophyRelated, formatPhilosophyResponse } from '../utils/chatUtils';
import { testGeminiAPI } from '../utils/testAPI';
import { findWorkingModel } from '../utils/modelTester';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Danh sách các models để thử nghiệm (ưu tiên từ tốt nhất)
const GEMINI_MODELS = [
  'gemini-1.5-flash-latest',
  'gemini-1.5-flash', 
  'gemini-1.5-pro',
  'gemini-pro'
];

// URL sẽ được xây dựng động dựa trên model
const getGeminiURL = (model) => `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [apiStatus, setApiStatus] = useState('online'); // 'online', 'offline', 'testing'
  const messagesEndRef = useRef(null);

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
    if (modelIndex >= GEMINI_MODELS.length) {
      throw new Error('Tất cả các model Gemini đều không khả dụng');
    }

    const currentModel = GEMINI_MODELS[modelIndex];
    const apiUrl = getGeminiURL(currentModel);

    try {
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
        console.warn(`Model ${currentModel} failed with status ${response.status}, trying next model...`);
        return await tryGeminiAPI(userMessage, modelIndex + 1);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        console.log(`✅ Success with model: ${currentModel}`);
        setApiStatus('online');
        return data.candidates[0].content.parts[0].text;
      } else {
        console.warn(`Model ${currentModel} returned invalid format, trying next model...`);
        return await tryGeminiAPI(userMessage, modelIndex + 1);
      }
    } catch (error) {
      console.warn(`Model ${currentModel} connection failed:`, error.message);
      return await tryGeminiAPI(userMessage, modelIndex + 1);
    }
  };

  // Gửi tin nhắn đến Gemini API
  const sendToGemini = async (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
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
    console.log('Preparing to call Gemini API for question:', userMessage);
    
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
      console.log('🤖 Đang gửi câu hỏi tới Gemini API...');
      setApiStatus('testing');
      
      const responseText = await tryGeminiAPI(prompt);
      return formatPhilosophyResponse(responseText);
      
    } catch (error) {
      console.error('Lỗi khi gọi Gemini API:', error);
      setApiStatus('offline'); // Đánh dấu API offline
      
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
        return 'Xin lỗi, đã vượt quá giới hạn API. Vui lòng thử lại sau ít phút.';
      }
      return `Xin lỗi, tôi đang gặp sự cố kỹ thuật: ${error.message}. Vui lòng thử lại sau.`;
    }
  };

  // Xử lý gửi tin nhắn
  const handleSendMessage = async (messageText = null) => {
    const textToSend = messageText || inputMessage.trim();
    if (!textToSend || isLoading) return;

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
          aria-label="Mở chatbot triết học"
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
                <h3>Trợ lý Triết học AI</h3>
                <p className="flex items-center gap-2">
                  <span className={`api-status ${apiStatus}`}></span>
                  {apiStatus === 'online' ? 'AI Gemini đang hoạt động' : 
                   apiStatus === 'offline' ? 'Chế độ cơ bản' : 'Đang kiểm tra...'}
                </p>
              </div>
            </div>
            <div className="chatbot-header-actions">
              <button 
                onClick={clearChat}
                className="chatbot-clear-btn"
                title="Xóa cuộc trò chuyện"
              >
                Xóa
              </button>
              <button 
                onClick={toggleChat}
                className="chatbot-close-btn"
                aria-label="Đóng chatbot"
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
                  <span>Câu hỏi gợi ý:</span>
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
              placeholder="Hỏi tôi về triết học, đấu tranh giai cấp..."
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