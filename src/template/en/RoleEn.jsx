import React from 'react';
import '../../styles/Section.css';
import sectionImage from '../../assets/img/hochiminh1.jpg';

// Primary objective and foremost task (EN)
const PrimaryTaskEn = () => {
  return (
    <div className="page-container">
      <header className="section-hero" style={{ backgroundImage: `url(${sectionImage})` }}>
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Great unity as the primary objective and task</h1>
      </header>

      <main className="section-main-content">
        <nav className="anchor-nav" aria-label="Page outline">
          <a href="#objective">Long-term objective</a>
          <a href="#party">Party’s foremost task</a>
          <a href="#masses">Cause of the masses</a>
        </nav>

        <div className="content-text">
          <h2 id="objective">Not only a slogan — a long-term objective</h2>
          <p>
            For Ho Chi Minh, great national unity is not merely a strategic slogan but also a <strong>long-term objective</strong> of the revolution. Since the
            Party is the leading force, great unity must be identified as the Party’s <strong>foremost task</strong> and carried out across guidelines,
            viewpoints, policies, and practical activities.
          </p>

          <h2 id="party">“Unity of the entire people, service to the Fatherland”</h2>
          <div className="quote-section">
            <blockquote>
              <p>
                “The purpose of the Vietnam Workers’ Party can be summed up in eight words: UNITY OF THE ENTIRE PEOPLE, SERVICE TO THE FATHERLAND.”
              </p>
              <cite>
                — Ho Chi Minh (March 3, 1951) •{' '}
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

          <h2 id="masses">The revolution is the cause of the masses</h2>
          <ul>
            <li>The revolution is the cause of the masses, carried out by the masses and for the masses.</li>
            <li>Great unity is an objective requirement of revolutionary struggle and an objective demand of the people’s self-liberation.</li>
            <li>Without unity, the people themselves would fail in the struggle for their own interests.</li>
          </ul>

          <div className="callout info">
            <strong>Organized strength</strong>
            <p style={{ margin: '6px 0 0' }}>
              The Party must awaken, unite, and guide the masses—transforming spontaneous demands into conscious, organized reality within the unity bloc—so
              as to create combined strength for national independence, people’s freedom, and human happiness.
            </p>
          </div>

          <div className="callout">
            <strong>Next</strong>
            <p style={{ margin: '6px 0 0' }}>
              See also: <a href="/forces/en">Forces of the great national unity bloc</a>.
            </p>
          </div>

          <h2>Video sources (official pages)</h2>
          <ul>
            <li>
              VNA/Vietnammedia: “Phát huy sức mạnh đại đoàn kết toàn dân tộc theo tư tưởng Hồ Chí Minh” —{' '}
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
        </div>
      </main>
    </div>
  );
};

export default PrimaryTaskEn;
