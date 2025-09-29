# 🏛️ Philosophy Website - Triết học Mác-Lênin

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://philosophy-website-theta.vercel.app/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
![AI](https://img.shields.io/badge/AI-Integrated%20Chatbot-orange?style=for-the-badge&logo=sparkfun&logoColor=white)

Website giáo dục về triết học Mác-Lênin với giao diện hiện đại, tích hợp AI chatbot thông minh và các công cụ học tập tương tác.

## ✨ Tính năng chính

### 🎨 **Giao diện & Thiết kế**
- **Tông màu đỏ cờ & vàng giấy cũ** - Phong cách cổ điển, trang nghiêm
- **Responsive Design** - Tương thích mọi thiết bị
- **Modern UI/UX** - Giao diện trực quan, dễ sử dụng
- **Smooth Animations** - Hiệu ứng mượt mà, chuyên nghiệp

### 📚 **Nội dung Giáo dục**
- **Lý Thuyết Nền Tảng** - Tìm hiểu về khái niệm giai cấp và đấu tranh giai cấp theo triết học Mác – Lênin
- **Vai Trò Lịch Sử** - Phân tích vai trò của đấu tranh giai cấp như một động lực phát triển xã hội
- **Xã Hội Tương Lai** - Thảo luận về khả năng và giới hạn của một xã hội không còn đối kháng giai cấp
- **Kết luận** - Tổng kết những điểm chính và tầm quan trọng của việc hiểu đấu tranh giai cấp

### 🧠 **Tri thức & Lịch sử**
- **📈 Interactive Timeline** - Dòng thời gian phát triển triết học
- **🗺️ Knowledge Map** - Bản đồ tri thức tương tác
- **🔗 Smart Navigation** - Liên kết thông minh giữa các nội dung
- **📖 Quick Links** - Truy cập nhanh đến các chủ đề

### 🤖 **AI Chatbot / Trợ lý học tập**
- **Tích hợp xuyên suốt**: Mở ở mọi trang để hỏi nhanh khi đang đọc
- **Chuyên sâu triết học**: Mác–Lênin, cổ điển Hy Lạp, phương Đông, phương Tây hiện đại, nhận thức luận, đạo đức học
- **Tự nhận diện ngôn ngữ**: Ưu tiên tiếng Việt, chuyển sang English khi cần
- **Lọc chủ đề**: Từ chối câu hỏi ngoài phạm vi học thuật định trước
- **Cache thông minh (TTL 5 phút)**: Trả lời lại nhanh cho câu hỏi trùng
- **Dedupe yêu cầu**: Tránh gửi trùng khi người dùng nhấn nhiều lần
- **Chống spam**: Throttle ngắn giữa hai lần gửi
- **Chế độ dự phòng**: Trả lời rút gọn khi kết nối nền tảng bị gián đoạn
- **Trạng thái rõ ràng**: online / kiểm tra / giới hạn lưu lượng / ngoại tuyến
- **Gợi ý khởi động** & tự cuộn cuối cuộc trò chuyện
- **Tách cuộn độc lập mobile**: Vùng chat cuộn riêng, thân trang giữ nguyên
- **Thông báo lỗi thân thiện**: Giải thích nguyên nhân & hướng dẫn thử lại

Chi tiết kiến trúc & logic: xem thêm ở `CHATBOT_README.md`.

## 🚀 Demo & Live Site

- **🌐 Live Demo:** https://philosophy-website-theta.vercel.app/
- **📱 QR Code:** Scan để truy cập nhanh trên mobile
- **GitHub Repository:** [Philosophy_Website](https://github.com/LysLama/Philosophy_Website)

<div align="center">
  <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://philosophy-website-theta.vercel.app/" alt="QR Code - Philosophy Website" width="200" height="200">
  
  *Scan QR code để truy cập website trên điện thoại*
</div>

## 🛠️ Công nghệ sử dụng

### Frontend Framework
- **React 19.1.1** - Library UI hiện đại
- **Vite 7.1.5** - Build tool nhanh chóng
- **React Router DOM 7.1.3** - Navigation & routing

### Styling & UI
- **CSS Variables** - Hệ thống màu sắc linh hoạt
- **React Icons** - Bộ icon phong phú
- **Responsive CSS** - Thiết kế đa thiết bị

### AI & API Integration
- **Proxy server-side**: Endpoint `/api/ai/chat` ẩn khóa & chuẩn hóa request
- **Đa dạng định dạng phản hồi**: Parse an toàn nhiều cấu trúc JSON
- **Env tách biệt**: Khóa & thông số mô hình giữ ngoài repo
- **Retry nhẹ**: Thử lại ngắn cho trường hợp bị giới hạn tạm thời
- **Chuẩn hóa câu hỏi**: Lowercase + bỏ dấu chấm hỏi cuối để cache
- **Kho dữ liệu dự phòng nhỏ**: Câu trả lời nền cho từ khóa cốt lõi
- **Pre-filter**: Lọc ngoài phạm vi trước khi gọi mô hình để tiết kiệm tài nguyên

## 📦 Cài đặt & Chạy

### Yêu cầu hệ thống
- Node.js 20.19+ (khuyến nghị)
- npm hoặc yarn
- Git

### Bước 1: Clone repository
```bash
git clone https://github.com/LysLama/Philosophy_Website.git
cd Philosophy_Website
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Cấu hình Environment Variables
```bash
# Copy file template
cp .env.example .env

# Thêm khóa & tham số AI (ví dụ)
AI_API_KEY=your_server_side_key
AI_MODEL=philosophy-assistant-model
```

### Bước 4: Chạy development server
```bash
npm run dev
```

Truy cập: http://localhost:5173

## 🌐 Deployment

### Deploy lên Vercel ✅ (Đã hoàn thành)

**🎉 Website đã được deploy thành công tại:** https://philosophy-website-theta.vercel.app/

**Quy trình đã thực hiện:**
1. ✅ **Push code lên GitHub** (đã có .gitignore bảo vệ .env)
2. ✅ **Import vào Vercel** từ GitHub repository
3. ✅ **Cấu hình Environment Variables** trong Vercel Dashboard:
  - Khóa & biến môi trường cho chatbot (thiết lập trong dashboard hosting)
4. ✅ **Deploy thành công** với AI chatbot hoạt động

📋 **Chi tiết deployment:** Xem file `DEPLOYMENT.md`

## 📁 Cấu trúc dự án

```
Philosophy_Website/
├── 📄 README.md              # File này
├── 📄 DEPLOYMENT.md          # Hướng dẫn deployment
├── 📄 CHATBOT_README.md      # Hướng dẫn chatbot
├── ⚙️ package.json          # Dependencies & scripts
├── ⚙️ vite.config.js        # Vite configuration  
├── 🎨 index.html            # HTML entry point
├── 📁 public/               # Static assets
├── 📁 src/
│   ├── 📄 main.jsx          # React entry point
│   ├── 🎨 index.css         # Global styles & CSS variables
│   ├── 📁 components/       # React components
│   │   ├── ChatBot.jsx      # AI Chatbot component
│   │   ├── Header.jsx       # Navigation header
│   │   ├── InteractiveTimeline.jsx
│   │   └── KnowledgeMap.jsx
│   ├── 📁 pages/            # Page components
│   │   └── CombinedKnowledgePage.jsx
│   ├── 📁 template/         # Content templates
│   │   ├── LyThuyet.jsx     # Theory content
│   │   ├── Vaitro.jsx       # Role & application
│   │   ├── TuongLai.jsx     # Future development
│   │   └── KetLuan.jsx      # Conclusion
│   ├── 📁 styles/           # CSS modules
│   └── 📁 utils/            # Helper functions
└── 📁 .env.example         # Environment template
```

## 🎯 Tính năng nổi bật

### 🔴 Thiết kế Màu sắc
- **Màu chủ đạo:** Đỏ cờ (#dc2626, #b91c1c)
- **Màu phụ:** Vàng giấy cũ (#fef3c7, #f59e0b)
- **Accent:** Vàng đồng (#d97706)
- **Hệ thống CSS Variables** linh hoạt

### 📱 Responsive & Accessible
- Mobile-first design
- Touch-friendly interfaces  
- Screen reader compatibility
- Keyboard navigation support

### ⚡ Performance
- Vite build optimization
- Code splitting
- Lazy loading
- Optimized assets

## 🤝 Đóng góp

1. **Fork** repository
2. **Tạo branch** cho feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** branch (`git push origin feature/AmazingFeature`)
5. **Tạo Pull Request**

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👥 Tác giả

- **LysLama** - *Initial work* - [GitHub](https://github.com/LysLama)

## 🙏 Acknowledgments

- **React Community** - Framework & tools
- **Vite Team** - Build tool excellence
- **Icons:** React Icons library

---

### 📞 Liên hệ & Hỗ trợ

- **GitHub Issues:** [Report bugs](https://github.com/LysLama/Philosophy_Website/issues)
- **Documentation:** Xem các file README trong project
- **API Documentation:** https://ai.google.dev/docs

---

**Made with ❤️ for Philosophy Education**
