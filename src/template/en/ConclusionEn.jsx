import React from 'react';
import '../../styles/Section.css';
import conclusionImg from '../../assets/img/conclusion.jpg';

export default function ConclusionEn() {
  return (
    <div className="page-container">
      <header className="section-hero" style={{ backgroundImage: `url(${conclusionImg})` }}>
        <div className="hero-overlay"></div>
        <h1 className="section-hero-title">Conclusion</h1>
      </header>
      <main className="section-main-content">
        <div className="content-text">
          <h3>1. Key syntheses</h3>
          <p><strong>Historical role:</strong> Class struggle acts as a direct dynamic force in antagonistic societies, enabling the supersession of obsolete relations.</p>
          <p><strong>Historical limitation:</strong> Its role is epochal, not eternal.</p>

          <h3>2. Future horizon</h3>
          <p><strong>No end of history:</strong> A classless society inaugurates a qualitatively new developmental stage.</p>
          <p><strong>Dynamic shift:</strong> Motives relocate toward innovation, human–nature metabolic balance, cultural advancement.</p>

          <h3>3. Classic quotations</h3>
          <div className="quote-section">
            <blockquote><p>"The realm of freedom begins where labour determined by necessity and external expediency ends."</p><cite>— Marx, Capital III</cite></blockquote>
            <blockquote><p>"Pre‑history of human society will close."</p><cite>— Marx, 1859 Preface</cite></blockquote>
            <blockquote><p>"The free development of each is the condition for the free development of all."</p><cite>— Marx & Engels, Manifesto</cite></blockquote>
          </div>

          <h3>4. Contemporary relevance</h3>
          <p><strong>Research:</strong> Clarifies structural dynamics.</p>
          <p><strong>Policy:</strong> Informs equitable and sustainable frameworks.</p>
          <p><strong>Human development:</strong> Points toward holistic emancipation.</p>

          <section>
            <h3>5. Integrated message</h3>
            <p>Class ↔ Nation ↔ Future form a dialectical triad: struggle, alliance and developmental transition.</p>
            <div className="grid two-cols gap-md">
              <div className="card">
                <h4>Quick review</h4>
                <ul>
                  <li>State Lenin’s definition of class in your own words.</li>
                  <li>Distinguish strategic vs. tactical alliance.</li>
                  <li>Why is political struggle the highest form?</li>
                </ul>
              </div>
              <div className="card">
                <h4>Extended reflection</h4>
                <ul>
                  <li>Which non‑antagonistic contradictions may dominate a post‑capitalist era?</li>
                  <li>Design 5 quiz items on forms of struggle.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="quote-section">
            <h3>6. Closing quotations</h3>
            <blockquote><p>"Class struggle is a crucial direct motor — but never the only one."</p><cite>— Synthesized from classics</cite></blockquote>
            <blockquote><p>"The free development of each is the condition for the free development of all."</p><cite>— Manifesto</cite></blockquote>
          </section>
        </div>
      </main>
    </div>
  );
}
