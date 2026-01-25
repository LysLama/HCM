import React from 'react';
import '../../styles/Section.css';
import sectionImage from '../../assets/img/theory.jpg';

// Strategic role of great national unity (EN)
const StrategicRoleEn = () => {
  return (
    <div className="page-container">
      <header className="section-hero section-hero--no-zoom" style={{ backgroundImage: `url(${sectionImage})` }}>
        <div className="hero-overlay" />
        <h1 className="section-hero-title">The strategic role of great national unity</h1>
      </header>

      <main className="section-main-content">
        <nav className="anchor-nav" aria-label="Page outline">
          <a href="#strategic">Strategic significance</a>
          <a href="#truths">Key principles</a>
          <a href="#poem">Conclusion</a>
        </nav>

        <div className="content-text">
          <h2 id="strategic">Great national unity determines revolutionary success</h2>
          <p>
            In Ho Chi Minh’s thought, <strong>great national unity</strong> is a long-term and consistent strategy of the Vietnamese revolution. Policies and
            methods of mobilization may be adjusted across stages and groups, but the line of great unity must never change because it is decisive for
            success or failure.
          </p>

          <div className="quote-section">
            <blockquote>
              <p>
                “History teaches us this lesson: When our people are united as one, our country will gain independence and freedom. Conversely, when our
                people are not united, we will be invaded by foreign powers.”
              </p>
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

          <h2 id="truths">Truth-like principles on the strength of unity</h2>
          <ul>
            <li>“Unity is our strength.”</li>
            <li>“Unity is an invincible force enabling us to overcome difficulties and achieve victory.”</li>
            <li>“Unity is strength; unity is victory.”</li>
            <li>“Unity is strength and the key to success.”</li>
            <li>
              “There is now one very important point, which is also the fundamental point… That point is unity.”
            </li>
          </ul>

          <div className="callout info">
            <strong>Quick note</strong>
            <p style={{ margin: '6px 0 0' }}>
              The “fundamental point” emphasizes that effective unity generates many positive outcomes across all work.
            </p>
          </div>

          <h2 id="poem">A concise conclusion</h2>
          <p style={{ whiteSpace: 'pre-line' }}>
            Unity, unity, great unity\nSuccess, success, great success
          </p>

          <div className="callout info">
            <strong>Source notes</strong>
            <p style={{ margin: '6px 0 0' }}>
              For background and context on “Unity, unity, great unity…”, see{' '}
              <a href="https://mattran.org.vn/hoat-dong/ngay-2541961-tai-dai-hoi-dai-bieu-mat-tran-to-quoc-viet-nam-lan-thu-ii-bac-ho-can-dan-doan-ket-doan-ket-dai-doan-ket-43601.html" target="_blank" rel="noreferrer">
                mattran.org.vn
              </a>{' '}
              and{' '}
              <a href="https://www.qdnd.vn/tu-lieu-ho-so/ngay-nay-nam-xua/ngay-25-4-1961-bac-ho-can-dan-doan-ket-doan-ket-dai-doan-ket-692103" target="_blank" rel="noreferrer">
                qdnd.vn
              </a>.
            </p>
          </div>

          <div className="quote-section">
            <blockquote>
              <p>
                “There is now one very important point, which is also the fundamental point… That point is unity.”
              </p>
              <cite>
                — Ho Chi Minh •{' '}
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

          <h2>Video sources (official pages)</h2>
          <p>
            For copyright and authenticity, the safest approach is to <strong>link/embed the original official pages</strong>.
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
              Nhan Dan special page: “Chủ tịch Hồ Chí Minh và tư tưởng đại đoàn kết toàn dân tộc” —{' '}
              <a href="https://hochiminh.nhandan.vn/video-chu-tich-ho-chi-minh-va-tu-tuong-dai-doan-ket-toan-dan-toc-1932.html" target="_blank" rel="noreferrer">hochiminh.nhandan.vn</a>
            </li>
            <li>
              Vietnam Fatherland Front video library: “Đại đoàn kết – Cội nguồn sức mạnh dân tộc” —{' '}
              <a href="https://mattran.org.vn/thu-vien-video/phim-tai-lieu-dai-doan-ket-coi-nguon-suc-manh-dan-toc-57380.html" target="_blank" rel="noreferrer">mattran.org.vn</a>
            </li>
          </ul>

          <div className="callout">
            <strong>Next</strong>
            <p style={{ margin: '6px 0 0' }}>
              See also: <a href="/primary-task/en">Great unity as the primary objective and task</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StrategicRoleEn;
