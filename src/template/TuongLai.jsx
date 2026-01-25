import React from 'react';
import '../styles/Section.css';
import sectionImage from '../assets/img/dai_doan_ket.jpg';

// Forces / subjects of the great unity bloc (VI)
const Forces = () => {
  return (
    <div className="page-container">
      <header className="section-hero" style={{ backgroundImage: `url(${sectionImage})` }}>
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Lực lượng của khối đại đoàn kết toàn dân tộc</h1>
      </header>

      <main className="section-main-content">
        <nav className="anchor-nav" aria-label="Mục lục trang">
          <a href="#subject">Chủ thể đại đoàn kết</a>
          <a href="#who">Bao gồm những ai?</a>
          <a href="#principle">Nguyên tắc tập hợp</a>
        </nav>

        <div className="content-text">
          <div className="quote-section">
            <blockquote>
              <p>“Đoàn kết là một chính sách dân tộc, không phải là một thủ đoạn chính trị”.</p>
              <cite>
                — Hồ Chí Minh •{' '}
                <a
                  href="https://baochinhphu.vn/ho-chi-minh-voi-tu-tuong-xuyen-suot-ve-doan-ket-102260203.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  baochinhphu.vn
                </a>
              </cite>
            </blockquote>
          </div>

          <h2 id="subject">Chủ thể của khối đại đoàn kết</h2>
          <p>
            Theo Hồ Chí Minh, chủ thể của khối đại đoàn kết toàn dân tộc là <strong>toàn thể nhân dân</strong> — tất cả những người Việt Nam yêu nước ở
            mọi giai cấp, tầng lớp, ngành nghề, giới, lứa tuổi; đồng bào các dân tộc; đồng bào các tôn giáo; các đảng phái… ở trong nước và ngoài nước.
          </p>

          <h2 id="who">“Nhân dân” được hiểu như thế nào?</h2>
          <ul>
            <li><strong>Nghĩa cụ thể:</strong> những con người Việt Nam cụ thể trong đời sống hằng ngày.</li>
            <li><strong>Nghĩa tập hợp:</strong> đông đảo quần chúng nhân dân như một cộng đồng xã hội.</li>
          </ul>

          <div className="quote-section">
            <blockquote>
              <p>
                “Ai có tài, có đức, có sức, có lòng phụng sự Tổ quốc và phục vụ nhân dân thì ta đoàn kết với họ”.
              </p>
              <cite>
                — Hồ Chí Minh •{' '}
                <a
                  href="https://www.tapchicongsan.org.vn/media-story/-/asset_publisher/V8hhp4dK31Gf/content/dai-doan-ket-toan-dan-toc-coi-nguon-cua-y-chi-niem-tin-suc-manh-de-xay-dung-bao-ve-to-quoc-trong-ky-nguyen-moi"
                  target="_blank"
                  rel="noreferrer"
                >
                  tapchicongsan.org.vn
                </a>
              </cite>
            </blockquote>
          </div>

          <h2>Video tham khảo (nguồn chính thống)</h2>
          <p>
            Các video sau minh họa “ai là lực lượng của khối đại đoàn kết” trong đời sống xã hội (cộng đồng, dân tộc, già làng, tổ dân phố…).
          </p>
          <ul>
            <li>
              VTV: “Ngày hội đại đoàn kết tại Thái Bình” —{' '}
              <a href="https://vtv.vn/video/ngay-hoi-dai-doan-ket-tai-thai-binh-20394.htm" target="_blank" rel="noreferrer">vtv.vn</a>
            </li>
            <li>
              VTV4: “Ngày hội Đại đoàn kết toàn dân tộc Hà Nội” —{' '}
              <a href="https://vtv4.vtv.vn/video/ban-tin-tieng-viet/-20259.html" target="_blank" rel="noreferrer">vtv4.vtv.vn</a>
            </li>
            <li>
              VTV4: “Già làng chung sức xây dựng khối đại đoàn kết” —{' '}
              <a href="https://vtv4.vtv.vn/video/ban-tin-tieng-viet/-71512.html" target="_blank" rel="noreferrer">vtv4.vtv.vn</a>
            </li>
          </ul>

          <h2 id="principle">Nguyên tắc trong quá trình tập hợp lực lượng</h2>
          <p>
            Trong xây dựng khối đại đoàn kết toàn dân tộc, cần đứng vững trên lập trường giai cấp công nhân, giải quyết hài hòa quan hệ giữa giai cấp và
            dân tộc để tập hợp lực lượng — <strong>không bỏ sót</strong> lực lượng nào, miễn là họ trung thành, sẵn sàng phục vụ Tổ quốc và không phản bội
            quyền lợi của nhân dân.
          </p>

          <div className="callout">
            <strong>Tiếp theo</strong>
            <p style={{ margin: '6px 0 0' }}>
              Xem thêm: <a href="/foundation">Nền tảng & “hạt nhân” của khối đại đoàn kết</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Forces;
