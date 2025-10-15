import React from 'react';
import '../../styles/Section.css';

const Chapter2MarketEconomyEn = () => {
  return (
    <div className="page-container">
      <header className="section-hero">
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Chapter 2 • Market economy: principles and the role of the state</h1>
      </header>
      <main className="section-main-content">
        {/* Anchor nav */}
        <nav className="anchor-nav" aria-label="On-page navigation">
          <a href="#principles">A. Core principles</a>
          <a href="#laws">B. Basic laws</a>
          <a href="#state">C. Role of the state</a>
          <a href="#videos">D. Videos</a>
          <a href="#refs">E. References</a>
        </nav>

        <div className="two-col">
          <article className="col-main content-text">
            <h2>I. Marx’s theory of commodity production and the commodity</h2>
            <h3>4) The market economy</h3>
            <p>
              A <strong>market economy</strong> allocates resources primarily through <strong>markets</strong> and <strong>prices</strong> underpinned by <strong>property rights</strong>, <strong>contracts</strong>, and
              <strong> competition</strong>. The state provides the <strong>legal‑institutional framework</strong> and intervenes to correct <strong>market failures</strong> and ensure <strong>social objectives</strong>.
            </p>

            {/* A. Core principles */}
            <section id="principles">
              <h3>A. Core principles</h3>
              <ul>
                <li><strong>Voluntary exchange</strong> based on property rights and contracts.</li>
                <li><strong>Price mechanism</strong> as information and incentive.</li>
                <li><strong>Competition</strong> fostering efficiency and innovation.</li>
                <li><strong>Rule of law</strong> and institutions enabling trust and coordination.</li>
              </ul>
            </section>

            {/* B. Basic laws */}
            <section id="laws">
              <h3>B. Basic economic laws (in practice)</h3>
              <div className="card-grid">
                <div className="card">
                  <h4>1) Law of value</h4>
                  <p>Prices tend to gravitate around socially necessary costs; deviations guide reallocation.</p>
                </div>
                <div className="card">
                  <h4>2) Law of supply and demand</h4>
                  <p>Price adjusts toward balance between willingness to buy and to sell.</p>
                </div>
                <div className="card">
                  <h4>3) Competition law</h4>
                  <p>Competition disciplines market power and spurs productivity; antitrust policies support it.</p>
                </div>
              </div>

              <div className="quote-section">
                <blockquote>
                  “Wherever there is great property, there is great inequality… Civil government, so far as it is instituted for the security of property, is in reality instituted for the defence of the rich against the poor.”
                  <cite> — Adam Smith, The Wealth of Nations —</cite>
                </blockquote>
              </div>
            </section>

            {/* C. Role of the state */}
            <section id="state">
              <h3>C. Role of the state in a socialist‑oriented market economy</h3>
              <ul>
                <li>Build and enforce <strong>laws/institutions</strong>; protect property and contracts.</li>
                <li>Correct <strong>market failures</strong> (public goods, externalities, information asymmetry, monopoly).</li>
                <li>Provide <strong>macroeconomic stabilization</strong> and <strong>social policies</strong>.</li>
                <li>Guide development toward <strong>strategic priorities</strong> while preserving market dynamism.</li>
              </ul>
            </section>

            {/* D. Videos */}
            <section id="videos">
              <h3>D. Videos</h3>
              <div className="video-section">
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/xtzNaXGZPQg" title="How markets work" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <p className="video-caption">How markets work</p>
                  <p><a href="https://www.youtube.com/watch?v=xtzNaXGZPQg" target="_blank" rel="noreferrer">Open on YouTube</a></p>
                </div>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/1PqqZ0V6qWc" title="Market failures explained" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <p className="video-caption">Market failures explained</p>
                  <p><a href="https://www.youtube.com/watch?v=1PqqZ0V6qWc" target="_blank" rel="noreferrer">Open on YouTube</a></p>
                </div>
              </div>
            </section>

            {/* E. References */}
            <section id="refs">
              <h3>E. References</h3>
              <ul>
                <li>Market economy defined by property rights, contracts, price mechanism, and competition.</li>
                <li>Basic laws: value, supply–demand, and competition as practical tendencies.</li>
                <li>Role of the state in correcting failures and pursuing social goals.</li>
              </ul>
            </section>
          </article>

          <aside className="col-side">
            <div className="side-card sticky">
              <h4>Study plan</h4>
              <p>Review the three basic laws and the state’s role. Watch the videos for intuition.</p>
              <a className="btn-primary" href="#laws">See basic laws</a>
            </div>
            <div className="side-card centered">
              <h4>Quick references</h4>
              <ul>
                <li><a href="https://www.youtube.com/watch?v=xtzNaXGZPQg&utm_source=chatgpt.com" target="_blank" rel="noreferrer">How markets work</a></li>
                <li><a href="https://www.youtube.com/watch?v=1PqqZ0V6qWc&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Market failures</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Chapter2MarketEconomyEn;
