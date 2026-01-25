import React from 'react';
import '../styles/Section.css';

const Methods = () => {
  return (
    <div className="page-container">
      <header className="section-hero">
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Phương pháp xây dựng khối đại đoàn kết</h1>
      </header>

      <main className="section-main-content">
        <div className="content-text">
          <nav className="anchor-nav" aria-label="Mục lục trang">
            <a href="#intro">Mở đầu</a>
            <a href="#takeaways">Tóm tắt nhanh</a>
            <a href="#principles">Nguyên tắc cốt lõi</a>
            <a href="#implementation">Triển khai</a>
            <a href="#quotes">Trích dẫn</a>
            <a href="#practice">Liên hệ thực tiễn</a>
            <a href="#videos">Video tham khảo</a>
            <a href="#conclusion">Kết luận</a>
          </nav>

          <h2 id="intro">1) Mở đầu: Vì sao “phương pháp” quan trọng?</h2>
          <p>
            Trong tư tưởng Hồ Chí Minh, đại đoàn kết không chỉ là khẩu hiệu hay mong muốn đạo đức, mà là <strong>một chiến lược tổ chức lực lượng</strong>.
            Muốn đoàn kết bền vững phải có cách làm đúng: biết <strong>tập hợp – thuyết phục – tổ chức – duy trì đồng thuận</strong> và xử lý khác biệt một
            cách khéo léo, chân thành.
          </p>

          <h2 id="takeaways">2) Tóm tắt nhanh</h2>
          <ul>
            <li><strong>Lấy mục tiêu chung làm điểm hội tụ:</strong> độc lập – tự do – hạnh phúc của nhân dân, lợi ích dân tộc là tối thượng.</li>
            <li><strong>Tôn trọng khác biệt, tìm mẫu số chung:</strong> đoàn kết rộng rãi nhưng có nguyên tắc.</li>
            <li><strong>Tin dân, dựa vào dân, vì dân:</strong> nói đi đôi với làm, tạo niềm tin bằng kết quả.</li>
            <li><strong>Chân thành – khoan dung – đoàn kết lâu dài:</strong> thu phục nhân tâm, hóa giải định kiến.</li>
            <li><strong>Đoàn kết phải có tổ chức:</strong> có lực lượng nòng cốt, cơ chế phối hợp, kỷ luật và thống nhất hành động.</li>
          </ul>

          <h2 id="principles">3) Nguyên tắc cốt lõi trong phương pháp đoàn kết</h2>

          <h3>3.1. Lợi ích dân tộc và quyền lợi chính đáng của nhân dân là “điểm tụ”</h3>
          <p>
            Đoàn kết muốn bền thì phải “hợp lòng dân”. Hồ Chí Minh nhấn mạnh: <strong>đặt lợi ích dân tộc lên trên</strong> và đồng thời{' '}
            <strong>tôn trọng lợi ích chính đáng</strong> của các tầng lớp. Khi mục tiêu chung rõ ràng, mọi khác biệt sẽ có cơ sở để dung hòa.
          </p>
          <div className="callout info">
            <strong>Gợi ý trình bày</strong>
            <ul style={{ margin: '8px 0 0' }}>
              <li>Mục tiêu chung càng rõ → mức đồng thuận càng cao.</li>
              <li>Quyền lợi chính đáng được tôn trọng → người ta sẵn sàng tham gia.</li>
            </ul>
          </div>

          <h3>3.2. Tôn trọng khác biệt, không “đồng nhất hóa”</h3>
          <p>
            Đại đoàn kết là <strong>đoàn kết trong đa dạng</strong>: khác giai tầng, nghề nghiệp, tôn giáo, dân tộc, vùng miền… Điều quan trọng là{' '}
            <strong>không gạt bỏ khác biệt</strong>, mà biết <strong>quy tụ vào mục tiêu chung</strong>.
          </p>
          <div className="callout info">
            <strong>Ứng dụng</strong>
            <ul style={{ margin: '8px 0 0' }}>
              <li>Tránh cách nói/viết “chụp mũ”, cực đoan.</li>
              <li>Thực hành đối thoại, lắng nghe, giải thích bằng lý lẽ và sự thật.</li>
            </ul>
          </div>

          <h3>3.3. Chân thành, khoan dung, “cảm hóa” thay vì loại trừ</h3>
          <p>
            Hồ Chí Minh coi trọng <strong>đánh thức phần tốt</strong>, khuyến khích cảm hóa và thu phục nhân tâm. Đoàn kết rộng phải có thái độ{' '}
            <strong>độ lượng</strong>, nhất là với người từng mắc sai lầm nhưng biết sửa.
          </p>
          <div className="callout info">
            <strong>Nguyên tắc hành động</strong>
            <ul style={{ margin: '8px 0 0' }}>
              <li>Phê bình đúng mực, không làm nhục.</li>
              <li>Mở đường cho người ta quay lại đóng góp.</li>
            </ul>
          </div>

          <h3>3.4. Nói đi đôi với làm: tạo niềm tin bằng kết quả</h3>
          <p>
            Đoàn kết không tồn tại nếu thiếu niềm tin. Muốn có niềm tin phải có <strong>tính gương mẫu</strong>, <strong>minh bạch</strong>, và{' '}
            <strong>kết quả thực tế</strong>. Khi người dân thấy “lời hứa thành việc thật”, đoàn kết tự nhiên mạnh lên.
          </p>
          <div className="callout info">
            <strong>Dấu hiệu đoàn kết thật</strong>
            <ul style={{ margin: '8px 0 0' }}>
              <li>Có đồng thuận trong việc khó.</li>
              <li>Có chia sẻ trách nhiệm, không đổ lỗi.</li>
              <li>Có cơ chế công bằng, minh bạch.</li>
            </ul>
          </div>

          <h2 id="implementation">4) Cách thức triển khai phương pháp (từ tư tưởng đến hành động)</h2>

          <h3>4.1. Tuyên truyền – vận động – thuyết phục</h3>
          <p>
            Đây là phương thức “mềm” nhưng hiệu quả: giải thích đúng – nói dễ hiểu – phù hợp từng đối tượng.
          </p>
          <ul>
            <li>Nói đúng vấn đề dân quan tâm.</li>
            <li>Dùng ví dụ gần gũi.</li>
            <li>Đưa giải pháp cụ thể, khả thi.</li>
          </ul>

          <h3>4.2. Nêu gương và xây dựng uy tín</h3>
          <p>
            Uy tín là “vốn” của đoàn kết. Nêu gương giúp lan tỏa niềm tin nhanh hơn mọi khẩu hiệu.
          </p>
          <ul>
            <li>Lãnh đạo/đoàn thể đi đầu làm trước → quần chúng theo sau.</li>
            <li>“Làm thật” tạo niềm tin, “hứa nhiều” tạo hoài nghi.</li>
          </ul>

          <h3>4.3. Tổ chức lực lượng và phối hợp hành động</h3>
          <p>Đoàn kết muốn mạnh phải có tổ chức, nghĩa là:</p>
          <ul>
            <li>Có <strong>lực lượng nòng cốt</strong> (hạt nhân) để giữ phương hướng.</li>
            <li>Có <strong>cơ chế phối hợp</strong> giữa các tổ chức chính trị – xã hội.</li>
            <li>Có <strong>kỷ luật và thống nhất hành động</strong>.</li>
          </ul>

          <h3>4.4. Chăm lo lợi ích thiết thực – an sinh – công bằng</h3>
          <p>
            Người ta đoàn kết mạnh nhất khi thấy <strong>được bảo vệ quyền lợi</strong> và <strong>được quan tâm</strong>. Vì vậy, chăm lo đời sống, cơ hội học
            tập, việc làm, hỗ trợ người yếu thế… chính là “nền” của đoàn kết.
          </p>

          <h2 id="quotes">5) Trích dẫn gợi ý</h2>
          <div className="quote-section">
            <blockquote>
              <p>“Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.”</p>
              <cite>— Hồ Chí Minh • Nguồn/bối cảnh: xem trang <a href="/resources">Tài liệu</a></cite>
            </blockquote>
          </div>
          <div className="quote-section">
            <blockquote>
              <p>“Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong.”</p>
              <cite>— Hồ Chí Minh • Gợi ý ghi nguồn: xem trang <a href="/resources">Tài liệu</a></cite>
            </blockquote>
          </div>

          <h2 id="practice">6) Liên hệ thực tiễn</h2>

          <div className="callout info">
            <strong>Tình huống 1: Mâu thuẫn lợi ích trong cộng đồng/lớp học</strong>
            <ul style={{ margin: '8px 0 0' }}>
              <li><strong>Bước 1:</strong> Xác định mục tiêu chung (ổn định – công bằng – hiệu quả).</li>
              <li><strong>Bước 2:</strong> Lắng nghe và “gỡ hiểu lầm” bằng dữ kiện.</li>
              <li><strong>Bước 3:</strong> Đưa phương án dung hòa quyền lợi chính đáng.</li>
              <li><strong>Bước 4:</strong> Chốt lại bằng cam kết và cơ chế minh bạch.</li>
            </ul>
          </div>

          <div className="callout info">
            <strong>Tình huống 2: Tranh luận gay gắt trên mạng xã hội</strong>
            <ul style={{ margin: '8px 0 0' }}>
              <li>Tránh “đấu tố”, tránh quy chụp.</li>
              <li>Dẫn chứng nguồn rõ ràng.</li>
              <li>Nhấn mạnh điểm chung trước khi bàn điểm khác.</li>
              <li>Kêu gọi hành động tích cực thay vì kích động.</li>
            </ul>
          </div>

          <h2 id="videos">7) Video tham khảo (nguồn chính thống)</h2>
          <p>
            Bạn có thể xem danh sách video đã chọn lọc theo từng phần tại trang <a href="/resources">Tài liệu</a>. Nếu cần, có thể bổ sung thêm mô tả
            1 câu cho từng video để học nhanh.
          </p>
          <ul>
            <li><strong>VTV / VOV / Báo Nhân Dân / MTTQVN</strong> — phóng sự/toạ đàm về đại đoàn kết, Mặt trận, phong trào đoàn kết, bài học “dựa vào dân”.</li>
            <li><strong>Phim tư liệu</strong> về tư tưởng Hồ Chí Minh, đặc biệt chuyên đề “đại đoàn kết”, “lấy dân làm gốc”.</li>
          </ul>

          <h2 id="conclusion">8) Kết luận ngắn</h2>
          <p>
            Phương pháp xây dựng khối đại đoàn kết trong tư tưởng Hồ Chí Minh là <strong>kết hợp giữa mục tiêu chung</strong> – <strong>tôn trọng khác biệt</strong>
            – <strong>cảm hóa bằng chân thành</strong> – <strong>tạo niềm tin bằng hành động</strong> – và <strong>tổ chức lực lượng bài bản</strong>. Đoàn kết
            càng đúng phương pháp thì càng bền vững và càng tạo sức mạnh.
          </p>

          <div className="callout">
            <strong>Gợi ý đọc tiếp</strong>
            <p style={{ margin: '6px 0 0' }}>
              Tiếp theo: <a href="/front">Mặt trận & khối đại đoàn kết toàn dân tộc</a>.{' '}
              Xem lại: <a href="/foundation">Nền tảng & “hạt nhân”</a>.{' '}
              Thực hành: <a href="/quiz">Ôn tập – câu hỏi trắc nghiệm</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Methods;
