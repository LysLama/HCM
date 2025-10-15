import React from 'react';
import '../styles/Section.css';

const Chapter2MarketEconomy = () => {
  return (
    <div className="page-container">
      <header className="section-hero">
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Chương 2 • Nền kinh tế thị trường và các quy luật chủ yếu</h1>
      </header>
      <main className="section-main-content">
        {/* Anchor nav */}
        <nav className="anchor-nav" aria-label="Mục lục trang">
          <a href="#concept">Khái niệm</a>
          <a href="#features">Đặc trưng</a>
          <a href="#proscons">Ưu/Khuyết</a>
          <a href="#laws">Quy luật</a>
          <a href="#state">Vai trò Nhà nước</a>
          <a href="#videos">Video</a>
          <a href="#markdown">Markdown</a>
        </nav>

        {/* Two-column layout */}
        <div className="two-col">
          <article className="col-main content-text">
            <h2>II. Thị trường và nền kinh tế thị trường</h2>
            <h3>4) Nền kinh tế thị trường và một số quy luật chủ yếu</h3>
            <p>
              Dưới đây là phần <em>tổng hợp–diễn giải</em> về kinh tế thị trường và các quy luật vận hành cơ bản; kèm công thức, trích dẫn và video tham khảo.
            </p>

            {/* A. Khái niệm */}
            <section id="concept">
              <h3>A. Khái niệm</h3>
              <p>
                <strong>Nền kinh tế thị trường</strong> là nền kinh tế hàng hóa phát triển cao, vận hành theo <strong>cơ chế thị trường</strong>; mọi quan hệ sản xuất–trao đổi đi qua thị trường và chịu tác động của các <strong>quy luật thị trường</strong>. Cơ chế thị trường được ví như “<strong>bàn tay vô hình</strong>” tự điều chỉnh các quan hệ kinh tế.
              </p>
            </section>

            {/* B. Đặc trưng phổ biến */}
            <section id="features">
              <h3>B. Đặc trưng phổ biến (tóm tắt)</h3>
              <ul>
                <li><strong>Đa dạng chủ thể &amp; sở hữu</strong>, bình đẳng trước pháp luật.</li>
                <li><strong>Thị trường phân bổ nguồn lực</strong> qua các thị trường bộ phận (hàng hóa, dịch vụ, lao động, tài chính, BĐS, KH–CN…).</li>
                <li><strong>Giá cả theo nguyên tắc thị trường</strong>, <strong>cạnh tranh</strong> là động lực; <strong>Nhà nước</strong> quản lý và <strong>khắc phục khuyết tật thị trường</strong> để ổn định &amp; công bằng.</li>
                <li><strong>Kinh tế mở</strong>, gắn kết chặt với thị trường quốc tế.</li>
              </ul>
            </section>

            {/* C. Ưu thế & khuyết tật */}
            <section id="proscons">
              <h3>C. Ưu thế &amp; khuyết tật (rất ngắn)</h3>
              <div className="grid two-cols gap-md">
                <div className="callout success">
                  <strong>Ưu thế</strong>
                  <p>Kích thích <strong>sáng tạo</strong>, phát huy lợi thế vùng/ngành, nâng <strong>năng suất &amp; hiệu quả</strong>.</p>
                </div>
                <div className="callout warning">
                  <strong>Khuyết tật</strong>
                  <p>Nguy cơ <strong>đầu cơ/gian lận/khủng hoảng</strong>, <strong>suy thoái môi trường</strong>, <strong>phân hóa xã hội</strong>; <strong>không tự khắc phục</strong> nếu thiếu vai trò Nhà nước.</p>
                </div>
              </div>
            </section>

            {/* D. Quy luật chủ yếu */}
            <section id="laws">
              <h3>D. Một số quy luật chủ yếu</h3>
              <div className="grid gap-md">
                <div className="card">
                  <h4>1) Quy luật giá trị</h4>
                  <ul>
                    <li><strong>Yêu cầu</strong>: sản xuất–trao đổi dựa trên <strong>thời gian lao động xã hội cần thiết</strong>; trao đổi theo <strong>nguyên tắc ngang giá</strong>.</li>
                    <li><strong>Cơ chế</strong>: <strong>giá cả</strong> vận động <strong>xoay quanh giá trị</strong> dưới tác động <strong>cung–cầu</strong>.</li>
                    <li><strong>Tác động</strong>: điều tiết <strong>sản xuất &amp; lưu thông</strong>; dịch chuyển nguồn lực tới nơi <strong>giá cao/lợi nhuận</strong>.</li>
                  </ul>
                </div>
                <div className="card">
                  <h4>2) Quy luật cung–cầu</h4>
                  <ul>
                    <li><strong>Yêu cầu</strong>: cung–cầu <strong>thống nhất</strong>, tác động trực tiếp đến <strong>giá</strong> (cung &gt; cầu → giá &lt; giá trị; ngược lại thì &gt;).</li>
                    <li><strong>Tác động</strong>: điều tiết <strong>SX &amp; lưu thông</strong>, <strong>cơ cấu–quy mô thị trường</strong>; căn cứ dự đoán <strong>xu thế giá cả</strong>.</li>
                  </ul>
                </div>
                <div className="card">
                  <h4>3) Quy luật lưu thông tiền tệ</h4>
                  <p><strong>Nguyên lý</strong>: lượng tiền đưa vào lưu thông phải <strong>ăn khớp</strong> với lưu thông hàng hóa–dịch vụ; lệch pha → <strong>trì trệ</strong> hoặc <strong>lạm phát</strong>.</p>
                  <div><code>M = (P × Q) / V</code></div>
                  <div><code>M = [P×Q − (G1 + G2) + G3] / V</code></div>
                  <p><strong>Hàm ý</strong>: <strong>phát hành tiền quá mức</strong> làm <strong>mất giá tiền</strong> và <strong>tăng lạm phát</strong> ⇒ cần kỷ luật phát hành.</p>
                </div>
                <div className="card">
                  <h4>4) Quy luật cạnh tranh</h4>
                  <ul>
                    <li><strong>Nội bộ ngành</strong>: DN cải tiến kỹ thuật, hạ <strong>giá trị cá biệt</strong> → hình thành <strong>giá trị thị trường</strong>.</li>
                    <li><strong>Giữa các ngành</strong>: <strong>dịch chuyển nguồn lực</strong> tới nơi <strong>lợi nhuận cao hơn</strong>; mục tiêu là nơi <strong>đầu tư có lợi</strong>.</li>
                    <li><strong>Tác động</strong>: thúc đẩy <strong>lực lượng sản xuất</strong> và hoàn thiện <strong>kinh tế thị trường</strong>.</li>
                  </ul>
                </div>
              </div>

              <div className="quote-section" style={{marginTop:'18px'}}>
                <blockquote>
                  “As values, all commodities are only definite masses of congealed labour time.”
                  <cite> — Karl Marx — <a href="https://www.marxists.org/archive/marx/works/1867-c1/ch01.htm?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Marxists.org</a></cite>
                </blockquote>
              </div>
            </section>

            {/* E. Vai trò Nhà nước */}
            <section id="state">
              <h3>E. Vai trò Nhà nước trong kinh tế thị trường hiện đại</h3>
              <p>
                Nền kinh tế thị trường thực tế là <strong>kinh tế thị trường có điều tiết của Nhà nước</strong> (kinh tế hỗn hợp) để <strong>sửa chữa thất bại thị trường, ổn định vĩ mô, giảm phân hóa</strong>.
              </p>
            </section>

            {/* Video (preserve existing) */}
            <section id="videos">
              <h3>Video gợi ý</h3>
              <div className="video-section">
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/MAC2pTq4PGQ" title="Quy luật Giá trị (VN)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <p className="video-caption">KTCT Mác–Lênin: Quy luật Giá trị (VN)</p>
                </div>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/s8qHrWz5B28" title="Cung cầu là gì? (VN)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <p className="video-caption">Cung cầu là gì? Quy luật cung cầu &amp; giá cả thị trường (VN)</p>
                </div>
              </div>
            </section>

            {/* Markdown references */}
            <section id="markdown">
              <h3>Tài liệu tham khảo (ngoài giáo trình)</h3>
              <ul className="bullet-list">
                <li><a href="https://www.britannica.com/money/market?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Market — Definition, History, Types, &amp; Facts (Britannica)</a> (Encyclopedia Britannica)</li>
                <li><a href="https://www.britannica.com/dictionary/market-economy?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Market economy — Britannica Dictionary</a> (Encyclopedia Britannica)</li>
                <li><a href="https://www.britannica.com/money/invisible-hand?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Invisible hand — Britannica</a> (Encyclopedia Britannica)</li>
                <li><a href="https://openstax.org/books/principles-economics-3e/pages/4-3-the-market-system-as-an-efficient-mechanism-for-information?utm_source=chatgpt.com" target="_blank" rel="noreferrer">OpenStax Principles of Economics 3e — 4.3 The Market System as an Efficient Mechanism for Information</a> (openstax.org)</li>
                <li><a href="https://www.imf.org/en/Publications/fandd/issues/Series/Back-to-Basics/Supply-and-Demand?utm_source=chatgpt.com" target="_blank" rel="noreferrer">IMF Back to Basics — Supply and Demand</a> (IMF)</li>
                <li><a href="https://www.oecd.org/content/dam/oecd/en/publications/reports/2012/10/market-definition_e54deedd/62f0f46c-en.pdf?utm_source=chatgpt.com" target="_blank" rel="noreferrer">OECD — Market Definition (HMT test, note PDF)</a> (OECD)</li>
                <li><a href="https://www.worldbank.org/en/topic/competition-policy?utm_source=chatgpt.com" target="_blank" rel="noreferrer">World Bank — Markets and Competition Policy</a> (World Bank)</li>
                <li><a href="https://plato.stanford.edu/entries/markets/?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Stanford Encyclopedia of Philosophy — Markets</a> (Stanford Encyclopedia of Philosophy)</li>
                <li><a href="https://mru.org/courses/principles-economics-macroeconomics/inflation-quantity-theory-of-money?utm_source=chatgpt.com" target="_blank" rel="noreferrer">MRU — Quantity Theory of Money</a> (Marginal Revolution University)</li>
                <li><a href="https://socialsci.libretexts.org/Bookshelves/Economics/Introductory_Comprehensive_Economics/Principles_of_Economics_%28LibreTexts%29/26%3A_Monetary_Policy_and_the_Fed/26.3%3A_Monetary_Policy_and_the_Equation_of_Exchange?utm_source=chatgpt.com" target="_blank" rel="noreferrer">LibreTexts — Monetary Policy and the Equation of Exchange</a> (Social Sci LibreTexts)</li>
              </ul>

              <h3 style={{marginTop:'20px'}}>Video YouTube</h3>
              <ul className="bullet-list">
                <li><strong>Tổng quan KTTT / vai trò Nhà nước</strong>: <a href="https://www.youtube.com/watch?v=6yLY06tTQ1A&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Market Economy: Crash Course Government &amp; Politics #46</a>; <a href="https://www.youtube.com/watch?v=DKVEOefidjQ&utm_source=chatgpt.com" target="_blank" rel="noreferrer">What is a Market Economy?</a></li>
                <li><strong>Quy luật cung–cầu</strong>: <a href="https://www.youtube.com/watch?v=PEMkfgrifDw&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Market equilibrium — Khan Academy</a>; <a href="https://www.youtube.com/playlist?list=PLSQl0a2vh4HBG0s0Bw1iXmhJeX0ADT4L1&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Supply, demand &amp; market equilibrium (playlist)</a></li>
                <li><strong>Quy luật lưu thông tiền tệ (MV = PY)</strong>: <a href="https://www.youtube.com/watch?v=pIlnVgAy5Oo&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Quantity Theory of Money — MRU</a>; <a href="https://www.khanacademy.org/economics-finance-domain/ap-macroeconomics/ap-long-run-consequences-of-stabilization-policies/money-growth-and-inflation/v/quantity-theory-of-money-ap-macroeconomics-khan-academy?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Quantity theory of money — Khan Academy</a></li>
                <li><strong>Cạnh tranh &amp; cấu trúc thị trường</strong>: <a href="https://www.youtube.com/watch?v=2yPAv3NL0s8&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Market Structures in 5 Minutes — Jacob Clifford</a></li>
                <li><strong>Video tiếng Việt (tham khảo nhanh)</strong>: <a href="https://www.youtube.com/watch?v=s8qHrWz5B28&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Cung cầu là gì?</a>; <a href="https://www.youtube.com/watch?v=DkxZ-b5Cdmw&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Quy luật cung cầu | Kinh tế học cơ bản</a>; <a href="https://www.youtube.com/watch?v=0F325XfZ_0E&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Nền kinh tế thị trường là gì?</a></li>
              </ul>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="col-side">
            <div className="side-card sticky">
              <h4>Mục lục</h4>
              <ul>
                <li><a href="#concept">Khái niệm</a></li>
                <li><a href="#features">Đặc trưng</a></li>
                <li><a href="#proscons">Ưu/Khuyết</a></li>
                <li><a href="#laws">Quy luật</a></li>
                <li><a href="#state">Vai trò Nhà nước</a></li>
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

export default Chapter2MarketEconomy;
