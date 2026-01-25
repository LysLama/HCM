# Báo cáo thống kê dự án (Philosophy_Website_MLN)

> Mục tiêu: thống kê toàn bộ dự án trong workspace hiện tại, nêu rõ **công dụng** của từng file/thư mục, và mô tả **Input/Output** (I/O) ở mức hành vi chạy/luồng dữ liệu.
>
> Lưu ý bảo mật: Báo cáo này **không in nội dung bí mật** (API tokens/keys). Các giá trị nhạy cảm nếu có sẽ được thay bằng placeholder.

---

## 1) Tổng quan nhanh

- **Loại dự án:** Website học triết (SPA) + chatbot AI hỏi đáp.
- **Frontend:** React + Vite, React Router. CSS thuần (nhiều file theo module).
- **Backend:** Serverless API dưới `/api/*` (theo kiểu Vercel).
- **AI hiện tại:** Cloudflare Workers AI thông qua endpoint `/api/ai/chat`.
- **AI cũ:** Gemini (đã “tắt”, endpoint trả `410 Gone`, còn lại một số file/script test).

---

## 2) Cách chạy / build / deploy

### Chạy dev (local)
1. Cài deps: `npm install`
2. Tạo `.env` (không commit) với:
   - `CF_ACCOUNT_ID=...`
   - `CF_AI_TOKEN=...`
   - `CF_MODEL=@cf/meta/llama-3.1-8b-instruct-fast` (tùy chọn)
3. Chạy: `npm run dev`

**Input:** file mã nguồn + biến môi trường.

**Output:** web chạy local (Vite dev server). Trong dev, cấu hình Vite có thể “giả lập” `/api/ai/chat` để gọi trực tiếp Cloudflare.

### Build
- `npm run build`

**Output:** thư mục build `dist/` (được ignore trong báo cáo vì là artefact).

### Deploy
- Dự án có `vercel.json` để route `/api/*` → serverless, còn lại → `index.html` (SPA fallback).

---

## 3) Kiến trúc & luồng chạy end-to-end

### 3.1 Luồng SPA
1. `index.html` load entry JS của Vite.
2. `src/main.jsx` tạo router (VN/EN) và mount `MainLayout`.
3. `src/layout/MainLayout.jsx` render khung chung: `Header` + `Outlet` + `Footer` + `ChatBot`.
4. Các trang nội dung (`src/pages/*` và `src/template/*`) render nội dung chương 2 và các màn hình tương tác.

**Input chính (client):** URL route, thao tác người dùng (click/scroll/typing), localStorage.

**Output chính (client):** DOM + CSS, chuyển route, lưu/đọc localStorage.

### 3.2 Luồng Chatbot AI
1. Người dùng nhập câu hỏi trong UI `src/components/ChatBot.jsx`.
2. Client gọi `POST /api/ai/chat` với `messages[]`.
3. Serverless handler `api/ai/chat.js` gọi Cloudflare Workers AI.
4. Kết quả trả về client; client parse + format và render.

**Input:** `messages` (system/user) từ client, env vars phía server: `CF_ACCOUNT_ID`, `CF_AI_TOKEN`, `CF_MODEL`.

**Output:** JSON từ Cloudflare (hoặc error), hiển thị câu trả lời.

---

## 4) Cây file (loại trừ `node_modules/`, `dist/`, `.git/`)

Danh sách file hiện có:

```text
.env
.env.example
.gitignore
.vscode/settings.json
.vscode/tasks.json
api/ai/chat.js
api/gemini/[model].js
api/gemini/models.js
CHATBOT_README.md
DEPLOYMENT.md
eslint.config.js
index.html
package.json
package-lock.json
public/vite.svg
README.md
scripts/debug-gemini.mjs
scripts/list-models.mjs
scripts/test_cloudflare_ai.py
scripts/test_proxy_local.mjs
src/assets/flags/flags.js
src/assets/icons/*.svg
src/assets/img/*.jpg, *.png
src/assets/react.svg
src/components/*.jsx
src/context/ReadingProgressContext.jsx
src/data/quizData
src/data/quizDataEn.js
src/data/source_data.txt
src/data/translations.js
src/hooks/useLanguage.js
src/index.css
src/layout/MainLayout.jsx
src/main.jsx
src/pages/*.jsx
src/pages/en/*.jsx
src/styles/*.css
src/template/*.jsx
src/template/en/*.jsx
src/utils/*.js
test-api.html
testAPI.py
vercel.json
vite.config.js
```

---

## 5) Thống kê theo thư mục / file (Purpose + I/O)

### 5.1 Root files

