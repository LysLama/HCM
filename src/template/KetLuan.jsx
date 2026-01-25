import React from 'react';
import '../styles/Section.css';
import sectionImage from '../assets/img/mit_tinh_0.jpg';

// Foundation and “core factor” of the great unity bloc (VI)
const Foundation = () => {
  return (
    <div className="page-container">
      <header className="section-hero" style={{ backgroundImage: `url(${sectionImage})` }}>
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Nền tảng & “hạt nhân” của khối đại đoàn kết</h1>
      </header>

      <main className="section-main-content">
        <nav className="anchor-nav" aria-label="Mục lục trang">
          <a href="#foundation">Nền tảng của khối đoàn kết</a>
          <a href="#base">Công–nông–trí</a>
          <a href="#core">“Hạt nhân” trong Đảng</a>
        </nav>

        <div className="content-text">
          <h2 id="foundation">Xác định đúng nền tảng để mở rộng khối đoàn kết</h2>
          <p>
            Muốn xây dựng khối đại đoàn kết toàn dân tộc, phải xác định rõ đâu là <strong>nền tảng</strong> của khối đoàn kết, và trên nền tảng đó mở rộng
            đoàn kết các tầng lớp khác.
          </p>

          <div className="quote-section">
            <blockquote>
              <p>
                “Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao
                động khác. Đó là nền gốc của đại đoàn kết. Nó cũng như cái nền của nhà, gốc của cây. Nhưng đã có nền vững, gốc tốt, còn phải đoàn kết các
                tầng lớp nhân dân khác”.
              </p>
              <cite>
                — Hồ Chí Minh •{' '}
                <a
                  href="https://hochiminh.vn/tu-tuong-dao-duc-ho-chi-minh/nghien-cuu-tu-tuong-dao-duc-ho-chi-minh/dai-doan-ket-toan-dan-toc-la-nguon-suc-manh-vo-song-8602"
                  target="_blank"
                  rel="noreferrer"
                >
                  hochiminh.vn
                </a>
              </cite>
            </blockquote>
          </div>

          <h2 id="base">Nền tảng: công nhân – nông dân – trí thức</h2>
          <p>
            Theo quan điểm của Hồ Chí Minh, lực lượng làm nền tảng cho khối đại đoàn kết toàn dân tộc là <strong>công nhân, nông dân và trí thức</strong>.
            Nền tảng càng vững chắc thì khối đại đoàn kết càng có thể mở rộng.
          </p>

          <h2 id="core">“Hạt nhân”: đoàn kết, thống nhất trong Đảng</h2>
          <p>
            Trong khối đại đoàn kết toàn dân tộc, phải đặc biệt chú trọng yếu tố “hạt nhân” là <strong>sự đoàn kết và thống nhất trong Đảng</strong> — vì
            đó là điều kiện cho đoàn kết ngoài xã hội. Đảng đoàn kết thì sự đoàn kết toàn dân tộc càng được tăng cường.
          </p>

          <div className="quote-section">
            <blockquote>
              <p>“Giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình”.</p>
              <cite>
                — Hồ Chí Minh •{' '}
                <a
                  href="https://baochinhphu.vn/doan-ket-la-coi-nguon-suc-manh-cua-dang-10259069.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  baochinhphu.vn
                </a>
              </cite>
            </blockquote>
          </div>

          <h2>Video tham khảo (nguồn chính thống)</h2>
          <p>
            Các video dưới đây làm rõ nội dung “nền tảng” và “hạt nhân” (đoàn kết trong Đảng, nền tảng công–nông–trí thức) trong thực tiễn tuyên truyền.
          </p>
          <ul>
            <li>
              VTV: “Tư tưởng đại đoàn kết trong Di chúc của Chủ tịch Hồ Chí Minh” —{' '}
              <a href="https://vtv.vn/video/bac-ho-691869.htm" target="_blank" rel="noreferrer">vtv.vn</a>
            </li>
            <li>
              VTV4: “Sức mạnh đại đoàn kết dưới sự lãnh đạo của Đảng” —{' '}
              <a href="https://vtv4.vtv.vn/video/ban-tin-tieng-viet/-69699.html" target="_blank" rel="noreferrer">vtv4.vtv.vn</a>
            </li>
          </ul>

          <div className="callout info">
            <strong>Kết luận ngắn</strong>
            <p style={{ margin: '6px 0 0' }}>
              Đảng đoàn kết, dân tộc đoàn kết và sự gắn bó máu thịt giữa Đảng với nhân dân tạo nên sức mạnh nội sinh giúp cách mạng vượt qua khó khăn,
              thử thách.
            </p>
          </div>

          <div className="callout">
            <strong>Gợi ý tiếp tục</strong>
            <p style={{ margin: '6px 0 0' }}>
              Xem thêm: <a href="/methods">Phương pháp</a> • <a href="/applications">Vận dụng</a> • <a href="/front">Mặt trận</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Foundation;
