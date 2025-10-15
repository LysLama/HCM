import React from 'react';
import '../../styles/Section.css';

const Chapter2MoneyEn = () => {
  return (
    <div className="page-container">
      <header className="section-hero">
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Chapter 2 • Money</h1>
      </header>
      <main className="section-main-content">
        {/* Anchor nav */}
        <nav className="anchor-nav" aria-label="On-page navigation">
          <a href="#origin">Origins & nature</a>
          <a href="#functions">Functions</a>
          <a href="#equations">Circulation laws</a>
          <a href="#modern">Modern notes</a>
          <a href="#videos">Videos</a>
        </nav>

        {/* Two-column layout */}
        <div className="two-col">
          <article className="col-main content-text">
            <h2>I. Marx’s theory of commodity production and the commodity</h2>
            <h3 id="origin">1) Money — Origins & nature</h3>
            <p>
              Goal: grasp the <strong>origins</strong>, <strong>nature</strong> and <strong>functions</strong> of money from Marxian political economy, then link to modern context
              (fiat money, digital payments). The content below is a concise <em>synthesis–reinterpretation</em> of the course material.
            </p>

            <h3>Origins (compressed timeline)</h3>
            <ol>
              <li><strong>Simple form of value</strong>: direct barter between goods, random and local.</li>
              <li><strong>Expanded form</strong>: one good expresses its value in <em>many</em> other goods (ratios not stable).</li>
              <li><strong>General form</strong>: many goods refer to <em>one</em> general equivalent (varies by region).</li>
              <li><strong>Money form</strong>: historically, <strong>gold</strong> becomes the <strong>general equivalent</strong> → money emerges.</li>
            </ol>

            <h3>Nature</h3>
            <ul>
              <li>Money is a <strong>special commodity</strong> – the <em>money-form of value</em>, a universal power of exchange.</li>
              <li>It reflects <strong>social labour</strong> congealed in commodities and the <strong>relations</strong> among producers–exchangers.</li>
              <li>In modern settings, <em>fiat</em> and <em>electronic</em> money no longer tie to gold yet still perform the core functions.</li>
            </ul>

            <h3 id="functions">5 functions (by scenario)</h3>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'12px'}}>
              <div className="callout info">
                <strong>Measure of value</strong>
                <p style={{margin:'6px 0 0'}}>Expresses value as <em>price</em>; influenced by commodity value, money value and supply–demand.</p>
              </div>
              <div className="callout">
                <strong>Medium of circulation</strong>
                <p style={{margin:'6px 0 0'}}>Intermediates exchange, separating buying and selling in time/space.</p>
              </div>
              <div className="callout">
                <strong>Store of value</strong>
                <p style={{margin:'6px 0 0'}}>Withdrawn when production shrinks; re-enters when circulation expands.</p>
              </div>
              <div className="callout">
                <strong>Means of payment</strong>
                <p style={{margin:'6px 0 0'}}>Debt settlement, credit purchase; includes book money, bank accounts, e-money.</p>
              </div>
              <div className="callout">
                <strong>World money</strong>
                <p style={{margin:'6px 0 0'}}>International purchasing and settlement; historically gold and widely accepted currencies.</p>
              </div>
            </div>

            <h3 id="equations">Law of money circulation (formulas & meaning)</h3>
            <div className="card">
              <h4>General principle</h4>
              <p><code>M = (P × Q) / V</code></p>
              <p>M: money needed; P: price level; Q: volume of goods/services; V: velocity of money.</p>
              <p>Implication: M ∝ (P×Q) and M ∝ 1/V.</p>
            </div>
            <div className="card">
              <h4>With non‑cash settlement</h4>
              <p><code>M = [P×Q − (G1 + G2) + G3] / V</code></p>
              <p>G1: sales on credit; G2: mutual set‑offs; G3: due payments.</p>
              <p>Excess issuance → money depreciation/inflation ⇒ needs issuance discipline.</p>
            </div>

            <h3 id="modern">Quick notes</h3>
            <ul>
              <li>Prices <em>fluctuate around</em> values under <strong>supply–demand</strong>.</li>
              <li>Non‑cash payments alter <em>velocity</em> and <em>money demand</em> yet not the essence of functions.</li>
            </ul>

            <div className="quote-section">
              <blockquote>
                “A price implies a commodity is exchangeable for money — and must be so exchanged.”
                <cite> — Karl Marx, Capital Vol. I, Ch.3 —
                  <a href="https://www.marxists.org/archive/marx/works/1867-c1/ch03.htm?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Marxists.org</a>
                </cite>
              </blockquote>
            </div>

            <h3 id="videos">Suggested videos</h3>
            <div className="video-section">
              <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GHcFwtLn6Xg" title="Fundamentals of Marx: The Commodity" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <p className="video-caption">Fundamentals of Marx: The Commodity (EN)</p>
              </div>
              <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/V2_8rVtaAwU" title="Capital Made Easy (1): Commodities and Money" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <p className="video-caption">Capital (Marx) Made Easy (1): Commodities and Money (EN)</p>
              </div>
              <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zwuMrd_Hgww" title="Reading Capital Vol I with David Harvey – Class 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <p className="video-caption">Reading Capital Vol I with David Harvey – Class 2 (EN)</p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="col-side">
            <div className="side-card sticky">
              <h4>CTA</h4>
              <p>Jump to formulas & timeline or print the page (Ctrl+P) for offline study.</p>
              <a className="btn-primary" href="#equations">See formulas</a>
            </div>
            <div className="side-card centered">
              <h4>Quick videos</h4>
              <ul>
                <li><a href="https://www.youtube.com/watch?v=081XCThSAA4&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Understanding Capital Ch.3</a></li>
                <li><a href="https://www.youtube.com/watch?v=mB5lMud3gtA&utm_source=chatgpt.com" target="_blank" rel="noreferrer">David Harvey Class 3</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Chapter2MoneyEn;