#### `.env` (local-only, chứa bí mật)
- **Purpose:** Cấu hình biến môi trường cho Cloudflare Workers AI.
- **Input:** dev/server runtime đọc env.
- **Output:** Cho phép `/api/ai/chat` và dev proxy gọi Cloudflare.
- **Ghi chú:** Không commit. Báo cáo không in nội dung secret.

#### `.env.example`
- **Purpose:** Mẫu biến môi trường (không chứa secret thật).
- **Input:** Người dùng copy để tạo `.env`.
- **Output:** Tài liệu cấu hình.

#### `.gitignore`
- **Purpose:** Ignore file/thư mục không nên commit (vd `.env*`, `dist`, `node_modules`).
- **Input:** Git.
- **Output:** Quy tắc ignore.

#### `package.json`
- **Purpose:** Khai báo dependencies + scripts (`dev`, `build`, `lint`, `preview`).
- **Input:** npm.
- **Output:** Cài libs, chạy build/dev.

#### `package-lock.json`
- **Purpose:** Lock versions (tạo bởi npm).
- **Input:** npm install.
- **Output:** Reproducible install.

#### `vite.config.js`
- **Purpose:** Cấu hình Vite; có dev middleware proxy `/api/ai/chat` để test local.
- **Input:** Request `POST /api/ai/chat` khi chạy dev; env vars `CF_*`.
- **Output:** Forward request tới Cloudflare Workers AI và trả response.

#### `vercel.json`
- **Purpose:** Route deploy kiểu Vercel: `/api/*` → serverless; còn lại → SPA.
- **Input:** Vercel runtime.
- **Output:** Routing behavior.

#### `eslint.config.js`
- **Purpose:** ESLint rules cho React + hooks + Vite refresh.
- **Input:** ESLint.
- **Output:** Lint warnings/errors.

#### `index.html`
- **Purpose:** HTML entry cho Vite/SPA.
- **Input:** Browser.
- **Output:** Load bundle, mount app.

#### `README.md`
- **Purpose:** Giới thiệu dự án + tính năng + routes.
- **Input:** Người đọc.
- **Output:** Tài liệu.

#### `CHATBOT_README.md`
- **Purpose:** Tài liệu riêng cho chatbot (thiết kế, API, hành vi).
- **Input/Output:** Documentation.

#### `DEPLOYMENT.md`
- **Purpose:** Hướng dẫn deploy/ops.
- **Input/Output:** Documentation.
- **Ghi chú:** Đã thay key nhạy cảm bằng placeholder.

#### `test-api.html` (legacy Gemini)
- **Purpose:** Trang HTML test `/api/gemini/*` khi chạy dev.
- **Input:** Fetch `POST /api/gemini/<model>`.
- **Output:** Hiển thị kết quả/ lỗi.
- **Ghi chú:** Hiện Gemini endpoint trả `410 Gone` nên trang này không còn hoạt động đúng.

#### `testAPI.py` (test Cloudflare)
- **Purpose:** Script Python tối giản để gọi Cloudflare Workers AI trực tiếp.
- **Input:** Env vars `CF_ACCOUNT_ID`, `CF_AI_TOKEN`, `CF_MODEL` và payload `messages`.
- **Output:** In JSON response ra stdout.

---

### 5.2 `.vscode/`

#### `.vscode/settings.json`
- **Purpose:** Cấu hình VS Code cho Python env manager (conda) trong workspace.
- **Input:** VS Code.
- **Output:** Trải nghiệm dev trong editor.

#### `.vscode/tasks.json`
- **Purpose:** Task `build-vite` chạy `npm run build`.
- **Input:** VS Code tasks.
- **Output:** Build output + problemMatcher.

---

### 5.3 `api/` (serverless endpoints)

#### `api/ai/chat.js`
- **Purpose:** Serverless proxy tới Cloudflare Workers AI.
- **Input:** `POST` JSON `{ messages: [{role, content}, ...] }`.
- **Output:** Pass-through JSON/text từ Cloudflare; lỗi nếu thiếu env vars hoặc upstream lỗi.

#### `api/gemini/models.js` (deprecated)
- **Purpose:** Endpoint cũ cho Gemini list models.
- **Input:** Request.
- **Output:** `410 Gone` + message “Gemini removed”.

#### `api/gemini/[model].js` (deprecated)
- **Purpose:** Endpoint cũ Gemini generateContent.
- **Input:** Request + body kiểu Gemini.
- **Output:** `410 Gone`.

---

### 5.4 `public/`

#### `public/vite.svg`
- **Purpose:** Asset mặc định của Vite (icon).
- **Input:** Browser load static.
- **Output:** SVG render.

