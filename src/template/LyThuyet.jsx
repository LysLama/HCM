import React from 'react';
import '../styles/Section.css';
import sectionImage from '../assets/img/strategic-role.jpg';

// Strategic role of great national unity (VI)
const StrategicRole = () => {
  return (
    <div className="page-container">
      <header className="section-hero section-hero--no-zoom" style={{ backgroundImage: `url(${sectionImage})` }}>
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Vai trò chiến lược của đại đoàn kết toàn dân tộc</h1>
      </header>

      <main className="section-main-content">
        <nav className="anchor-nav" aria-label="Mục lục trang">
          <a href="#strategic">Ý nghĩa chiến lược</a>
          <a href="#truths">Luận điểm then chốt</a>
          <a href="#poem">Kết tinh</a>
        </nav>

        <div className="content-text">
          <h2 id="strategic">Đại đoàn kết là vấn đề chiến lược, quyết định thành công của cách mạng</h2>
          <p>
            Trong tư tưởng Hồ Chí Minh, <strong>đại đoàn kết toàn dân tộc</strong> là chiến lược lâu dài, nhất quán của cách mạng Việt Nam. Chính sách và
            phương pháp tập hợp lực lượng có thể điều chỉnh theo từng giai đoạn, từng đối tượng; nhưng <strong>chủ trương đại đoàn kết</strong> là nhân tố
            quyết định sự thành bại.
          </p>

          <div className="quote-section">
            <blockquote>
              <p>
                “Sử dạy cho ta bài học này: Lúc nào dân ta đoàn kết muôn người như một thì nước ta độc lập, tự do. Trái lại lúc nào dân ta không đoàn kết
                thì bị nước ngoài xâm lấn”.
              </p>
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

          <h2 id="truths">Những luận điểm mang tính chân lý về sức mạnh đoàn kết</h2>
          <ul>
            <li>“Đoàn kết là sức mạnh của chúng ta”.</li>
            <li>“Đoàn kết là một lực lượng vô địch… để khắc phục khó khăn, giành lấy thắng lợi”.</li>
            <li>“Đoàn kết là sức mạnh, đoàn kết là thắng lợi”.</li>
            <li>“Đoàn kết là sức mạnh, là then chốt của thành công”.</li>
            <li>
              “Bây giờ còn một điểm rất quan trọng, cũng là điểm mẹ… Đó là đoàn kết”.
            </li>
          </ul>

          <div className="callout info">
            <strong>Gợi ý đọc nhanh</strong>
            <p style={{ margin: '6px 0 0' }}>
              Khi nói “điểm mẹ”, Hồ Chí Minh nhấn mạnh: nếu làm tốt đoàn kết, sẽ tạo ra nhiều kết quả tốt trong mọi công việc.
            </p>
          </div>

          <h2 id="poem">Kết tinh tư tưởng</h2>
          <p style={{ whiteSpace: 'pre-line' }}>
            Đoàn kết, đoàn kết, đại đoàn kết\nThành công, thành công, đại thành công
          </p>

          <div className="callout info">
            <strong>Nguồn câu khẩu hiệu</strong>
            <p style={{ margin: '6px 0 0' }}>
              Bối cảnh và tư liệu về câu “Đoàn kết, đoàn kết, đại đoàn kết…” có thể tham khảo tại{' '}
              <a href="https://mattran.org.vn/hoat-dong/ngay-2541961-tai-dai-hoi-dai-bieu-mat-tran-to-quoc-viet-nam-lan-thu-ii-bac-ho-can-dan-doan-ket-doan-ket-dai-doan-ket-43601.html" target="_blank" rel="noreferrer">
                mattran.org.vn
              </a>{' '}
              và{' '}
              <a href="https://www.qdnd.vn/tu-lieu-ho-so/ngay-nay-nam-xua/ngay-25-4-1961-bac-ho-can-dan-doan-ket-doan-ket-dai-doan-ket-692103" target="_blank" rel="noreferrer">
                qdnd.vn
              </a>.
            </p>
          </div>

          <div className="quote-section">
            <blockquote>
              <p>“Bây giờ còn một điểm rất quan trọng, cũng là điểm mẹ… Đó là đoàn kết”.</p>
              <cite>
                — Hồ Chí Minh •{' '}
                <a
                  href="https://tapchicongsan.org.vn/media-story/-/asset_publisher/V8hhp4dK31Gf/content/suc-manh-cua-doan-ket"
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
            Ưu tiên <strong>link/nhúng từ trang gốc</strong> để đảm bảo bản quyền và tính xác thực.
          </p>
          <ul>
            <li>
              VTV: “Đại đoàn kết – Đại thành công” —{' '}
              <a href="https://vtv.vn/video/doan-ket-734021.htm" target="_blank" rel="noreferrer">vtv.vn</a>
            </li>
            <li>
              VTV: “Sức mạnh của lòng dân và tinh thần đại đoàn kết dân tộc” —{' '}
              <a href="https://vtv.vn/video/suc-manh-cua-long-dan-va-tinh-than-dai-doan-ket-518604.htm" target="_blank" rel="noreferrer">vtv.vn</a>
            </li>
            <li>
              Nhân Dân (chuyên trang multimedia): “Chủ tịch Hồ Chí Minh và tư tưởng đại đoàn kết toàn dân tộc” —{' '}
              <a href="https://hochiminh.nhandan.vn/video-chu-tich-ho-chi-minh-va-tu-tuong-dai-doan-ket-toan-dan-toc-1932.html" target="_blank" rel="noreferrer">hochiminh.nhandan.vn</a>
            </li>
            <li>
              Mặt trận Tổ quốc VN (thư viện video): “Đại đoàn kết – Cội nguồn sức mạnh dân tộc” —{' '}
              <a href="https://mattran.org.vn/thu-vien-video/phim-tai-lieu-dai-doan-ket-coi-nguon-suc-manh-dan-toc-57380.html" target="_blank" rel="noreferrer">mattran.org.vn</a>
            </li>
          </ul>

          <div className="callout">
            <strong>Tiếp theo</strong>
            <p style={{ margin: '6px 0 0' }}>
              Xem thêm: <a href="/primary-task">Đại đoàn kết là mục tiêu, nhiệm vụ hàng đầu</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StrategicRole;
