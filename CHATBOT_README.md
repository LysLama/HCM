# 🤖 ChatBot Triết Học AI

## 📝 Mô tả
ChatBot AI chuyên sâu về triết học, tích hợp trực tiếp vào mọi trang của website giúp người dùng hỏi nhanh trong lúc đọc. Hệ thống sử dụng một mô hình ngôn ngữ lớn tối ưu cho truy vấn học thuật (được truy cập qua proxy backend bảo mật).

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
- **Proxy bảo mật**: Endpoint `/api/ai/chat` ẩn khóa & chuẩn hóa yêu cầu
- **System prompt động**: Thích ứng ngôn ngữ (VI/EN) theo input
- **Language detection đơn giản**: Regex dấu tiếng Việt + từ khóa tiếng Anh
- **Keyword filtering**: Chặn sớm câu hỏi ngoài phạm vi triết học
- **Caching tạm thời**: TTL 5 phút với key chuẩn hóa
- **In-flight de‑duplication**: Loại bỏ xử lý trùng khi người dùng bấm nhiều lần
- **Throttle nhẹ**: Giảm khả năng spam & giới hạn nền tảng
- **Retry hạn chế**: Thử lại một lần nếu bị giới hạn tạm
- **Fallback offline**: Trả lời tối giản cho từ khóa chính khi mất kết nối
- **Đa dạng định dạng phản hồi**: Parse nhiều shape JSON an toàn
- **Trạng thái trực quan**: online / testing / rate-limited / offline
- **Cuộn độc lập mobile**: Khóa nền – vùng chat cuộn riêng
- **Dọn dẹp promise**: Giải phóng map in-flight sau resolve/reject

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

## 🔑 **Cấu hình API (Khái quát)**

Luồng chuẩn:
1. Frontend gửi danh sách messages (system + user) tới `/api/ai/chat`.
2. Backend thêm khóa bí mật, forward đến nhà cung cấp mô hình.
3. Chuẩn hóa response trả về dạng thống nhất `{ result: { response: string } }`.

Biến môi trường điển hình (ví dụ – không public cụ thể):
```
AI_API_KEY=your_secret_key
AI_MODEL=philosophy-assistant-model
AI_REQUEST_MIN_GAP=1000
```

> Giữ khóa ở backend, không expose qua client build.

## 📱 **Responsive Breakpoints**

- **Desktop**: > 480px - Full features
- **Mobile**: ≤ 480px - Optimized layout
- **Small mobile**: ≤ 320px - Compact view

## 🚀 **Usage / Cách sử dụng**

ChatBot được mount trong layout chung nên luôn sẵn sàng.

1. Bấm nút nổi (góc dưới) để mở
2. Chọn câu hỏi gợi ý nếu chưa biết hỏi gì
3. Gõ câu hỏi triết học (có thể tiếng Việt hoặc English)
4. Xem trạng thái đèn (online / rate-limited / offline)
5. Tiếp tục, hoặc bấm Clear để reset về trạng thái gợi ý

## 🎯 **Câu hỏi mẫu (ví dụ mở rộng)**
- "Đấu tranh giai cấp là gì?"
- "So sánh quan điểm Khổng Tử và Lão Tử về đạo đức"
- "Hegel ảnh hưởng Marx như thế nào?"
- "Dialectical materialism vs idealism?"
- "Vai trò của tự do trong triết học hiện đại?"

## 🔒 **Bảo mật & Giới hạn**

- Tách key qua ENV (không xuất sang client)
- Throttle + cache giảm chi phí gọi model
- Giới hạn độ dài câu hỏi phía client (có thể bổ sung hard cap server)
- Fallback khi offline tránh “dead UI”
- Không lưu lịch sử lâu dài (có thể mở rộng localStorage trong tương lai)

## 🧪 **Kiểm thử nhanh (Checklist)**
- Mở đóng nhiều lần không bị kẹt body scroll
- Gửi nhanh 2 lần → request thứ hai chờ (throttle) hoặc dùng promise cũ
- Câu hỏi lặp lại trả lời tức thì (cache hit log)
- Thay đổi mạng (offline) → fallback có biểu tượng cảnh báo
- Gõ câu hỏi không liên quan → trả lời từ chối bằng tiếng Việt
- Hỏi tiếng Anh → model trả lời English

## 🎉 Trạng thái

ChatBot hiện hoạt động ổn định:
- ✅ Giảm lỗi giới hạn lưu lượng nhờ throttle & retry nhẹ
- ✅ Tối ưu UX mobile (cuộn độc lập)
- ✅ Hiệu năng: cache + dedupe

> Đề xuất tương lai: lưu lịch sử per-session, highlight thuật ngữ triết học, thêm chế độ “giải thích đơn giản cho người mới bắt đầu”.