---

### 5.5 `scripts/` (tooling/test)

#### `scripts/test_proxy_local.mjs`
- **Purpose:** Test nhanh endpoint `/api/ai/chat` (local/dev/deploy) bằng Node fetch.
- **Input:** CLI args: base URL, question.
- **Output:** In HTTP status + body.

#### `scripts/test_cloudflare_ai.py`
- **Purpose:** Test Cloudflare Workers AI theo 2 mode:
  - `--direct`: gọi Cloudflare API trực tiếp.
  - `--proxy`: gọi `/api/ai/chat`.
- **Input:** env vars + CLI args (`--question`, `--model`, `--base-url`).
- **Output:** JSON hoặc text rút gọn + timing.

#### `scripts/list-models.mjs` (legacy Gemini)
- **Purpose:** List Gemini models (yêu cầu Gemini API key).
- **Input:** `VITE_GEMINI_API_KEY`.
- **Output:** In danh sách models.

#### `scripts/debug-gemini.mjs` (legacy Gemini)
- **Purpose:** Debug call Gemini generateContent.
- **Input:** `VITE_GEMINI_API_KEY`, prompt, model.
- **Output:** Log status + body + answer.

---

### 5.6 `src/` (frontend)

#### `src/main.jsx`
- **Purpose:** Entry React: tạo router, mount app, wrap providers.
- **Input:** Browser URL; route table.
- **Output:** Render UI tương ứng route.

#### `src/layout/MainLayout.jsx`
- **Purpose:** Layout chung: Header/Footer + Outlet + ChatBot.
- **Input:** Route outlet.
- **Output:** UI khung + page.

#### `src/index.css`
- **Purpose:** Global CSS variables + base styles.
- **Input:** DOM.
- **Output:** Theme/typography/background.

---

### 5.7 `src/hooks/`

#### `src/hooks/useLanguage.js`
- **Purpose:** Suy luận ngôn ngữ từ path (`/en` hoặc suffix `/en`), cung cấp `toggleLanguage()`.
- **Input:** `location.pathname` + `navigate()`.
- **Output:** `{ lang, isEn, toggleLanguage }` dùng trong UI.

---

### 5.8 `src/components/`

#### `src/components/Header.jsx`
- **Purpose:** Header/nav; chứa điều hướng chính + language toggle.
- **Input:** Route/location; user click.
- **Output:** Navigate.

#### `src/components/Footer.jsx`
- **Purpose:** Footer (thông tin + link).
- **Input:** none.
- **Output:** DOM footer.

#### `src/components/Hero.jsx` / `src/components/HeroEn.jsx`
- **Purpose:** Hero section trang chủ (VN/EN) + nút scroll xuống `#introduction`.
- **Input:** Click arrow.
- **Output:** `scrollIntoView()`.

#### `src/components/LanguageToggle.jsx`
- **Purpose:** Nút đổi ngôn ngữ VN/EN.
- **Input:** Click.
- **Output:** `navigate()` sang route tương ứng.

#### `src/components/Button.jsx`
- **Purpose:** Nút “scroll to top” (ScrollButton).
- **Input:** Scroll position/click.
- **Output:** window scroll.

#### `src/components/ChatBot.jsx`
- **Purpose:** UI chatbot + orchestration gọi `/api/ai/chat`.
- **Input:** User text; network status; cache TTL; `chatUtils`.
- **Output:** Render conversation; status; gọi API; fallback khi lỗi/offline.

#### `src/components/InteractiveTimeline.jsx`
- **Purpose:** Timeline tương tác (VN/EN) cho lộ trình kiến thức.
- **Input:** Click node.
- **Output:** Hiển thị chi tiết + điều hướng link.

#### `src/components/KnowledgeMap.jsx`
- **Purpose:** Bản đồ khái niệm SVG tương tác (zoom/pan/select).
- **Input:** Pointer events; click node.
- **Output:** Highlight + navigate tới page.

#### `src/components/ReadingProgressDashboard.jsx`
- **Purpose:** Dashboard hiển thị tiến độ đọc, bookmark, notes, export/reset.
- **Input:** Context + localStorage; user actions.
- **Output:** Update localStorage/state; file export (JSON) hoặc share link.

#### `src/components/PlainText.jsx`
- **Purpose:** Render text “giữ xuống dòng” (white-space: pre-line).
- **Input:** prop `text`.
- **Output:** DOM text.

---

### 5.9 `src/context/`

#### `src/context/ReadingProgressContext.jsx`
- **Purpose:** Context quản lý reading progress (time/notes/bookmarks) bằng localStorage.
- **Input:** Actions từ UI; localStorage.
- **Output:** Persisted state + helper methods.

