import React from 'react';
import '../styles/Section.css';

const ExternalLink = ({ href, children, title }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" title={title || href}>
    {children}
  </a>
);

const Video = ({ src, title, caption }) => (
  <div className="video-container" style={{ marginBottom: '1.5rem' }}>
    <iframe
      width="560"
      height="315"
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
    {caption && <p className="video-caption">{caption}</p>}
  </div>
);

const Chapter2Overview = () => {
  return (
    <div className="page-container">
      <header className="section-hero">
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể</h1>
      </header>

      <main className="section-main-content">
        <div className="content-text">
          <h2>I. Lý luận của C. Mác về sản xuất hàng hóa và hàng hóa</h2>

          <h3>1) Khái niệm nhanh (đặt nền)</h3>
          <ul>
            <li>
              <strong>Hàng hóa</strong>: sản phẩm của lao động để trao đổi; có <strong>hai thuộc tính</strong>: <em>giá trị sử dụng</em> (công dụng) và <em>giá trị</em> (lao động xã hội kết tinh).
              Trích Mác: “Với tư cách là giá trị, mọi hàng hóa chỉ là những khối lượng lao động kết tinh” (bản dịch thường dùng).{' '}
              <ExternalLink href="https://www.marxists.org/archive/marx/works/1867-c1/ch01.htm?utm_source=chatgpt.com" title="Marx Capital Vol. I - Chapter One">(Marxists Internet Archive)</ExternalLink>
            </li>
            <li>Ý nghĩa: làm rõ vì sao <strong>giá cả</strong> vận động quanh <strong>giá trị</strong> và vì sao cạnh tranh ép người sản xuất phải nâng năng suất.</li>
          </ul>

          <h3>2) Tiền tệ</h3>
          <h4>a) Nguồn gốc &amp; bản chất</h4>
          <ul>
            <li>Giá trị hàng hóa chỉ “hiện hình” trong trao đổi qua các <strong>hình thái giá trị</strong> phát triển dần: 1) <em>Giản đơn/ngẫu nhiên</em> → 2) <em>Mở rộng</em> → 3) <em>Chung</em> → 4) <em>Tiền tệ</em> (vàng trở thành <strong>vật ngang giá chung</strong>).</li>
            <li><strong>Bản chất</strong>: tiền là <strong>hàng hóa đặc biệt</strong> – hình thái tiền của giá trị; phản ánh <strong>lao động xã hội</strong> và <strong>quan hệ</strong> giữa những người sản xuất–trao đổi. (Tài liệu gốc có ghi chú quan niệm vi mô: “tiền là bất cứ phương tiện nào được thừa nhận chung để thanh toán”).</li>
          </ul>
          <h4>b) Chức năng của tiền</h4>
          <ol>
            <li><strong>Thước đo giá trị</strong> → hình thành <strong>giá cả</strong> (chịu tác động bởi giá trị hàng hóa, giá trị tiền, cung–cầu).</li>
            <li><strong>Phương tiện lưu thông</strong> (mua–bán tách rời không gian/thời gian).</li>
            <li><strong>Cất trữ</strong> (rút khỏi lưu thông khi sản xuất suy giảm).</li>
            <li><strong>Thanh toán</strong> (mua chịu, trả nợ; bao gồm tiền ghi sổ, tài khoản, tiền điện tử).</li>
            <li><strong>Tiền tệ thế giới</strong> (mua bán &amp; thanh toán quốc tế).</li>
          </ol>
          <div className="quote-section">
            <blockquote>
              “Giá cả vừa hàm ý hàng hóa có thể đổi lấy tiền, vừa đòi hỏi nó phải được đổi lấy tiền.”
              <cite> — Karl Marx,{' '}
                <ExternalLink href="https://www.marxists.org/archive/marx/works/1867-c1/ch03.htm?utm_source=chatgpt.com" title="Capital Vol. I - Chapter Three">Capital, Ch.3</ExternalLink>
              </cite>
            </blockquote>
          </div>

          <h3>3) Dịch vụ &amp; một số quan hệ trao đổi “đặc biệt” hiện nay</h3>
          <ul>
            <li><strong>Dịch vụ</strong>: là <strong>hàng hóa vô hình</strong>; sản xuất–tiêu dùng <strong>đồng thời</strong>; ngày nay vai trò tăng mạnh nhờ phân công lao động &amp; công nghệ.</li>
            <li><strong>Quyền sử dụng đất</strong>: có giá cả nhưng <strong>không</strong> do lao động trực tiếp tạo ra như hàng hóa thông thường; giá chịu tác động cung–cầu, đô thị hóa, khan hiếm… → đừng nhầm <em>giá trị</em> với <em>của cải</em>.</li>
            <li><strong>Thương hiệu/danh tiếng</strong>: được định giá cao khi gắn với <strong>sản xuất/hàng hóa–dịch vụ thực</strong>; chuyển nhượng cầu thủ phản ánh <em>khả năng + khan hiếm + lợi ích kỳ vọng</em>.</li>
            <li><strong>Chứng khoán/chứng quyền/giấy tờ có giá</strong>: là <strong>yếu tố phái sinh</strong> (Mác gọi <em>tư bản giả</em>), chỉ có ý nghĩa khi gắn với <strong>chủ thể sản xuất kinh doanh thực</strong>; lãi–lỗ chủ yếu là <strong>chuyển tiền</strong> giữa các chủ thể.</li>
          </ul>

          <h2>II. Thị trường và nền kinh tế thị trường</h2>
          <h3>4) Khái niệm, phân loại, vai trò của thị trường</h3>
          <ul>
            <li><strong>Khái niệm</strong>: tổng hòa <strong>quan hệ kinh tế</strong> nơi nhu cầu được đáp ứng qua <strong>mua–bán</strong>, với <strong>giá cả</strong> &amp; <strong>số lượng</strong> xác định phù hợp trình độ sản xuất xã hội.</li>
            <li><strong>Phân loại</strong>: theo đối tượng (hàng hóa/dịch vụ), phạm vi (trong nước/thế giới), vai trò (tư liệu tiêu dùng/tư liệu sản xuất), cơ chế (tự do/có điều tiết; cạnh tranh hoàn hảo/không hoàn hảo).</li>
          </ul>
          <p><strong>Vai trò chủ yếu</strong>:</p>
          <ol>
            <li><strong>Thực hiện giá trị</strong> &amp; làm <strong>cầu nối</strong> sản xuất–tiêu dùng (thị trường mở rộng → kích thích sản xuất).</li>
            <li><strong>Thông tin &amp; định hướng</strong>, <strong>phân bổ nguồn lực</strong> hiệu quả (chọn chủ thể dùng nguồn lực tốt hơn).</li>
            <li><strong>Gắn kết</strong> các khâu, vùng miền, và <strong>kết nối</strong> với <strong>kinh tế thế giới</strong>.</li>
            <li>Vận hành theo <strong>cơ chế thị trường</strong> (“bàn tay vô hình” – ví von của A. Smith).</li>
          </ol>
          <div className="quote-section">
            <blockquote>
              “Mỗi cá nhân, khi theo đuổi lợi ích riêng, thường bị ‘bàn tay vô hình’ dẫn dắt vì lợi ích chung.”
              <cite> — Adam Smith,{' '}
                <ExternalLink href="https://www.econlib.org/library/Topics/Details/invisiblehand.html?utm_source=chatgpt.com" title="Invisible Hand - Econlib">Econlib</ExternalLink>
              </cite>
            </blockquote>
          </div>

          <h3>5) Nền kinh tế thị trường &amp; các quy luật chủ yếu</h3>
          <h4>a) Khái niệm &amp; đặc trưng</h4>
          <ul>
            <li><strong>Kinh tế thị trường</strong>: nền kinh tế hàng hóa phát triển cao, mọi quan hệ sản xuất–trao đổi thông qua thị trường, chịu các <strong>quy luật thị trường</strong>.</li>
            <li><strong>Đặc trưng chung</strong>: đa dạng chủ thể &amp; sở hữu; <strong>giá cả theo thị trường</strong> – cạnh tranh là động lực; <strong>Nhà nước</strong> quản lý/khắc phục thất bại thị trường; <strong>mở</strong> &amp; hội nhập.</li>
            <li><strong>Ưu thế</strong>: kích thích <strong>sáng tạo</strong>, phát huy <strong>tiềm năng–lợi thế</strong>, <strong>thỏa mãn nhu cầu</strong> xã hội tốt hơn.</li>
            <li><strong>Khuyết tật</strong>: tiềm ẩn <strong>khủng hoảng</strong>; <strong>suy thoái môi trường/tài nguyên</strong>; <strong>phân hóa</strong> xã hội → cần <strong>điều tiết</strong> của Nhà nước (nền kinh tế hỗn hợp).</li>
          </ul>

          <h4>b) Các quy luật chủ yếu</h4>
          <ol>
            <li><strong>Quy luật giá trị</strong>: sản xuất–trao đổi dựa trên <strong>thời gian lao động xã hội cần thiết</strong>; <strong>giá cả</strong> vận động quanh <strong>giá trị</strong> dưới tác động <strong>cung–cầu</strong> → điều tiết sản xuất &amp; lưu thông; kích thích đổi mới kỹ thuật; <strong>phân hóa</strong> người sản xuất.</li>
            <li><strong>Quy luật cung–cầu</strong>: cung↔cầu tác động <strong>giá cả</strong> &amp; <strong>quy mô thị trường</strong>; Nhà nước có thể vận dụng thuế, tín dụng, cơ cấu tiêu dùng… để <strong>giữ cân đối lành mạnh</strong>.</li>
            <li><strong>Quy luật lưu thông tiền tệ</strong>: lượng tiền cần cho lưu thông: <code>M = (P × Q) / V</code>; khi phổ biến thanh toán không tiền mặt: <code>M = [P×Q − (G1 + G2) + G3] / V</code>. <strong>Phát hành quá mức</strong> → <strong>lạm phát</strong>.</li>
            <li><strong>Quy luật cạnh tranh</strong>: <em>trong ngành</em> (hình thành <strong>giá trị thị trường</strong>) &amp; <em>giữa ngành</em> (dịch chuyển nguồn lực đến nơi lợi nhuận cao). <strong>Tích cực</strong>: nâng lực lượng sản xuất, phân bổ nguồn lực linh hoạt, đáp ứng nhu cầu tốt hơn. <strong>Tiêu cực</strong>: thủ đoạn thiếu lành mạnh, lãng phí nguồn lực, hại phúc lợi → cần khuôn khổ pháp lý.</li>
          </ol>
          <div className="quote-section">
            <blockquote>
              “As values, all commodities are only definite masses of congealed labour time.”
              <cite> — Karl Marx,{' '}
                <ExternalLink href="https://www.marxists.org/archive/marx/works/1867-c1/ch01.htm?utm_source=chatgpt.com" title="Capital Vol. I - Chapter One">Capital, Ch.1</ExternalLink>
              </cite>
            </blockquote>
          </div>

          <h2>III. Vai trò của các chủ thể tham gia thị trường (tóm tắt)</h2>
          <ul>
            <li><strong>Hộ gia đình (người tiêu dùng/lao động)</strong>: quyết định <strong>cầu</strong> hàng hóa–dịch vụ; <strong>cung</strong> sức lao động; tiết kiệm/đầu tư.</li>
            <li><strong>Doanh nghiệp</strong>: <strong>cung</strong> hàng hóa–dịch vụ; lựa chọn công nghệ, tổ chức sản xuất, cạnh tranh–hợp tác.</li>
            <li><strong>Nhà nước</strong>: luật chơi &amp; thực thi; điều tiết <strong>ổn định vĩ mô</strong>, <strong>khắc phục thất bại thị trường</strong>; bảo đảm công bằng cơ bản.</li>
            <li><strong>Tổ chức tài chính–ngân hàng/thị trường vốn</strong>: <strong>phân bổ vốn</strong>; chia sẻ–quản trị rủi ro.</li>
            <li><strong>Khu vực đối ngoại</strong>: thương mại quốc tế, FDI, kiều hối, liên kết chuỗi giá trị.</li>
          </ul>

          <h2>IV. Trích dẫn ngắn (≤25 từ/nguồn)</h2>
          <ul>
            <li><strong>Karl Marx – Tư bản, Q.I</strong>: “As values, all commodities are only definite masses of congealed labour time.” — {' '}
              <ExternalLink href="https://www.marxists.org/archive/marx/works/1867-c1/ch01.htm?utm_source=chatgpt.com">Marxists Internet Archive</ExternalLink></li>
            <li><strong>Karl Marx – Tư bản, Ch.3</strong>: “A price implies a commodity is exchangeable for money—and must be so exchanged.” — {' '}
              <ExternalLink href="https://www.marxists.org/archive/marx/works/1867-c1/ch03.htm?utm_source=chatgpt.com">Marxists Internet Archive</ExternalLink></li>
            <li><strong>Adam Smith – Wealth of Nations</strong>: “Led by an invisible hand to promote an end …” — {' '}
              <ExternalLink href="https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.150/lehre/ws0910/GVWL/AdamSmith.pdf?utm_source=chatgpt.com">University of Ulm (PDF)</ExternalLink></li>
          </ul>

          <h2>V. Video gợi ý (nhúng &amp; liên kết)</h2>
          <h4>(A) Hàng hóa–giá trị–tiền tệ (Marx)</h4>
          <div className="video-section">
            <Video src="https://www.youtube.com/embed/GHcFwtLn6Xg" title="Fundamentals of Marx: The Commodity" caption="Fundamentals of Marx: The Commodity (EN)" />
            <Video src="https://www.youtube.com/embed/V2_8rVtaAwU" title="Capital Made Easy (1): Commodities and Money" caption="Capital (Marx) Made Easy (1): Commodities and Money (EN)" />
            <Video src="https://www.youtube.com/embed/zwuMrd_Hgww" title="Reading Capital with David Harvey – Class 2" caption="Reading Capital Vol I with David Harvey – Class 2 (EN)" />
            <Video src="https://www.youtube.com/embed/6NpwcMXEPMo" title="Nguồn gốc, bản chất, chức năng của tiền tệ" caption="KTCT Mác–Lênin: Nguồn gốc, bản chất, chức năng của tiền tệ (VN)" />
          </div>

          <h4>(B) Quy luật giá trị, cung–cầu, lưu thông tiền tệ</h4>
          <div className="video-section">
            <Video src="https://www.youtube.com/embed/MAC2pTq4PGQ" title="Quy luật Giá trị" caption="KTCT Mác–Lênin: Quy luật Giá trị (VN)" />
            <Video src="https://www.youtube.com/embed/s8qHrWz5B28" title="Cung cầu là gì?" caption="Cung cầu là gì? Quy luật cung cầu & giá cả thị trường (VN)" />
          </div>

          <h4>(C) Thị trường &amp; cơ chế thị trường</h4>
          <div className="video-section">
            <Video src="https://www.youtube.com/embed/TtF0DU2UMT4" title="Thị trường & cơ chế thị trường" caption="KTCT Mác–Lênin: Thị trường & cơ chế thị trường (VN)" />
            <Video src="https://www.youtube.com/embed/R1TX-84QS1o" title="Kinh tế thị trường & đặc trưng" caption="Kinh tế thị trường & đặc trưng cơ bản (VN)" />
          </div>

          <p>
            Danh sách liên kết nhanh: {' '}
            <ExternalLink href="https://www.youtube.com/watch?v=GHcFwtLn6Xg&utm_source=chatgpt.com">[5]</ExternalLink>{' | '}
            <ExternalLink href="https://www.youtube.com/watch?v=V2_8rVtaAwU&utm_source=chatgpt.com">[6]</ExternalLink>{' | '}
            <ExternalLink href="https://www.youtube.com/watch?v=zwuMrd_Hgww&utm_source=chatgpt.com">[7]</ExternalLink>{' | '}
            <ExternalLink href="https://www.youtube.com/watch?v=6NpwcMXEPMo&utm_source=chatgpt.com">[8]</ExternalLink>{' | '}
            <ExternalLink href="https://www.youtube.com/watch?v=MAC2pTq4PGQ&utm_source=chatgpt.com">[9]</ExternalLink>{' | '}
            <ExternalLink href="https://www.youtube.com/watch?v=s8qHrWz5B28&utm_source=chatgpt.com">[10]</ExternalLink>{' | '}
            <ExternalLink href="https://www.youtube.com/watch?v=gBu_GgUAGHw&utm_source=chatgpt.com">[11]</ExternalLink>{' | '}
            <ExternalLink href="https://www.youtube.com/watch?v=TtF0DU2UMT4&utm_source=chatgpt.com">[12]</ExternalLink>{' | '}
            <ExternalLink href="https://www.youtube.com/watch?v=R1TX-84QS1o&utm_source=chatgpt.com">[13]</ExternalLink>
          </p>

          <hr />
          <p><strong>Nguồn chính</strong>: Nội dung, định nghĩa, phân tích và công thức được trích lược từ file giáo trình bạn cung cấp.</p>
        </div>
      </main>
    </div>
  );
};

export default Chapter2Overview;
