import React from 'react';
import '../styles/Section.css';

const Chapter2Services = () => {
  return (
    <div className="page-container">
      <header className="section-hero">
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Chương 2 • Dịch vụ và quan hệ trao đổi</h1>
      </header>
      <main className="section-main-content">
        {/* Anchor nav */}
        <nav className="anchor-nav" aria-label="Mục lục trang">
          <a href="#services">A. Dịch vụ</a>
          <a href="#exchange">B. Quan hệ trao đổi</a>
          <a href="#compare">C. So sánh</a>
          <a href="#videos">D. Video</a>
          <a href="#sources">E. Nguồn</a>
        </nav>

        {/* Two-column layout */}
        <div className="two-col">
          <article className="col-main content-text">
            <h2>I. Lý luận của C. Mác về sản xuất hàng hóa và hàng hóa</h2>
            <h3>2) Dịch vụ và quan hệ trao đổi trong điều kiện hiện nay</h3>
            <p>
              Phần này làm rõ <strong>dịch vụ</strong> như một dạng hàng hóa <em>vô hình</em> và phân tích một số <strong>quan hệ trao đổi đặc thù</strong> trong kinh tế hiện đại. Nội dung dưới đây mang tính
              <em> diễn giải</em> dựa trên giáo trình và thực tiễn, tránh sao chép nguyên văn.
            </p>

            {/* A. Dịch vụ */}
            <section id="services">
              <h3>A. Dịch vụ</h3>
              <h4>1) Khái niệm &amp; bản chất</h4>
              <p>
                <strong>Dịch vụ</strong> là <strong>hàng hóa vô hình</strong>, cần <strong>hao phí lao động</strong> để <strong>thỏa mãn nhu cầu</strong>, nên <strong>giá trị</strong> do <strong>lao động xã hội</strong> tạo ra. <strong>Thời Marx</strong>, dịch vụ chưa phát triển nên ông bàn ít; theo logic của ông, <strong>dịch vụ vẫn là hàng hóa</strong> (cho sản xuất/cho tiêu dùng). Dịch vụ <strong>không thể lưu kho</strong>, <strong>sản xuất–tiêu dùng đồng thời</strong>; hiện nay nhờ <strong>phân công lao động</strong> và <strong>công nghệ</strong>, khu vực dịch vụ ngày càng giữ <strong>vai trò quan trọng</strong>.
              </p>
              <div className="callout info">
                <strong>Góc nhìn marketing hiện đại</strong>
                <p style={{margin:'6px 0 0'}}>
                  Dịch vụ thường có 4 đặc trưng: <strong>vô hình, không tách rời</strong> (sản xuất–tiêu dùng đồng thời), <strong>khó đồng nhất, không lưu kho</strong>. Tham khảo video/giải thích ngắn: JoVE,
                  Study.com, YouTube. (<a href="https://www.jove.com/business-education/v/16648/services-marketing-i?utm_source=chatgpt.com" target="_blank" rel="noreferrer">JoVE</a>)
                </p>
              </div>

              <h4>2) Ý nghĩa thực tiễn hôm nay</h4>
              <p>
                Khu vực dịch vụ mở rộng mạnh do số hóa (ngân hàng số, logistics, điện toán đám mây…), tiếp tục <strong>khẳng định vị trí trung tâm</strong> trong cơ cấu kinh tế hiện đại — đúng với nhận định dịch vụ <strong>gia tăng vai trò</strong> trong thỏa mãn nhu cầu.
              </p>
            </section>

            {/* B. Quan hệ trao đổi với yếu tố khác hàng hóa thông thường */}
            <section id="exchange">
              <h3>B. Quan hệ trao đổi với một số yếu tố khác hàng hóa thông thường</h3>
              <p>
                Đây là <strong>các yếu tố có “tính hàng hóa”</strong> (có giá, có thể trao đổi) nhưng <strong>không hình thành từ hao phí lao động trực tiếp</strong> như hàng hóa thông thường; nếu không phân biệt rạch ròi, dễ ngộ nhận rằng lý luận hàng hóa của Marx “không còn phù hợp”.
              </p>

              <h4>1) Quyền sử dụng đất (QSDĐ)</h4>
              <p>
                Thực chất giao dịch là <strong>mua bán quyền sử dụng</strong>, <strong>không phải đất đai tự thân</strong>.
              </p>
              <p>
                “<strong>Tính hàng hóa</strong>” nằm ở <strong>quyền</strong> (thời hạn, mục đích, chuyển nhượng…), <strong>không do lao động trực tiếp</strong> như hàng hóa vật thể → cần <strong>phân biệt</strong> khi phân tích <strong>giá</strong>, <strong>lợi ích</strong>, <strong>chính sách</strong>.
              </p>
              <p>
                <em>Video tham khảo</em>: phân biệt <strong>quyền sở hữu</strong> vs <strong>quyền sử dụng</strong>, <strong>quyền–nghĩa vụ</strong> người sử dụng đất. (
                <a href="https://www.youtube.com/watch?v=dJzqGccnO1Y&utm_source=chatgpt.com" target="_blank" rel="noreferrer">YouTube</a>)
              </p>

              <h4>2) Chứng khoán, chứng quyền, giấy tờ có giá (phái sinh; “tư bản giả”)</h4>
              <p>
                <strong>Cổ phiếu/trái phiếu…</strong> được <strong>mua bán</strong> và sinh <strong>thu nhập</strong>, tạo thành <strong>thị trường chứng khoán</strong> — <strong>khác</strong> với thị trường hàng hóa–dịch vụ “thực”.
              </p>
              <p>
                Theo Marx, đây là <strong>“tư bản giả”</strong>: chỉ có ý nghĩa khi <strong>gắn với chủ thể sản xuất–kinh doanh thực</strong>; “tờ giấy” vô nghĩa nếu <strong>không có nền tảng thực</strong>.
              </p>
              <p>
                <strong>Lãi/lỗ</strong> chủ yếu là <strong>chuyển dịch tiền</strong>; <strong>giá</strong> phản ánh <strong>kỳ vọng tương lai</strong>, <strong>không trực tiếp</strong> phản ánh “<strong>giá trị lao động</strong>”. <strong>Không thể</strong> làm xã hội giàu chỉ bằng <strong>mua bán giấy tờ</strong>.
              </p>
              <p>
                <em>Hệ quả kinh điển</em>: <strong>lãi suất tăng → giá tư bản giả giảm</strong>.
              </p>
              <div className="quote-section">
                <blockquote>
                  “Fictitious capital, interest-bearing paper… circulates on the stock exchange as money-capital. Its price falls with rising interest.”
                  <cite> — Karl Marx, Capital Vol. III, Ch.30 —
                    <a href="https://www.marxists.org/archive/marx/works/1894-c3/ch30.htm?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Marxists.org</a>
                  </cite>
                </blockquote>
              </div>
              <p>
                <em>Video gợi ý</em>: “<strong>Fictitious Capital</strong>”, “<strong>Nhập môn thị trường chứng khoán</strong>”. (
                <a href="https://www.youtube.com/watch?v=_E_LNUDXjW8&utm_source=chatgpt.com" target="_blank" rel="noreferrer">YouTube</a>)
              </p>
            </section>

            {/* C. Bảng so sánh */}
            <section id="compare">
              <h3>C. Tóm lược so sánh</h3>
              <div className="responsive-table" tabIndex={0} aria-label="Bảng so sánh dịch vụ và các yếu tố">
                <table>
                  <thead>
                    <tr>
                      <th>Tiêu chí</th>
                      <th>Hàng hóa thông thường</th>
                      <th>Dịch vụ</th>
                      <th>Yếu tố “khác hàng hóa thông thường”</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hình thái</td>
                      <td>Hữu hình</td>
                      <td>Vô hình</td>
                      <td>Quyền/phái sinh (QSDĐ, chứng khoán…)</td>
                    </tr>
                    <tr>
                      <td>Tạo bởi lao động trực tiếp</td>
                      <td>Có</td>
                      <td>Có (nhưng tiêu dùng đồng thời)</td>
                      <td><strong>Không trực tiếp</strong> như hàng hóa; chủ yếu là <strong>quyền/đòi hỏi</strong> gắn với thực thể khác</td>
                    </tr>
                    <tr>
                      <td>Lưu kho</td>
                      <td>Có thể</td>
                      <td><strong>Không</strong></td>
                      <td>Không áp dụng</td>
                    </tr>
                    <tr>
                      <td>Giá/phản ánh</td>
                      <td>Quanh <strong>giá trị</strong> (lao động XH cần thiết)</td>
                      <td>Gắn chi phí + công nghệ + chất lượng trải nghiệm</td>
                      <td><strong>Kỳ vọng/khả năng sinh lợi/khung pháp lý</strong> (không đo trực tiếp bằng lao động)</td>
                    </tr>
                    <tr>
                      <td>Vai trò</td>
                      <td>Thỏa mãn nhu cầu vật chất</td>
                      <td>Thỏa mãn nhu cầu vật chất &amp; tinh thần, tiện ích</td>
                      <td>Phân bổ vốn, quyền, rủi ro; kết nối với hoạt động <strong>sản xuất–kinh doanh thực</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="table-hint">Kéo ngang để xem đủ bảng trên màn hình nhỏ.</p>
            </section>

            {/* D. Video */}
            <section id="videos">
              <h3>D. Video kèm link</h3>
              <div className="video-section">
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/BJtXGzAThqY" title="Service marketing characteristics" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <p className="video-caption">Service marketing characteristics (EN)</p>
                </div>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/dJzqGccnO1Y" title="Quyền Và Nghĩa Vụ Của Người Sử Dụng Đất" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <p className="video-caption">Quyền &amp; nghĩa vụ người sử dụng đất (VN)</p>
                </div>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/_E_LNUDXjW8" title="Anti-Capitalist Chronicles: Fictitious Capital" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <p className="video-caption">Anti-Capitalist Chronicles: Fictitious Capital (EN)</p>
                </div>
              </div>
              <ul className="bullet-list">
                <li>
                  <strong>Đặc trưng dịch vụ (EN, 3–6 phút)</strong>: Services Marketing – 4 Characteristics; What are the Four Key Characteristics of Services?; JoVE Business Education. (
                  <a href="https://www.youtube.com/watch?v=BJtXGzAThqY&vl=en&utm_source=chatgpt.com" target="_blank" rel="noreferrer">YouTube</a>)
                </li>
                <li>
                  <strong>Định nghĩa dịch vụ (VN, dễ hiểu)</strong>: Dịch vụ là gì? Vai trò của ngành dịch vụ… (LuatVietnam). (
                  <a href="https://luatvietnam.vn/linh-vuc-khac/dich-vu-la-gi-883-94100-article.html?utm_source=chatgpt.com" target="_blank" rel="noreferrer">LuatVietnam</a>)
                </li>
                <li>
                  <strong>Quyền sử dụng đất (VN)</strong>: Quyền &amp; nghĩa vụ người sử dụng đất; Giấy chứng nhận QSDĐ – vấn đề pháp lý. (
                  <a href="https://www.youtube.com/watch?v=dJzqGccnO1Y&utm_source=chatgpt.com" target="_blank" rel="noreferrer">YouTube</a>)
                </li>
                <li>
                  <strong>Tư bản giả &amp; chứng khoán (EN/VN)</strong>: Anti-Capitalist Chronicles: Fictitious Capital; Value, Fictitious Capital and Finance; Kiến thức cơ bản về thị trường chứng khoán. (
                  <a href="https://www.youtube.com/watch?v=_E_LNUDXjW8&utm_source=chatgpt.com" target="_blank" rel="noreferrer">YouTube</a>)
                </li>
              </ul>
            </section>

            {/* E. Nguồn/Footnotes */}
            <section id="sources">
              <h3>E. Trích dẫn/nguồn chính từ giáo trình</h3>
              <ul>
                <li>Dịch vụ: khái niệm, tính vô hình; sản xuất–tiêu dùng đồng thời; vị trí ngày nay.</li>
                <li>Marx và vị trí của dịch vụ trong phân loại hàng hóa: <strong>dịch vụ cho sản xuất/tiêu dùng</strong>.</li>
                <li>“Yếu tố khác hàng hóa thông thường”: tiêu chí phân biệt; <strong>QSDĐ</strong>; chứng khoán/chứng quyền là <strong>yếu tố phái sinh</strong> (“tư bản giả”); ý nghĩa giàu nghèo &amp; chuyển dịch tiền.</li>
              </ul>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="col-side">
            <div className="side-card sticky">
              <h4>CTA</h4>
              <p>Xem nhanh bảng so sánh hoặc chuyển đến video &amp; nguồn.</p>
              <a className="btn-primary" href="#compare">Xem bảng so sánh</a>
            </div>
            <div className="side-card centered">
              <h4>Video nhanh</h4>
              <ul>
                <li><a href="https://www.youtube.com/watch?v=BJtXGzAThqY&vl=en&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Service marketing characteristics</a></li>
                <li><a href="https://www.youtube.com/watch?v=_E_LNUDXjW8&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Fictitious Capital</a></li>
              </ul>
            </div>
            <div className="side-card centered muted">
              <h4>Footnotes</h4>
              <ol>
                <li><a href="https://www.jove.com/business-education/v/16648/services-marketing-i?utm_source=chatgpt.com" target="_blank" rel="noreferrer">[1] JoVE – Services Marketing I</a></li>
                <li><a href="https://www.youtube.com/watch?v=dJzqGccnO1Y&utm_source=chatgpt.com" target="_blank" rel="noreferrer">[2] YouTube – QSDĐ</a></li>
                <li><a href="https://www.marxists.org/archive/marx/works/1894-c3/ch30.htm?utm_source=chatgpt.com" target="_blank" rel="noreferrer">[3] Marxists – Capital Vol.3, Ch.30</a></li>
                <li><a href="https://www.youtube.com/watch?v=_E_LNUDXjW8&utm_source=chatgpt.com" target="_blank" rel="noreferrer">[4] YouTube – Fictitious Capital</a></li>
                <li><a href="https://www.youtube.com/watch?v=BJtXGzAThqY&vl=en&utm_source=chatgpt.com" target="_blank" rel="noreferrer">[5] YouTube – Service marketing characteristics</a></li>
                <li><a href="https://luatvietnam.vn/linh-vuc-khac/dich-vu-la-gi-883-94100-article.html?utm_source=chatgpt.com" target="_blank" rel="noreferrer">[6] LuatVietnam – Dịch vụ là gì?</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Chapter2Services;
