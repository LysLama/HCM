import React from 'react';
import '../styles/Section.css';

const Chapter2Money = () => {
  return (
    <div className="page-container">
      <header className="section-hero">
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Chương 2 • Tiền tệ</h1>
      </header>
      <main className="section-main-content">
        {/* Anchor nav */}
        <nav className="anchor-nav" aria-label="Mục lục trang">
          <a href="#origin">Nguồn gốc & bản chất</a>
          <a href="#functions">Chức năng</a>
          <a href="#equations">Quy luật tiền tệ</a>
          <a href="#modern">Liên hệ hiện đại</a>
          <a href="#videos">Video</a>
        </nav>

        {/* Two-column layout */}
        <div className="two-col">
          <article className="col-main content-text">
          <h2>I. Lý luận của C. Mác về sản xuất hàng hóa và hàng hóa</h2>
          <h3 id="origin">1) Tiền tệ — Nguồn gốc & bản chất</h3>
          <p>
            Mục tiêu của phần này là nắm chắc <strong>nguồn gốc</strong>, <strong>bản chất</strong> và <strong>chức năng</strong> của tiền dưới góc nhìn kinh tế chính trị học Mác–Lênin, đồng thời kết nối với bối cảnh hiện đại
            (tiền pháp định, thanh toán số…). Nội dung dưới đây là phần <em>trích lược và diễn giải</em> dựa trên giáo trình, không sao chép nguyên văn.
          </p>

          <h3>Nguồn gốc (timeline rút gọn)</h3>
          <ol>
            <li><strong>Hình thái giá trị giản đơn</strong>: trao đổi trực tiếp hàng này lấy hàng khác, ngẫu nhiên và cục bộ.</li>
            <li><strong>Hình thái mở rộng</strong>: một hàng hóa biểu hiện giá trị ở <em>nhiều</em> hàng hóa khác (tỷ lệ chưa ổn định).</li>
            <li><strong>Hình thái chung</strong>: các hàng hóa quy chiếu vào <em>cùng một</em> vật ngang giá chung (khác nhau theo vùng).</li>
            <li><strong>Hình thái tiền</strong>: vàng (lịch sử) trở thành <strong>vật ngang giá chung thống nhất</strong> → xuất hiện <strong>tiền</strong>.</li>
          </ol>

          <h3>Bản chất</h3>
          <ul>
            <li>Tiền là <strong>hàng hóa đặc biệt</strong> – <em>hình thái tiền của giá trị</em>, đại diện năng lực trao đổi phổ quát.</li>
            <li>Phản ánh <strong>lao động xã hội</strong> kết tinh trong hàng hóa và <strong>quan hệ</strong> giữa những người sản xuất–trao đổi.</li>
            <li>Trong bối cảnh hiện đại, <em>tiền pháp định</em> (fiat), <em>tiền điện tử</em>… không còn gắn với vàng nhưng vẫn thực thi các chức năng cốt lõi.</li>
          </ul>

          <h3 id="functions">5 chức năng (trình bày theo tình huống)</h3>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'12px'}}>
            <div className="callout info">
              <strong>Thước đo giá trị</strong>
              <p style={{margin:'6px 0 0'}}>Biểu hiện giá trị hàng hóa thành <em>giá cả</em>; chịu tác động bởi giá trị hàng hóa, giá trị tiền và cung–cầu.</p>
            </div>
            <div className="callout">
              <strong>Phương tiện lưu thông</strong>
              <p style={{margin:'6px 0 0'}}>Làm môi giới trao đổi, cho phép mua–bán tách rời theo thời gian/không gian.</p>
            </div>
            <div className="callout">
              <strong>Cất trữ</strong>
              <p style={{margin:'6px 0 0'}}>Rút ra khỏi lưu thông khi sản xuất suy giảm; bổ sung trở lại khi lưu thông mở rộng.</p>
            </div>
            <div className="callout">
              <strong>Thanh toán</strong>
              <p style={{margin:'6px 0 0'}}>Trả nợ, mua chịu; bao gồm tiền ghi sổ, tài khoản ngân hàng, tiền điện tử.</p>
            </div>
            <div className="callout">
              <strong>Tiền tệ thế giới</strong>
              <p style={{margin:'6px 0 0'}}>Phương tiện mua bán và thanh toán quốc tế; lịch sử gắn với vàng và các đồng tiền mạnh.</p>
            </div>
          </div>

          <h3 id="equations">Quy luật lưu thông tiền tệ (công thức & ý nghĩa)</h3>
          <div className="card">
            <h4>Nguyên lý tổng quát</h4>
            <p><code>M = (P × Q) / V</code></p>
            <p>M: lượng tiền cần cho lưu thông; P: mức giá; Q: khối lượng hàng hóa–dịch vụ; V: số vòng quay tiền.</p>
            <p>Hàm ý: M tỉ lệ thuận P×Q và tỉ lệ nghịch V.</p>
          </div>
          <div className="card">
            <h4>Thanh toán không dùng tiền mặt</h4>
            <p><code>M = [P×Q − (G1 + G2) + G3] / V</code></p>
            <p>G1: hàng bán chịu; G2: hàng khấu trừ; G3: hàng đến kỳ thanh toán.</p>
            <p>Phát hành quá mức → mất giá tiền/lạm phát ⇒ cần kỷ luật phát hành.</p>
          </div>

          <h3 id="modern">Ghi chú nhanh</h3>
          <ul>
            <li>Giá cả thường <em>xoay quanh</em> giá trị dưới tác động của <strong>cung–cầu</strong>.</li>
            <li>Thanh toán không tiền mặt làm <em>thay đổi tốc độ lưu thông</em> và <em>nhu cầu tiền</em>, nhưng không thay bản chất các chức năng.</li>
          </ul>

          <div className="quote-section">
            <blockquote>
              “A price implies a commodity is exchangeable for money—and must be so exchanged.”
              <cite> — Karl Marx, Capital Vol. I, Ch.3 —
                <a href="https://www.marxists.org/archive/marx/works/1867-c1/ch03.htm?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Marxists.org</a>
              </cite>
            </blockquote>
          </div>

          <h3 id="videos">Video gợi ý</h3>
          <div className="video-section">
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/GHcFwtLn6Xg" title="Fundamentals of Marx: The Commodity" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="video-caption">Fundamentals of Marx: The Commodity (EN)</p>
            </div>
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/V2_8rVtaAwU" title="Capital Made Easy (1): Commodities and Money" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="video-caption">Capital (Marx) Made Easy (1): Commodities and Money (EN)</p>
            </div>
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/zwuMrd_Hgww" title="Reading Capital Vol I with David Harvey – Class 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="video-caption">Reading Capital Vol I with David Harvey – Class 2 (EN)</p>
            </div>
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/6NpwcMXEPMo" title="Nguồn gốc, bản chất, chức năng của tiền tệ (VN)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <p className="video-caption">KTCT Mác–Lênin: Nguồn gốc, bản chất, chức năng của tiền tệ (VN)</p>
            </div>
          </div>
          </article>

          {/* Sidebar */}
          <aside className="col-side">
            <div className="side-card sticky">
              <h4>CTA</h4>
              <p>Xem nhanh công thức & timeline ở bên dưới hoặc in trang (Ctrl+P) để học ngoại tuyến.</p>
              <a className="btn-primary" href="#equations">Xem công thức</a>
            </div>
            <div className="side-card centered">
              <h4>Video nhanh</h4>
              <ul>
                <li><a href="https://www.youtube.com/watch?v=081XCThSAA4&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Understanding Capital Ch.3</a></li>
                <li><a href="https://www.youtube.com/watch?v=mB5lMud3gtA&utm_source=chatgpt.com" target="_blank" rel="noreferrer">David Harvey Class 3</a></li>
              </ul>
            </div>
            <div className="side-card centered muted">
              <h4>Footnotes</h4>
              <ol>
                <li>Marx, Capital Vol. I, Ch.1 & Ch.3 — Marxists.org.</li>
                <li>Begg–Fischer–Dornbusch — quan niệm vi mô về tiền.</li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Chapter2Money;
