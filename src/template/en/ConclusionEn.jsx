import React from 'react';
import '../../styles/Section.css';
import sectionImage from '../../assets/img/mit_tinh_0.jpg';

// Foundation and “core factor” of the great unity bloc (EN)
const FoundationEn = () => {
  return (
    <div className="page-container">
      <header className="section-hero" style={{ backgroundImage: `url(${sectionImage})` }}>
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Foundation & the “core factor” of unity</h1>
      </header>

      <main className="section-main-content">
        <nav className="anchor-nav" aria-label="Page outline">
          <a href="#foundation">Identifying the foundation</a>
          <a href="#base">Workers–peasants–intelligentsia</a>
          <a href="#core">Unity within the Party</a>
        </nav>

        <div className="content-text">
          <h2 id="foundation">Build from a solid foundation</h2>
          <p>
            To build the great national unity bloc, it is necessary to identify its foundation clearly. With a solid foundation, the bloc can expand to
            unite other social strata.
          </p>

          <div className="quote-section">
            <blockquote>
              <p>
                “Great unity means first and foremost uniting the vast majority of the people, and the vast majority of the people are workers, peasants,
                and other working people. This is the foundation of great unity. It is like the foundation of a house or the roots of a tree. But once
                there is a solid foundation and strong roots, it is still necessary to unite other social strata.”
              </p>
              <cite>
                — Ho Chi Minh •{' '}
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

          <h2 id="base">Foundation: workers, peasants, and the intelligentsia</h2>
          <p>
            According to Ho Chi Minh, the foundational forces of the unity bloc are the working class, the peasantry, and the intelligentsia. The stronger
            and more consolidated this foundation becomes, the broader the unity bloc can expand.
          </p>

          <h2 id="core">The “core factor”: unity within the Party</h2>
          <p>
            Special attention must be paid to the “core” factor—unity and solidarity within the Party—because this is the condition for unity in society at
            large. The stronger the Party’s unity, the stronger national unity becomes.
          </p>

          <div className="quote-section">
            <blockquote>
              <p>“Preserve the Party’s unity as you would preserve the pupil of your eye.”</p>
              <cite>
                — Ho Chi Minh •{' '}
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

          <div className="callout info">
            <strong>Short takeaway</strong>
            <p style={{ margin: '6px 0 0' }}>
              Party unity, national unity, and the close bond between the Party and the people create internal strength to overcome challenges and advance
              toward victory.
            </p>
          </div>

          <div className="callout">
            <strong>Continue</strong>
            <p style={{ margin: '6px 0 0' }}>
              Explore: <a href="/methods/en">Methods</a> • <a href="/applications/en">Applications</a> • <a href="/front/en">Front</a>.
            </p>
          </div>

          <h2>Video sources (official pages)</h2>
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
        </div>
      </main>
    </div>
  );
};

export default FoundationEn;
