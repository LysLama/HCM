import React from 'react';
import '../../styles/Section.css';

const Chapter2ServicesEn = () => {
  return (
    <div className="page-container">
      <header className="section-hero">
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Chapter 2 • Services and Exchange Relations</h1>
      </header>
      <main className="section-main-content">
        {/* Anchor nav */}
        <nav className="anchor-nav" aria-label="On-page navigation">
          <a href="#services">A. Services</a>
          <a href="#exchange">B. Exchange relations</a>
          <a href="#compare">C. Comparison</a>
          <a href="#videos">D. Videos</a>
          <a href="#sources">E. Sources</a>
        </nav>

        <div className="two-col">
          <article className="col-main content-text">
            <h2>I. Marx’s theory of commodity production and the commodity</h2>
            <h3>2) Services and special exchange relations today</h3>
            <p>
              This section clarifies <strong>services</strong> as an <em>intangible</em> form of commodity and analyzes several <strong>special exchange relations</strong> in modern economies. The content is a
              <em> synthesized explanation</em> based on the course text and practical context.
            </p>

            {/* A. Services */}
            <section id="services">
              <h3>A. Services</h3>
              <h4>1) Concept & nature</h4>
              <p>
                <strong>Services</strong> are <strong>intangible commodities</strong> produced by <strong>expenditure of labour</strong> to <strong>satisfy needs</strong>, so their <strong>value</strong> comes from <strong>social labour</strong>.
                In Marx’s time, services were less developed, but by his logic, <strong>services are commodities</strong> (for production/for consumption). Services are <strong>non‑storable</strong> and
                <strong>co‑produced and consumed</strong>; today, with <strong>division of labour</strong> and <strong>technology</strong>, services play an increasingly <strong>central role</strong>.
              </p>
              <div className="callout info">
                <strong>Modern marketing view</strong>
                <p style={{margin:'6px 0 0'}}>
                  Typical features: <strong>intangibility, inseparability</strong> (simultaneous production–consumption), <strong>heterogeneity, perishability</strong>. See JoVE, Study.com, YouTube for quick primers.
                  (<a href="https://www.jove.com/business-education/v/16648/services-marketing-i?utm_source=chatgpt.com" target="_blank" rel="noreferrer">JoVE</a>)
                </p>
              </div>

              <h4>2) Practical significance today</h4>
              <p>
                Digitization expands services (neobanks, logistics, cloud computing…), reinforcing their <strong>central position</strong> in modern economic structures.
              </p>
            </section>

            {/* B. Special exchange relations */}
            <section id="exchange">
              <h3>B. Exchange relations for factors distinct from ordinary commodities</h3>
              <p>
                These are <strong>quasi‑commodity factors</strong> (priced, tradable) but <strong>not produced via direct labour</strong> like ordinary commodities; without clear distinctions, one might
                mistakenly think Marx’s commodity theory is outdated.
              </p>

              <h4>1) Land use rights (LUR)</h4>
              <p>
                The transaction is for <strong>use rights</strong>, <strong>not land itself</strong>. The “<strong>commodity‑like</strong>” attribute lies in the <strong>rights bundle</strong> (term, purpose, transfer…), not created by direct labour like a good.
                Thus, distinguish carefully when analyzing <strong>price</strong>, <strong>benefits</strong> and <strong>policy</strong>.
              </p>
              <p>
                <em>Video</em>: ownership vs use, rights–obligations of users. (YouTube)
              </p>

              <h4>2) Securities, warrants, and other negotiable instruments (derivatives; “fictitious capital”)</h4>
              <p>
                <strong>Stocks/bonds…</strong> are <strong>tradable</strong> and yield <strong>income</strong>, forming the <strong>securities market</strong>—distinct from the market for tangible goods/services.
              </p>
              <p>
                For Marx, this is <strong>“fictitious capital”</strong>: meaningful only when <strong>tied to real productive entities</strong>; a certificate without a real base is meaningless.
              </p>
              <p>
                <strong>Gains/losses</strong> are largely <strong>transfers of money</strong>; <strong>prices</strong> reflect <strong>future expectations</strong>, not direct “<strong>labour‑value</strong>”. Societies cannot prosper merely by trading papers.
              </p>
              <p>
                <em>Classic effect</em>: <strong>higher interest → lower prices of fictitious capital</strong>.
              </p>
              <div className="quote-section">
                <blockquote>
                  “Fictitious capital, interest‑bearing paper… circulates on the stock exchange as money‑capital. Its price falls with rising interest.”
                  <cite> — Karl Marx, Capital Vol. III, Ch.30 —
                    <a href="https://www.marxists.org/archive/marx/works/1894-c3/ch30.htm?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Marxists.org</a>
                  </cite>
                </blockquote>
              </div>
            </section>

            {/* C. Comparison table */}
            <section id="compare">
              <h3>C. Summary comparison</h3>
              <div className="responsive-table" tabIndex={0} aria-label="Comparison table">
                <table>
                  <thead>
                    <tr>
                      <th>Criteria</th>
                      <th>Ordinary goods</th>
                      <th>Services</th>
                      <th>Other factors (non‑ordinary)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Form</td>
                      <td>Tangible</td>
                      <td>Intangible</td>
                      <td>Rights/derivatives (LUR, securities…)</td>
                    </tr>
                    <tr>
                      <td>Direct labour creation</td>
                      <td>Yes</td>
                      <td>Yes (but co‑produced/consumed)</td>
                      <td><strong>No</strong> (as for goods); mostly <strong>claims/rights</strong> tied to real entities</td>
                    </tr>
                    <tr>
                      <td>Storable</td>
                      <td>Possible</td>
                      <td><strong>No</strong></td>
                      <td>Not applicable</td>
                    </tr>
                    <tr>
                      <td>Price reflects</td>
                      <td><strong>Value</strong> (socially necessary labour time)</td>
                      <td>Costs + tech + experience quality</td>
                      <td><strong>Expectations/yield/regulation</strong> (not direct labour measure)</td>
                    </tr>
                    <tr>
                      <td>Role</td>
                      <td>Material needs</td>
                      <td>Material & experiential needs</td>
                      <td>Capital allocation, rights, risk; links to <strong>real production</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="table-hint">Drag horizontally to view the full table on small screens.</p>
            </section>

            {/* D. Videos */}
            <section id="videos">
              <h3>D. Videos & links</h3>
              <div className="video-section">
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/BJtXGzAThqY" title="Service marketing characteristics" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <p className="video-caption">Service marketing characteristics (EN)</p>
                </div>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/_E_LNUDXjW8" title="Anti-Capitalist Chronicles: Fictitious Capital" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <p className="video-caption">Anti-Capitalist Chronicles: Fictitious Capital (EN)</p>
                </div>
              </div>
            </section>

            {/* E. Sources */}
            <section id="sources">
              <h3>E. Core references from the textbook</h3>
              <ul>
                <li>Service: intangibility; simultaneous production–consumption; growing role in modern economies.</li>
                <li>Marx’s framing: services as commodities (for production/consumption).</li>
                <li>“Non‑ordinary” factors: distinction criteria; <strong>LUR</strong>; securities/warrants as <strong>derivatives</strong> (“fictitious capital”).</li>
              </ul>
            </section>
          </article>

          <aside className="col-side">
            <div className="side-card sticky">
              <h4>CTA</h4>
              <p>Skim the comparison or jump to videos & sources.</p>
              <a className="btn-primary" href="#compare">View comparison</a>
            </div>
            <div className="side-card centered">
              <h4>Quick videos</h4>
              <ul>
                <li><a href="https://www.youtube.com/watch?v=BJtXGzAThqY&vl=en&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Service marketing</a></li>
                <li><a href="https://www.youtube.com/watch?v=_E_LNUDXjW8&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Fictitious Capital</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Chapter2ServicesEn;
