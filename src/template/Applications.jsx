import React from 'react';
import '../styles/Section.css';

const Applications = () => {
  return (
    <div className="page-container">
      <header className="section-hero">
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Vận dụng tư tưởng đại đoàn kết trong hiện nay</h1>
      </header>

      <main className="section-main-content">
        <div className="content-text">
          <p>
            Trang này tập trung vào <strong>liên hệ – vận dụng</strong> tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc trong bối cảnh hiện nay.
          </p>

          <div className="callout info">
            <strong>Trạng thái</strong>
            <p style={{ margin: '6px 0 0' }}>
              Phần “vận dụng” cần thêm tài liệu đầu vào (báo chí/nguồn chính thống). Mình đã dựng khung để bạn duyệt và sẽ điền nội dung sau khi có nguồn.
            </p>
          </div>

          <h2>Khung nội dung đề xuất</h2>
          <ul>
            <li><strong>Đại đoàn kết và phát triển bền vững:</strong> đồng thuận xã hội, giảm phân hóa, gắn kết cộng đồng.</li>
            <li><strong>Đoàn kết trong đa dạng:</strong> tôn giáo, dân tộc, vùng miền, thế hệ; lắng nghe và đối thoại.</li>
            <li><strong>Đoàn kết trong chuyển đổi số:</strong> thông tin đúng–đủ; tăng “miễn dịch” trước tin giả/chia rẽ.</li>
            <li><strong>Đoàn kết trong tình huống khủng hoảng:</strong> thiên tai, dịch bệnh; tinh thần tương thân tương ái.</li>
          </ul>

          <h2>Gợi ý nguồn tham khảo (uy tín cao)</h2>
          <ul>
            <li>Báo Nhân Dân (nhandan.vn) – chuyên đề về đại đoàn kết, Mặt trận, xây dựng Đảng.</li>
            <li>Thông tấn xã Việt Nam / VietnamPlus (vietnamplus.vn) – tin chính sách, xã hội, đoàn kết dân tộc.</li>
            <li>Đài Truyền hình Việt Nam (vtv.vn) và Đài Tiếng nói Việt Nam (vov.vn) – phóng sự/đối thoại/chuyên mục.</li>
          </ul>

          <h2>Gợi ý kênh YouTube để tìm video</h2>
          <ul>
            <li>VTV24 / VTV – tìm theo từ khóa “đại đoàn kết toàn dân tộc”, “Mặt trận Tổ quốc”, “tư tưởng Hồ Chí Minh”.</li>
            <li>VOVTV / VOV – phóng sự và chương trình chính luận – xã hội.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Applications;
