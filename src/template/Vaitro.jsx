import React from 'react';
import '../styles/Section.css';
import sectionImage from '../assets/img/hochiminh1.jpg';

// Primary objective and foremost task (VI)
const PrimaryTask = () => {
  return (
    <div className="page-container">
      <header className="section-hero" style={{ backgroundImage: `url(${sectionImage})` }}>
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Đại đoàn kết là mục tiêu, nhiệm vụ hàng đầu</h1>
      </header>

      <main className="section-main-content">
        <nav className="anchor-nav" aria-label="Mục lục trang">
          <a href="#objective">Mục tiêu lâu dài</a>
          <a href="#party">Nhiệm vụ của Đảng</a>
          <a href="#masses">Sự nghiệp quần chúng</a>
        </nav>

        <div className="content-text">
          <h2 id="objective">Không chỉ khẩu hiệu — mà là mục tiêu lâu dài</h2>
          <p>
            Đối với Hồ Chí Minh, đại đoàn kết không chỉ là khẩu hiệu chiến lược mà còn là <strong>mục tiêu lâu dài</strong> của cách mạng. Vì Đảng là lực
            lượng lãnh đạo cách mạng Việt Nam, nên đại đoàn kết toàn dân tộc tất yếu phải được xác định là <strong>nhiệm vụ hàng đầu</strong>.
          </p>

          <h2 id="party">Đoàn kết toàn dân — phụng sự Tổ quốc</h2>
          <div className="quote-section">
            <blockquote>
              <p>“Mục đích của Đảng Lao động Việt Nam có thể gộp trong 8 chữ là: ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC”.</p>
              <cite>
                — Hồ Chí Minh (3/3/1951) •{' '}
                <a
                  href="https://hochiminh.vn/book/tac-pham-ve-ho-chi-minh/tac-pham-trong-nuoc/bac-ho-voi-dai-hoi-dang-nxb-chinh-tri-quoc-gia-ha-noi-2006-284"
                  target="_blank"
                  rel="noreferrer"
                >
                  hochiminh.vn
                </a>
                {' '}•{' '}
                <a
                  href="https://www.tapchicongsan.org.vn/web/guest/chinh-tri-xay-dung-dang/-/2018/816747/lanh-tu-ho-chi-minh---nha-sang-tao-ly-luan-cach-mang.aspx"
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
            Dưới đây là các video có thể <strong>link/nhúng từ trang gốc</strong> để minh họa tính thời sự và tính tổ chức của nhiệm vụ đại đoàn kết.
          </p>
          <ul>
            <li>
              TTXVN/Vietnammedia: “Phát huy sức mạnh đại đoàn kết toàn dân tộc theo tư tưởng Hồ Chí Minh” —{' '}
              <a href="https://vietnammedia.vnanet.vn/video/phat-huy-suc-manh-dai-doan-ket-toan-dan-toc-theo-tu-tuong-ho-chi-minh-121171.htm" target="_blank" rel="noreferrer">vietnammedia.vnanet.vn</a>
            </li>
            <li>
              VTV: “Tiếp tục phát huy sức mạnh đại đoàn kết” —{' '}
              <a href="https://vtv.vn/video/tiep-tuc-phat-huy-suc-manh-dai-doan-ket-700844.htm" target="_blank" rel="noreferrer">vtv.vn</a>
            </li>
            <li>
              VTV: “Tây Nguyên hôm nay: Phát huy sức mạnh đại đoàn kết toàn dân tộc” —{' '}
              <a href="https://vtv.vn/video/tay-nguyen-hom-nay-phat-huy-suc-manh-dai-doan-ket-toan-dan-toc-699053.htm" target="_blank" rel="noreferrer">vtv.vn</a>
            </li>
          </ul>

          <h2 id="masses">Cách mạng là sự nghiệp của quần chúng</h2>
          <ul>
            <li>Cách mạng là sự nghiệp của quần chúng, do quần chúng và vì quần chúng.</li>
            <li>
              Đại đoàn kết là yêu cầu khách quan của sự nghiệp cách mạng và là đòi hỏi khách quan của quần chúng trong cuộc đấu tranh tự giải phóng.
            </li>
            <li>
              Nếu không đoàn kết, chính quần chúng sẽ thất bại trong cuộc đấu tranh vì lợi ích của chính mình.
            </li>
          </ul>

          <div className="callout info">
            <strong>Trách nhiệm tổ chức</strong>
            <p style={{ margin: '6px 0 0' }}>
              Đảng phải có sứ mệnh thức tỉnh, tập hợp, hướng dẫn quần chúng — chuyển nhu cầu tự phát thành yêu cầu tự giác, có tổ chức — tạo sức mạnh tổng
              hợp trong đấu tranh vì độc lập dân tộc, tự do cho nhân dân và hạnh phúc cho con người.
            </p>
          </div>

          <div className="callout">
            <strong>Tiếp theo</strong>
            <p style={{ margin: '6px 0 0' }}>
              Xem thêm: <a href="/forces">Lực lượng của khối đại đoàn kết toàn dân tộc</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrimaryTask;
