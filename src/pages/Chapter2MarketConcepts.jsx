import React from 'react';
import '../styles/Section.css';

const Chapter2MarketConcepts = () => {
  return (
    <div className="page-container">
      <header className="section-hero">
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Chương 2 • Thị trường: Khái niệm, phân loại và vai trò</h1>
      </header>
      <main className="section-main-content">
        {/* Anchor nav */}
        <nav className="anchor-nav" aria-label="Mục lục trang">
          <a href="#concept">Khái niệm</a>
          <a href="#types">Phân loại</a>
          <a href="#roles">Vai trò</a>
          <a href="#videos">Video</a>
          <a href="#markdown">Markdown</a>
        </nav>

        {/* Two-column layout */}
        <div className="two-col">
          <article className="col-main content-text">
            <h2>II. Thị trường và nền kinh tế thị trường</h2>
            <h3>3) Khái niệm, phân loại và vai trò của thị trường</h3>
            <p>
              Trình bày <strong>khái niệm</strong>, <strong>phân loại</strong> và <strong>vai trò</strong> của thị trường theo cách súc tích, dễ tra cứu. Nội dung mang tính <em>tổng hợp–diễn giải</em>.
            </p>

            {/* A. Khái niệm thị trường */}
            <section id="concept">
              <h3>A. Khái niệm thị trường</h3>
              <p>
                <strong>Thị trường</strong> là <strong>tổng hòa các quan hệ kinh tế</strong> nơi nhu cầu của các chủ thể được đáp ứng thông qua <strong>mua–bán</strong>, với <strong>giá cả</strong> và <strong>số lượng</strong> phù hợp <strong>trình độ phát triển</strong> của sản xuất xã hội.
                Có thể nhận diện ở <strong>cấp độ cụ thể</strong> (chợ, cửa hàng, phòng giao dịch, siêu thị…) và <strong>cấp độ trừu tượng</strong> (các quan hệ cung–cầu, giá cả, hàng–tiền, hợp tác–cạnh tranh, trong nước–ngoài nước).
              </p>
              <div className="callout info">
                <strong>Hộp quan niệm Begg–Fischer–Dornbusch</strong>
                <p style={{margin:'6px 0 0'}}>
                  Thị trường là “biểu hiện thu gọn” của quá trình dung hòa quyết định{' '}
                  <span style={{whiteSpace:'nowrap'}}><strong>tiêu dùng</strong> (hộ gia đình)</span>,{' '}
                  <span style={{whiteSpace:'nowrap'}}><strong>sản xuất</strong> (doanh nghiệp)</span>,{' '}
                  <span style={{whiteSpace:'nowrap'}}><strong>lao động</strong> (người làm công)</span>{' '}
                  <strong>bằng điều chỉnh giá cả</strong>.
                </p>
              </div>
            </section>

            {/* B. Phân loại thị trường */}
            <section id="types">
              <h3>B. Phân loại thị trường</h3>
              <div className="responsive-table" tabIndex={0} aria-label="Bảng phân loại thị trường">
                <table>
                  <thead>
                    <tr>
                      <th>Tiêu chí</th>
                      <th>Phân loại</th>
                      <th>Gợi ý ví dụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Theo đối tượng</strong></td>
                      <td>Hàng hóa, Dịch vụ</td>
                      <td>Thực phẩm, điện thoại; ngân hàng, logistics, đám mây…</td>
                    </tr>
                    <tr>
                      <td><strong>Theo phạm vi</strong></td>
                      <td>Trong nước, Thế giới</td>
                      <td>Siêu thị nội địa; sàn TMĐT xuyên biên giới…</td>
                    </tr>
                    <tr>
                      <td><strong>Theo vai trò yếu tố</strong></td>
                      <td>Tư liệu tiêu dùng, Tư liệu sản xuất</td>
                      <td>Đồ gia dụng; máy móc, nguyên liệu…</td>
                    </tr>
                    <tr>
                      <td><strong>Theo cơ chế vận hành</strong></td>
                      <td>Tự do, Có điều tiết; Cạnh tranh hoàn hảo/không hoàn hảo (độc quyền)</td>
                      <td>Điều tiết giá xăng; độc quyền tự nhiên hạ tầng…</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="table-hint">Kéo ngang để xem đủ bảng trên màn hình nhỏ.</p>
              <p style={{marginTop: '10px'}}>
                <em>Lưu ý</em>: hệ thống thị trường <strong>biến đổi theo trình độ phát triển</strong> của nền kinh tế; cần nắm <strong>bản chất</strong> và <strong>quy luật</strong> để tổ chức SXKD hiệu quả.
              </p>
            </section>

            {/* C. Vai trò của thị trường */}
            <section id="roles">
              <h3>C. Vai trò của thị trường</h3>
              <div className="grid two-cols gap-md">
                <div className="card">
                  <h4>1) Thực hiện giá trị & cầu nối</h4>
                  <p><em>Giá trị hàng hóa được thực hiện trong trao đổi; thị trường rộng mở thúc đẩy sản xuất và tiêu dùng.</em></p>
                </div>
                <div className="card">
                  <h4>2) Kích thích sáng tạo & phân bổ</h4>
                  <p><em>Khuyến khích nỗ lực–sáng tạo; nguồn lực chảy tới nơi sử dụng hiệu quả hơn.</em></p>
                </div>
                <div className="card">
                  <h4>3) Gắn kết & hội nhập</h4>
                  <p><em>Kết nối các khâu, vùng miền; liên thông với kinh tế thế giới, vượt ranh giới hành chính.</em></p>
                </div>
              </div>

              <div className="callout info" style={{marginTop:'18px'}}>
                <strong>Ghi chú</strong>
                <p style={{margin:'6px 0 0'}}>
                  Vai trò của thị trường <strong>không tách rời cơ chế thị trường</strong> (“<em>bàn tay vô hình</em>”): hệ thống quan hệ <strong>tự điều chỉnh</strong> theo <strong>các quy luật kinh tế</strong> và là phương thức cơ bản phân bổ <strong>vốn, tài nguyên, công nghệ, lao động, thông tin, trí tuệ</strong>.
                </p>
              </div>

              {/* Keep existing quote */}
              <div className="quote-section">
                <blockquote>
                  “Mỗi cá nhân, khi theo đuổi lợi ích riêng, thường bị ‘bàn tay vô hình’ dẫn dắt vì lợi ích chung.”
                  <cite> — Adam Smith — <a href="https://www.econlib.org/library/Topics/Details/invisiblehand.html?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Econlib</a></cite>
                </blockquote>
              </div>
            </section>

            {/* Video section (preserved) */}
            <section id="videos">
              <h3>Video gợi ý</h3>
              <div className="video-section">
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/TtF0DU2UMT4" title="Thị trường & cơ chế thị trường" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <p className="video-caption">KTCT Mác–Lênin: Thị trường &amp; cơ chế thị trường (VN)</p>
                </div>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/R1TX-84QS1o" title="Kinh tế thị trường & đặc trưng" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <p className="video-caption">Kinh tế thị trường &amp; đặc trưng cơ bản (VN)</p>
                </div>
              </div>
            </section>

            {/* Markdown references at end of page */}
            <section id="markdown">
              <h3>Markdown</h3>
              <ul className="bullet-list">
                <li>
                  <strong><a href="https://www.britannica.com/money/market?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Market | Definition, History, Types, &amp; Facts — Britannica</a></strong> (Encyclopedia Britannica)
                </li>
                <li>
                  <strong><a href="https://www.britannica.com/money/invisible-hand?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Invisible hand — Britannica</a></strong> (Encyclopedia Britannica)
                </li>
                <li>
                  <strong><a href="https://plato.stanford.edu/entries/markets/?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Markets — Stanford Encyclopedia of Philosophy (SEP)</a></strong> (Stanford Encyclopedia of Philosophy)
                </li>
                <li>
                  <strong><a href="https://plato.stanford.edu/archives/fall2024/entries/economics/?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Philosophy of Economics — Stanford Encyclopedia of Philosophy</a></strong> (ngữ cảnh “bàn tay vô hình” trong Smith) (Stanford Encyclopedia of Philosophy)
                </li>
                <li>
                  <strong><a href="https://openstax.org/books/principles-economics-3e/pages/4-3-the-market-system-as-an-efficient-mechanism-for-information?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Principles of Economics 3e — 4.3 The Market System as an Efficient Mechanism for Information (OpenStax)</a></strong> (openstax.org)
                </li>
                <li>
                  <strong><a href="https://openstax.org/books/principles-economics-2e/pages/1-key-terms?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Principles of Economics 2e — Key Terms: Market (OpenStax)</a></strong> (openstax.org)
                </li>
                <li>
                  <strong><a href="https://www.imf.org/en/Publications/fandd/issues/Series/Back-to-Basics/Supply-and-Demand?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Back to Basics: Supply and Demand — IMF</a></strong> (giải thích cơ chế giá–cung–cầu) (IMF)
                </li>
                <li>
                  <strong><a href="https://www.oecd.org/content/dam/oecd/en/publications/reports/2012/10/market-definition_e54deedd/62f0f46c-en.pdf?utm_source=chatgpt.com" target="_blank" rel="noreferrer">OECD Competition — Market Definition (Note)</a></strong> (khái niệm “thị trường liên quan”, HMT test) (OECD)
                </li>
                <li>
                  <strong><a href="https://www.worldbank.org/en/topic/competition-policy?utm_source=chatgpt.com" target="_blank" rel="noreferrer">World Bank — Markets and Competition Policy</a></strong> (vì sao cạnh tranh khiến thị trường vận hành hiệu quả cho phát triển) (World Bank)
                </li>
                <li>
                  <strong><a href="https://www.investopedia.com/terms/m/market.asp?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Investopedia — Market: What It Means in Economics, Types, and Common Examples</a></strong> (tổng quan phổ thông, ví dụ các loại thị trường) (Investopedia)
                </li>
              </ul>
            </section>
          </article>

          {/* Sidebar anchors */}
          <aside className="col-side">
            <div className="side-card sticky">
              <h4>Mục lục</h4>
              <ul>
                <li><a href="#concept">Khái niệm</a></li>
                <li><a href="#types">Phân loại</a></li>
                <li><a href="#roles">Vai trò</a></li>
                <li><a href="#videos">Video</a></li>
                <li><a href="#markdown">Markdown</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Chapter2MarketConcepts;
