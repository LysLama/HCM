import React from 'react';
import '../../styles/Section.css';
import futureImg from '../../assets/img/future.jpg';

export default function FutureEn() {
  return (
    <div className="page-container">
      <header className="section-hero" style={{ backgroundImage: `url(${futureImg})` }}>
        <div className="hero-overlay"></div>
        <h1 className="section-hero-title">Possibility & Limits of a Non‑Antagonistic Society</h1>
      </header>
      <main className="section-main-content">
        <div className="content-text">
          <h3>1. Preconditions for transcending antagonistic classes</h3>
          <p><strong>Economic basis:</strong> Social ownership of key means of production and advanced productive forces undermine class reproduction.</p>
          <p><strong>New relations:</strong> Cooperation, equality and solidarity replace exploitation.</p>

          <h3>2. Phases of future development</h3>
          <p><strong>Socialist phase:</strong> "From each according to ability, to each according to work." Distribution still differentiated.</p>
          <p><strong>Communist phase:</strong> "From each according to ability, to each according to need." Abundance dissolves scarcity constraints.</p>

          <h3>3. New historical motives</h3>
          <ul>
            <li>Scientific–technological progress</li>
            <li>Human–nature contradiction (ecology, sustainability)</li>
            <li>Innovation vs. stagnation</li>
            <li>Needs vs. finite resources</li>
          </ul>

          <section>
            <h3>4. Transition mechanisms</h3>
            <ul>
              <li>Proletarian political rule as transitional safeguard.</li>
              <li>All‑round development of productive forces and civic culture.</li>
              <li>Continued struggle on economic, political and ideological fronts in adjusted forms.</li>
            </ul>
          </section>

          <h3>5. Challenges</h3>
            <p><strong>Long process:</strong> Transformation is gradual and contradictory.</p>
            <p><strong>Persistent contradictions:</strong> Shift from antagonistic to non‑antagonistic forms.</p>

          <section>
            <h3>6. History beyond antagonism</h3>
            <p>History does not "end"; it reorients toward cooperative creativity and managed contradictions.</p>
            <div className="callout success"><strong>Perspective:</strong> Pre‑history closes; conscious regulation of conditions opens a more human epoch.</div>
          </section>

          <section>
            <h3>7. Classic quotations</h3>
            <div className="quote-section">
              <blockquote><p>"In communist society... nobody has one exclusive sphere of activity."</p><cite>— Marx & Engels, German Ideology</cite></blockquote>
              <blockquote><p>"From each according to his ability, to each according to his needs."</p><cite>— Marx, Critique of the Gotha Programme</cite></blockquote>
              <blockquote><p>"The state becomes unnecessary."</p><cite>— Engels, Socialism: Utopian and Scientific</cite></blockquote>
              <blockquote><p>"The proletariat will use its political supremacy to wrest... all capital from the bourgeoisie."</p><cite>— Manifesto (1848)</cite></blockquote>
            </div>
          </section>

          <h3>8. Illustrative efforts</h3>
          <p><strong>USSR:</strong> Early industrial & educational advances.</p>
          <p><strong>Modern China:</strong> Market socialism hybrid experimentation.</p>
          <p><strong>Cuba:</strong> Universal health & education achievements under constraint.</p>
        </div>
      </main>
    </div>
  );
}
