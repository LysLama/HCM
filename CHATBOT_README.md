# 🤖 ChatBot Triết Học AI

## 📝 Mô tả
ChatBot AI chuyên về triết học được tích hợp vào Philosophy Website, sử dụng Google Gemini API để trả lời các câu hỏi về triết học Mác-Lênin và các chủ đề triết học khác.

## ✨ Tính năng chính

### 🎯 **Chuyên môn hóa**
- Chỉ trả lời câu hỏi liên quan đến triết học
- Tập trung vào triết học Mác-Lênin
- Từ chối lịch sự các câu hỏi ngoài phạm vi

### 🎨 **Giao diện người dùng**
- **Nút floating**: Bong bóng chat ở góc phải dưới
- **Animations mượt mà**: Hiệu ứng chuyển tiếp đẹp mắt
- **Responsive design**: Tương thích mobile và desktop
- **Dark mode support**: Hỗ trợ chế độ tối

### 💬 **Trải nghiệm chat**
- **Gợi ý câu hỏi**: 5 câu hỏi mẫu khi bắt đầu
- **Typing indicator**: Hiệu ứng đang gõ khi AI phản hồi
- **Message formatting**: Hỗ trợ bold, italic
- **Timestamp**: Hiển thị thời gian tin nhắn
- **Auto scroll**: Tự động cuộn đến tin nhắn mới

### 🔧 **Tính năng kỹ thuật**
- **API Integration**: Sử dụng Google Gemini Pro
- **Error handling**: Xử lý lỗi thông minh
- **Keyword filtering**: Lọc câu hỏi theo từ khóa triết học
- **Clear chat**: Xóa lịch sử trò chuyện
- **Accessible**: Tuân thủ accessibility standards

## 🛠️ **Cấu trúc Files**

```
src/
├── components/
│   └── ChatBot.jsx          # Component chính
├── styles/
│   └── ChatBot.css          # Styling và animations
├── utils/
│   └── chatUtils.js         # Utility functions
└── layout/
    └── MainLayout.jsx       # Tích hợp vào layout
```

## 🎨 **Design System**

### **Colors**
- Primary: `#667eea` (Purple-blue gradient)
- Secondary: `#764ba2` 
- Success: `#4facfe`
- Error: `#ff6b6b`
- Background: `#f8fafc`

### **Animations**
- **slideUp**: Hiệu ứng mở chatbot
- **fadeInUp**: Hiệu ứng tin nhắn mới
- **pulse**: Hiệu ứng nút floating
- **typing**: Hiệu ứng đang gõ

## 🔑 **API Configuration**

```javascript
// Sử dụng environment variables để bảo mật API key
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
```

**Lưu ý**: Tạo file `.env` trong thư mục gốc với nội dung:
```
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

## 📱 **Responsive Breakpoints**

- **Desktop**: > 480px - Full features
- **Mobile**: ≤ 480px - Optimized layout
- **Small mobile**: ≤ 320px - Compact view

## 🚀 **Usage**

ChatBot sẽ tự động hiển thị trên tất cả các trang sau khi được tích hợp vào `MainLayout.jsx`.

### **Cách sử dụng:**
1. Click vào nút floating ở góc phải dưới
2. Chọn câu hỏi gợi ý hoặc gõ câu hỏi của bạn
3. Nhận phản hồi từ AI chuyên gia triết học
4. Tiếp tục cuộc trò chuyện hoặc xóa để bắt đầu mới

## 🎯 **Câu hỏi mẫu**
- "Đấu tranh giai cấp là gì?"
- "Vai trò của triết học trong xã hội?"
- "Chủ nghĩa duy vật biện chứng như thế nào?"
- "Lịch sử phát triển như thế nào theo Mác?"
- "Ý thức xã hội được hình thành ra sao?"

## 🔒 **Bảo mật & Giới hạn**

- API key được hardcode (production nên dùng environment variables)
- Rate limiting theo Google API quotas
- Chỉ xử lý text, không hỗ trợ file upload
- Giới hạn độ dài tin nhắn để tối ưu performance

## 🎉 **Hoàn thành**

ChatBot đã được tích hợp hoàn chỉnh vào Philosophy Website với tất cả tính năng được yêu cầu:
- ✅ Giao diện bong bóng chat
- ✅ Tích hợp Gemini API  
- ✅ Chuyên về triết học
- ✅ UX/UI mượt mà
- ✅ Responsive design
- ✅ Error handling