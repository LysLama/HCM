# Website Tư tưởng Hồ Chí Minh về Đại đoàn kết

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React%20Router-7.9.1-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
![AI](https://img.shields.io/badge/AI-Chatbot-orange?style=for-the-badge&logo=sparkfun&logoColor=white)

Dự án web học tập về **Tư tưởng Hồ Chí Minh đối với Đại đoàn kết toàn dân tộc**, gồm bản tiếng Việt và tiếng Anh. Tập trung vào nội dung học thuật, giao diện trang nghiêm, và tích hợp chatbot AI hỗ trợ học tập.

## Tính năng chính

- Giao diện học thuật theo phong cách trang nghiêm, tông đỏ cờ và vàng giấy cũ
- Nội dung đồng bộ VN/EN cho các chuyên đề, phương pháp, vai trò, ứng dụng
- Trang tài liệu có nguồn trích dẫn, video minh họa và tư liệu âm thanh
- Bộ câu hỏi trắc nghiệm có menu điều hướng, lưu số lần chơi, hiệu ứng hoàn thành
- Giải thích bằng AI cho từng câu trả lời đúng/sai ở trang quiz
- Chatbot AI giới hạn đúng chủ đề, tự nhận diện ngôn ngữ và trả lời ngắn gọn

## Công nghệ sử dụng

- React 19, Vite 7, React Router 7
- CSS thuần với biến màu, responsive đầy đủ
- API `/api/ai/chat` (Cloudflare Workers AI) cho chatbot và giải thích quiz

## Cài đặt và chạy local

Yêu cầu: Node.js 20.19+ và npm.

```bash
npm install
npm run dev
```

Truy cập: http://localhost:5173

## Cấu hình AI (tùy chọn)

Sao chép `.env.example` thành `.env`, rồi thêm khóa AI theo hướng dẫn trong `DEPLOYMENT.md`.

## Cấu trúc dự án (rút gọn)

```
Philosophy_Website_MLN/
├── README.md
├── DEPLOYMENT.md
├── api/
│   └── ai/chat.js
├── src/
│   ├── components/
│   ├── template/         # trang nội dung chính VN/EN
│   ├── pages/            # trang kiến thức bổ trợ VN/EN
│   ├── data/             # dữ liệu quiz
│   ├── styles/
│   └── assets/           # hình ảnh, audio
```

## Đường dẫn chính

- Trang chủ: `/` và `/en`
- Quiz: `/quiz` và `/en/quiz`
- Nội dung: `/content` và `/content/en`
- Tài liệu: `/resources` và `/resources/en`

## Tài liệu liên quan

- Triển khai: `DEPLOYMENT.md`
- Chatbot: `CHATBOT_README.md`

## Đóng góp

PR và đề xuất nội dung luôn được hoan nghênh. Vui lòng tạo branch riêng trước khi sửa.
