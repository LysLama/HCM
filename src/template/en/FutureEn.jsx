import React from 'react';
import '../../styles/Section.css';
import sectionImage from '../../assets/img/dai_doan_ket.jpg';

// Forces / subjects of the great unity bloc (EN)
const ForcesEn = () => {
  return (
    <div className="page-container">
      <header className="section-hero" style={{ backgroundImage: `url(${sectionImage})` }}>
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Forces of the great national unity bloc</h1>
      </header>

      <main className="section-main-content">
        <nav className="anchor-nav" aria-label="Page outline">
          <a href="#subject">Subjects of unity</a>
          <a href="#people">Meaning of “the people”</a>
          <a href="#principle">Mobilization principle</a>
        </nav>

        <div className="content-text">
          <div className="quote-section">
            <blockquote>
              <p>“Unity is a national policy, not a political trick.”</p>
              <cite>
                — Ho Chi Minh •{' '}
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

          <h2 id="subject">Who constitutes the unity bloc?</h2>
          <p>
            According to Ho Chi Minh, the subjects of the great national unity bloc include the entire people—all Vietnamese who love their country—from
            all social classes, strata, sectors, genders, age groups, ethnicities, religious communities, political parties, and so on, both inside and
            outside the country.
          </p>

          <h2 id="people">How is “the people” understood?</h2>
          <ul>
            <li><strong>Concrete sense:</strong> specific Vietnamese individuals.</li>
            <li><strong>Collective sense:</strong> the broad masses as a social community.</li>
          </ul>

          <div className="quote-section">
            <blockquote>
              <p>
                “Anyone with talent, virtue, ability, and a sincere desire to serve the Fatherland and the people, we unite with them.”
              </p>
              <cite>
                — Ho Chi Minh •{' '}
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

          <h2 id="principle">Principle in mobilizing all forces</h2>
          <p>
            In building the unity bloc, it is essential to uphold the working-class standpoint and harmoniously resolve relationships between classes and
            the nation to mobilize all forces. No force should be excluded as long as it is loyal, willing to serve the Fatherland, and does not betray the
            people’s interests.
          </p>

          <div className="callout">
            <strong>Next</strong>
            <p style={{ margin: '6px 0 0' }}>
              See also: <a href="/foundation/en">Foundation & the “core factor”</a>.
            </p>
          </div>

          <h2>Video sources (official pages)</h2>
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
        </div>
      </main>
    </div>
  );
};

export default ForcesEn;