---

### 5.10 `src/pages/` (các trang nội dung Chương 2)

> Nhìn chung các page dạng `Chapter2*.jsx` có cấu trúc: hero header + anchor nav + nội dung chia section + sidebar mục lục + video embed + nguồn tham khảo.

#### `src/pages/CombinedKnowledgePage.jsx`
- **Purpose:** “Knowledge Hub” gộp Timeline + KnowledgeMap, có tab chuyển.
- **Input:** User click tab; language từ URL.
- **Output:** Render timeline hoặc map; quick links.

#### `src/pages/TimelinePage.jsx`
- **Purpose:** Trang riêng cho timeline.
- **Input:** none/click.
- **Output:** Render InteractiveTimeline.

#### `src/pages/KnowledgeMapPage.jsx`
- **Purpose:** Trang riêng cho concept map.
- **Input:** none/click.
- **Output:** Render KnowledgeMap.

#### `src/pages/ProgressPage.jsx`
- **Purpose:** Trang riêng cho ReadingProgressDashboard.
- **Input:** user actions.
- **Output:** update/export/reset progress.

#### `src/pages/Chapter2Overview.jsx`
- **Purpose:** Trang tổng quan Chương 2 (VN) + nhiều video/citations.
- **Input:** scroll/click anchor.
- **Output:** nội dung.

#### `src/pages/Chapter2Money.jsx` / `src/pages/en/Chapter2MoneyEn.jsx`
- **Purpose:** Trang “Tiền tệ / Money” (VN/EN).
- **Input:** scroll/click anchor.
- **Output:** nội dung + video embed.

#### `src/pages/Chapter2Services.jsx` / `src/pages/en/Chapter2ServicesEn.jsx`
- **Purpose:** Trang “Dịch vụ & quan hệ trao đổi / Services & exchange relations” (VN/EN).
- **Input:** scroll/click anchor.
- **Output:** nội dung + video/citations.

#### `src/pages/Chapter2MarketConcepts.jsx` / `src/pages/en/Chapter2MarketConceptsEn.jsx`
- **Purpose:** Trang “Khái niệm thị trường / Market concepts” (VN/EN).
- **Input:** scroll/click anchor.
- **Output:** nội dung + bảng + video.

#### `src/pages/Chapter2MarketEconomy.jsx` / `src/pages/en/Chapter2MarketEconomyEn.jsx`
- **Purpose:** Trang “Kinh tế thị trường / Market economy” (VN/EN).
- **Input:** scroll/click anchor.
- **Output:** nội dung + video + refs.

---

### 5.11 `src/template/` (các trang “chương cũ” / trang cấu trúc)

> Nhóm này là các template page (VN/EN) kiểu “Home, Intro, Content, Quiz…” và một số trang lý thuyết cổ điển.

#### `src/template/Home.jsx` / `src/template/en/HomeEn.jsx`
- **Purpose:** Trang home VN/EN; render Hero + Intro; hỗ trợ scroll theo hash.
- **Input:** `location.hash`.
- **Output:** scrollIntoView.

#### `src/template/Intro.jsx` / `src/template/en/IntroEn.jsx`
- **Purpose:** Intro cards + IntersectionObserver để animate khi scroll.
- **Input:** viewport intersection.
- **Output:** Thêm class `is-visible` cho card.

#### `src/template/Content.jsx` / `src/template/en/ContentEn.jsx`
- **Purpose:** Mục lục Chapter 2 dạng grid card (VN/EN).
- **Input:** section list; IntersectionObserver.
- **Output:** Link tới các route.

#### `src/template/Quiz.jsx` / `src/template/en/QuizEn.jsx`
- **Purpose:** Quiz trắc nghiệm VN/EN.
- **Input:** User chọn đáp án; data `quizData` / `quizDataEn`.
- **Output:** Feedback đúng/sai + điểm.

#### `src/template/LyThuyet.jsx` / `src/template/en/TheoryEn.jsx`
- **Purpose:** Trang lý thuyết giai cấp/đấu tranh giai cấp; có bảng scroll ngang (VN).
- **Input:** scroll/drag bảng; đọc nội dung.
- **Output:** Render content + video.

#### `src/template/Vaitro.jsx` / `src/template/en/RoleEn.jsx`
- **Purpose:** Trang vai trò lịch sử của đấu tranh giai cấp (VN/EN).
- **Input:** none.
- **Output:** Render content + video.

