import React from 'react';
import '../../styles/Section.css';

const Chapter2MarketConceptsEn = () => {
  return (
    <div className="page-container">
      <header className="section-hero">
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Chapter 2 • Market: Concepts, Types, Roles</h1>
      </header>
      <main className="section-main-content">
        {/* Anchor nav */}
        <nav className="anchor-nav" aria-label="On-page navigation">
          <a href="#concept">A. Concept</a>
          <a href="#types">B. Types</a>
          <a href="#roles">C. Roles</a>
          <a href="#videos">D. Videos</a>
          <a href="#refs">E. References</a>
        </nav>

        <div className="two-col">
          <article className="col-main content-text">
            <h2>I. Marx’s theory of commodity production and the commodity</h2>
            <h3>3) Market concepts</h3>

            {/* A. Concept */}
            <section id="concept">
              <h3>A. Concept</h3>
              <p>
                A <strong>market</strong> is the <strong>system</strong> of <strong>exchange relations</strong> formed by <strong>buyers and sellers</strong> interacting around <strong>goods/services</strong>, where <strong>prices</strong> emerge as signals.
              </p>
              <p>
                The market is not merely a physical place; it is a <strong>set of relationships</strong> governed by <strong>property rights, contracts, and institutions</strong> that enable voluntary exchange.
              </p>
            </section>

            {/* B. Types */}
            <section id="types">
              <h3>B. Types (by object of exchange)</h3>
              <div className="responsive-table" tabIndex={0} aria-label="Market types table">
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Object</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Goods market</td>
                      <td>Tangible goods</td>
                      <td>Retail, wholesale</td>
                    </tr>
                    <tr>
                      <td>Service market</td>
                      <td>Intangible services</td>
                      <td>Healthcare, education, logistics</td>
                    </tr>
                    <tr>
                      <td>Factor market</td>
                      <td>Inputs to production</td>
                      <td>Labor, capital, land use rights</td>
                    </tr>
                    <tr>
                      <td>Financial market</td>
                      <td>Securities/derivatives</td>
                      <td>Stocks, bonds, options</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="table-hint">Scroll horizontally on small screens.</p>
            </section>

            {/* C. Roles */}
            <section id="roles">
              <h3>C. Market roles</h3>
              <div className="card-grid">
                <div className="card">
                  <h4>1) Information signal</h4>
                  <p>Prices transmit information about scarcity and preferences.</p>
                </div>
                <div className="card">
                  <h4>2) Resource allocation</h4>
                  <p>Incentivizes producers/consumers to adjust output and consumption.</p>
                </div>
                <div className="card">
                  <h4>3) Incentives and innovation</h4>
                  <p>Competition motivates efficiency and innovation.</p>
                </div>
                <div className="card">
                  <h4>4) Integration and expansion</h4>
                  <p>Markets integrate sectors and expand the social division of labor.</p>
                </div>
              </div>

              <div className="quote-section">
                <blockquote>
                  “It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.”
                  <cite> — Adam Smith, The Wealth of Nations —</cite>
                </blockquote>
              </div>
            </section>

            {/* D. Videos */}
            <section id="videos">
              <h3>D. Videos</h3>
              <div className="video-section">
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/N3B55bAnkKs" title="Market and price mechanism" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <p className="video-caption">Market and price mechanism</p>
                  <p><a href="https://www.youtube.com/watch?v=N3B55bAnkKs" target="_blank" rel="noreferrer">Open on YouTube</a></p>
                </div>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/NE7bXUu9V9s" title="Intro to financial markets" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <p className="video-caption">Intro to financial markets</p>
                  <p><a href="https://www.youtube.com/watch?v=NE7bXUu9V9s" target="_blank" rel="noreferrer">Open on YouTube</a></p>
                </div>
              </div>
            </section>

            {/* E. References */}
            <section id="refs">
              <h3>E. References</h3>
              <ul>
                <li>Definition of market as a set of relations between buyers and sellers, not just a place.</li>
                <li>Classification by exchange object: goods, services, factors, financial instruments.</li>
                <li>Roles: information, allocation, incentives, integration.</li>
              </ul>
            </section>
          </article>

          <aside className="col-side">
            <div className="side-card sticky">
              <h4>Study tips</h4>
              <p>Start with concepts, then skim types and roles. Watch the two videos.</p>
              <a className="btn-primary" href="#types">Jump to types</a>
            </div>
            <div className="side-card centered">
              <h4>Quick links</h4>
              <ul>
                <li><a href="https://www.youtube.com/watch?v=N3B55bAnkKs&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Price mechanism</a></li>
                <li><a href="https://www.youtube.com/watch?v=NE7bXUu9V9s&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Financial markets</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Chapter2MarketConceptsEn;
