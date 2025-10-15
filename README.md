# 🏛️ Philosophy Website — Chương 2: Hàng hóa, Thị trường và Vai trò Chủ thể

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://philosophy-website-theta.vercel.app/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React%20Router-7.9.1-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
![AI](https://img.shields.io/badge/AI-Integrated%20Chatbot-orange?style=for-the-badge&logo=sparkfun&logoColor=white)

Website giáo dục về triết học Mác–Lênin với giao diện hiện đại, tích hợp AI chatbot và các công cụ học tập tương tác. Dự án đã chuyển trọng tâm sang Chương 2: Hàng hóa, tiền tệ, dịch vụ, thị trường và nền kinh tế thị trường — có phiên bản tiếng Việt và tiếng Anh.

## ✨ Tính năng chính

### 🎨 **Giao diện & Thiết kế**
- **Tông màu đỏ cờ & vàng giấy cũ** - Phong cách cổ điển, trang nghiêm
- **Responsive Design** - Tương thích mọi thiết bị
- **Modern UI/UX** - Giao diện trực quan, dễ sử dụng
- **Smooth Animations** - Hiệu ứng mượt mà, chuyên nghiệp

### 📚 **Nội dung Chương 2**
- I. Lý luận của C. Mác về sản xuất hàng hóa và hàng hóa
  - 1) Hàng hóa & Tiền tệ — nguồn gốc, bản chất, chức năng, quy luật lưu thông
  - 2) Dịch vụ & các quan hệ trao đổi đặc thù
- II. Thị trường và nền kinh tế thị trường
  - 3) Khái niệm, phân loại và vai trò của thị trường
  - 4) Nền kinh tế thị trường — đặc trưng, quy luật chủ yếu và vai trò Nhà nước

Phiên bản tiếng Anh đã được bổ sung đầy đủ cho cả 4 nội dung.

### 🧠 **Trung tâm Tri thức & Tương tác**
- **📈 Learning Path / Timeline** — Lộ trình học nhanh Chương 2
- **🗺️ Concept Map** — Bản đồ khái niệm tương tác
- **�️ SVG Icon System** — Bộ biểu tượng thống nhất (stroke=currentColor)
- **📖 Quick Links** — Liên kết nhanh đến 4 chủ đề chính (VN/EN)

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

- **🌐 Live Demo:** https://philosophy-website-navy.vercel.app/
- **📱 QR Code:** Quét để truy cập nhanh trên mobile
- **GitHub Repository:** [Philosophy_Website](https://github.com/LysLama/Philosophy_Website)

<div align="center">
  <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://philosophy-website-navy.vercel.app/" alt="QR Code - Philosophy Website" width="200" height="200">
  
  *Scan QR code để truy cập website trên điện thoại*
</div>

## 🛠️ Công nghệ sử dụng

### Frontend
- **React 19.1.1** — UI hiện đại
- **Vite 7.1.5** — Build nhanh
- **React Router DOM 7.9.1** — Routing SPA

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

## 📦 Cài đặt & Chạy (Local)

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

### Bước 3: Cấu hình Environment Variables (nếu dùng chatbot)
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

### Deploy lên Vercel ✅ (đang hoạt động)

**URL Production:** https://philosophy-website-theta.vercel.app/

Tóm tắt quy trình:
1) Kết nối GitHub repo vào Vercel (Project: Philosophy_Website)
2) Thiết lập Build: `vite build` — Output: `dist`
3) (Tùy chọn) Khai báo ENV cho chatbot trong Project Settings
4) Mỗi lần push lên `main` sẽ tự động tạo Production deploy

Chi tiết: xem `DEPLOYMENT.md`

## 📁 Cấu trúc dự án

```
Philosophy_Website/
├── 📄 README.md
├── 📄 DEPLOYMENT.md
├── 📄 CHATBOT_README.md
├── ⚙️ package.json
├── ⚙️ vite.config.js
├── 🎨 index.html
├── 📁 public/
├── 📁 src/
│   ├── 📄 main.jsx
│   ├── 🎨 index.css
│   ├── 📁 assets/
│   │   └── icons/            # SVG icon set (learning-path, money, services, market, market-economy...)
│   ├── 📁 components/
│   │   ├── ChatBot.jsx
│   │   ├── Header.jsx / Footer.jsx
│   │   ├── Hero.jsx / HeroEn.jsx
│   │   ├── InteractiveTimeline.jsx
│   │   └── KnowledgeMap.jsx
│   ├── 📁 pages/
│   │   ├── CombinedKnowledgePage.jsx
│   │   ├── Chapter2Money.jsx
│   │   ├── Chapter2Services.jsx
│   │   ├── Chapter2MarketConcepts.jsx
│   │   └── Chapter2MarketEconomy.jsx
│   │   └── en/
│   │       ├── Chapter2MoneyEn.jsx
│   │       ├── Chapter2ServicesEn.jsx
│   │       ├── Chapter2MarketConceptsEn.jsx
│   │       └── Chapter2MarketEconomyEn.jsx
│   ├── 📁 template/
│   │   ├── Home.jsx / Intro.jsx
│   │   ├── Content.jsx
│   │   ├── en/
│   │   │   ├── HomeEn.jsx / IntroEn.jsx
│   │   │   └── ContentEn.jsx
│   ├── 📁 styles/
│   └── 📁 utils/
└── 📁 .env.example
```

## 🌍 Ngôn ngữ & Đường dẫn chính

- Trang chủ:
  - VN: `/`
  - EN: `/en`
- Mục lục (Content):
  - VN: `/content`
  - EN: `/content/en`
- Trung tâm Tri thức (Chapter 2 Hub):
  - VN: `/knowledge`
  - EN: `/knowledge/en`
- Chương 2 (VN):
  - `/chapter2/money`
  - `/chapter2/services`
  - `/chapter2/market-concepts`
  - `/chapter2/market-economy`
- Chapter 2 (EN):
  - `/chapter2/money/en`
  - `/chapter2/services/en`
  - `/chapter2/market-concepts/en`
  - `/chapter2/market-economy/en`

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