#### `src/template/TuongLai.jsx` / `src/template/en/FutureEn.jsx`
- **Purpose:** Trang xã hội tương lai/khả năng & giới hạn (VN/EN).
- **Input:** none.
- **Output:** Render content + video.

#### `src/template/KetLuan.jsx` / `src/template/en/ConclusionEn.jsx`
- **Purpose:** Trang kết luận (VN/EN).
- **Input:** none.
- **Output:** Render content.

---

### 5.12 `src/utils/`

#### `src/utils/chatUtils.js`
- **Purpose:** Helpers cho chatbot: keyword detection, scope filter, format response, sample questions.
- **Input:** user text, raw AI response.
- **Output:** boolean (related/off-topic), HTML string, arrays câu hỏi gợi ý.

#### `src/utils/sourceData.js`
- **Purpose:** Load `src/data/source_data.txt` bằng `?raw` và cắt ra các section theo marker.
- **Input:** raw text + marker.
- **Output:** string section (`getMoneySection()`, `getServicesExchangeSection()`, ...).

#### `src/utils/apiConfig.js` (legacy Gemini)
- **Purpose:** Cấu hình base URL/model list cho Gemini proxy.
- **Input:** code cũ.
- **Output:** constants.

#### `src/utils/modelTester.js` (deprecated)
- **Purpose:** Stub/utility cũ cho test models.
- **Input:** —
- **Output:** —

#### `src/utils/testAPI.js` (deprecated)
- **Purpose:** Stub/test client cũ.
- **Input:** —
- **Output:** —

---

### 5.13 `src/data/`

#### `src/data/source_data.txt`
- **Purpose:** Nguồn nội dung thô để `sourceData.js` cắt section.
- **Input:** đọc ở build time.
- **Output:** text sections cho UI (nếu component dùng).

#### `src/data/quizData` / `src/data/quizDataEn.js`
- **Purpose:** Ngân hàng câu hỏi quiz (VN/EN).
- **Input:** Quiz page đọc.
- **Output:** Render questions/options/explanations.

#### `src/data/translations.js`
- **Purpose:** Placeholder cho i18n (hiện file rỗng).
- **Input/Output:** —

---

### 5.14 `src/styles/`

> Các file CSS theo module UI. I/O chung: **Input** = className/DOM structure, **Output** = layout/typography/animation.

- `Button.css`: style cho ScrollButton.
- `ChatBot.css`: UI chatbot (panel, bubble, status, responsive).
- `CombinedKnowledge.css`: tab layout/quick links.
- `Content.css`: card grid content.
- `Footer.css`, `Header.css`, `Hero.css`, `Home.css`, `Intro.css`: layout/chủ đề cho các page tương ứng.
- `InteractiveTimeline.css`, `KnowledgeMap.css`: style cho components tương tác.
- `Quiz.css`: quiz UI.
- `ReadingProgress.css`: dashboard tiến độ.
- `Section.css`: base style cho các page dạng section/anchor/two-col.

---

### 5.15 `src/assets/`

> Nhóm tài nguyên tĩnh. I/O chung: **Input** = import từ JS/JSX hoặc fetch bởi browser, **Output** = hình/icon hiển thị.

- `src/assets/img/*`: ảnh nền/hero/poster.
- `src/assets/icons/*.svg`: icon cho UI/knowledge hub.
- `src/assets/react.svg`: asset mặc định.
- `src/assets/flags/flags.js`: hiện rỗng (placeholder).

---

## 6) Ghi chú kỹ thuật quan trọng

- **Gemini đã bị loại bỏ:** `/api/gemini/*` trả 410; các file/script liên quan Gemini chỉ còn giá trị tham khảo.
- **Chatbot caching/throttle/retry:** phần lớn logic nằm ở `src/components/ChatBot.jsx` + `src/utils/chatUtils.js`.
- **Bảo mật:** không đưa tokens vào code hoặc docs. Chỉ dùng env vars; rotate key nếu từng lộ.

---

## 7) Đề xuất dọn dẹp (tùy chọn)

- Xóa/archived các file Gemini legacy nếu chắc chắn không dùng:
  - `api/gemini/*`, `scripts/debug-gemini.mjs`, `scripts/list-models.mjs`, `test-api.html`, `src/utils/apiConfig.js`, `src/utils/modelTester.js`, `src/utils/testAPI.js`
- Hoặc giữ lại nhưng ghi rõ “deprecated” trong README để tránh nhầm.

---

## 8) Checklist nhanh để verify

- `npm run dev` → mở trang → chatbot gửi câu hỏi → nhận trả lời.
- `npm run build` → build thành công.
- Deploy Vercel → `/api/ai/chat` hoạt động khi set env vars `CF_*`.
