import React from 'react';
import '../../styles/Section.css';
import roleImg from '../../assets/img/role.jpg';

export default function RoleEn() {
  return (
    <div className="page-container">
      <header className="section-hero" style={{ backgroundImage: `url(${roleImg})` }}>
        <div className="hero-overlay"></div>
        <h1 className="section-hero-title">Historical Role of Class Struggle</h1>
      </header>
      <main className="section-main-content">
        <div className="content-text">
          <h3>1. Driver of historical development</h3>
          <p>• "The history of all hitherto existing society is the history of class struggles." — Manifesto (1848).</p>
          <p>• Struggle propels transitions among socio‑economic formations: slavery → feudalism → capitalism → socialism.</p>

          <h3>2. Dual impact</h3>
          <p>• <strong>Progressive:</strong> Breaks obsolete relations, liberates productive forces.</p>
          <p>• <strong>Costly:</strong> Entails conflict, dislocation, suffering.</p>

          <h3>3. Synthesis</h3>
          <p>Class struggle is a direct motive force but not the only one; technology, scientific progress and cooperation also matter.</p>

          <h3>4. Classic quotations</h3>
          <div className="quote-section">
            <blockquote><p>"Philosophers have only interpreted the world... the point is to change it."</p><cite>— Marx, Theses on Feuerbach (1845)</cite></blockquote>
            <blockquote><p>"It is not the consciousness of men that determines their being, but their social being..."</p><cite>— Marx, 1859 Preface</cite></blockquote>
            <blockquote><p>"Revolution is the festival of the oppressed."</p><cite>— Lenin, 1917</cite></blockquote>
            <blockquote><p>"Force is the midwife of every old society pregnant with a new one."</p><cite>— Marx, Capital I</cite></blockquote>
          </div>

            <h3>5. Academic videos</h3>
            <div className="video-section">
              <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/uvpJKFsxCmc" title="Historical Role 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className="video-caption">Struggle as developmental engine</p>
              </div>
              <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/sv_CMemPvwo" title="Historical Role 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className="video-caption">Social transformation via conflict</p>
              </div>
              <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/OvErzcaDhg0" title="Historical Role 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className="video-caption">Historical impacts</p>
              </div>
            </div>

            <h3>6. Historical cases</h3>
            <p><strong>Spartacus rebellion:</strong> Challenged Roman slave system.</p>
            <p><strong>German Peasants' War (1524–1525):</strong> Early anti‑feudal movement.</p>
            <p><strong>Paris Commune (1871):</strong> First proletarian political experiment.</p>
            <p><strong>Chinese Revolution (1949):</strong> Agrarian‑worker alliance forging a new state.</p>
        </div>
      </main>
    </div>
  );
}
