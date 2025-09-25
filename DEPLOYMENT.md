# Hướng dẫn Deploy lên Vercel

## Bước 1: Chuẩn bị Git Repository

1. **Add và commit tất cả file (trừ .env):**
```bash
git add .
git commit -m "feat: Complete website with chatbot functionality"
git push origin main
```

## Bước 2: Deploy lên Vercel

1. **Truy cập:** https://vercel.com
2. **Đăng nhập** bằng GitHub account
3. **Import Project:** Chọn repository `Philosophy_Website`
4. **Framework:** Vercel sẽ tự động detect Vite
5. **Build Command:** `npm run build` (mặc định)
6. **Output Directory:** `dist` (mặc định)

## Bước 3: Cấu hình Environment Variables

**QUAN TRỌNG:** Trước khi deploy, cần thêm API key:

1. Trong Vercel Dashboard → **Settings** tab
2. Chọn **Environment Variables**
3. Thêm variable:
   - **Name:** `VITE_GEMINI_API_KEY`
   - **Value:** `AIzaSyA6rpMpd19WMq_4jqJ8C7U4A_vTfpC4_tc` (API key thực của bạn)
   - **Environments:** Chọn tất cả (Production, Preview, Development)

## Bước 4: Deploy

1. Click **Deploy** 
2. Đợi build hoàn thành (2-3 phút)
3. Vercel sẽ cung cấp URL live site

## Bước 5: Kiểm tra

- **Website:** Kiểm tra tất cả trang hoạt động
- **Chatbot:** Test AI chatbot có trả lời được không
- **Navigation:** Kiểm tra menu và links

## Troubleshooting

### Nếu chatbot không hoạt động:
1. Kiểm tra Environment Variables trong Vercel
2. Đảm bảo API key chính xác
3. Check console logs trong browser (F12)

### Nếu build fail:
1. Kiểm tra `package.json` dependencies
2. Ensure Node.js version tương thích
3. Check build logs trong Vercel dashboard

## Security Note

- ✅ File `.env` được `.gitignore` bảo vệ
- ✅ API key không bao giờ xuất hiện trên GitHub
- ✅ Chỉ có Vercel dashboard mới có API key thật