import React from 'react';
import '../../styles/Section.css';
import theoryImg from '../../assets/img/theory.jpg';

export default function TheoryEn() {
  return (
    <div className="page-container">
      <header className="section-hero" style={{ backgroundImage: `url(${theoryImg})` }}>
        <div className="hero-overlay"></div>
        <h1 className="section-hero-title">Marxist–Leninist Theory of Class & Class Struggle</h1>
      </header>
      <main className="section-main-content">
        <div className="content-text">
          <h3>1. Concept of class</h3>
          <p>
            • According to Marxism–Leninism, classes are large groups of people differing by their position within a definite system of social production, their relation to the means of production, their role in the social organization of labour, and the mode and share of the social wealth they obtain.
          </p>
          <div className="quote-section">
            <blockquote>
              <p>"Classes are large groups of people differing by their place in a historically determined system of social production... and therefore differing by the share of social wealth they obtain."</p>
              <cite>— V.I. Lenin, <em>Great Initiative</em></cite>
            </blockquote>
          </div>
          <p>• <strong>Conditions for emergence:</strong> Division of labour and private ownership of essential means of production.</p>

          <h3>2. Nature of class struggle</h3>
          <p>• <strong>Inevitability:</strong> Rooted in irreconcilable interests between exploiting and exploited classes.</p>
          <p>• <strong>Definition:</strong> Struggle among large social groups whose fundamental interests oppose within a given mode of production.</p>
          <p>• <strong>Essence:</strong> The organized resistance of oppressed labouring masses against exploiting classes.</p>

          <h3>3. Main forms</h3>
          <ul>
            <li><strong>Economic:</strong> Wages, conditions, ownership and distribution.</li>
            <li><strong>Political:</strong> Seizing and using state power.</li>
            <li><strong>Ideological–cultural:</strong> Defending or challenging dominant worldviews.</li>
          </ul>

          <section>
            <h3>4. Marx’s three key theses (1852)</h3>
            <ol>
              <li><strong>Historical character:</strong> Classes arise and vanish with productive epochs.</li>
              <li><strong>Revolutionary objective:</strong> Struggle tends toward proletarian political rule.</li>
              <li><strong>Future perspective:</strong> That rule is a transition toward a classless society.</li>
            </ol>
            <div className="callout info">
              <strong>Key idea:</strong> Ultimate goal is not replacing one ruling class with another but abolishing the conditions reproducing class antagonism.
            </div>
          </section>

          <h3>5. Classic quotations</h3>
          <div className="quote-section">
            <blockquote>
              <p>"The history of all hitherto existing society is the history of class struggles."</p>
              <cite>— Marx & Engels, Communist Manifesto (1848)</cite>
            </blockquote>
            <blockquote>
              <p>"Workers of the world have nothing to lose but their chains."</p>
              <cite>— Marx & Engels, Communist Manifesto (1848)</cite>
            </blockquote>
            <blockquote>
              <p>"The state is a special organization of force: an organization of violence for the suppression of some class."</p>
              <cite>— V.I. Lenin, State and Revolution (1917)</cite>
            </blockquote>
          </div>

          <h3>6. Academic videos</h3>
          <div className="video-section">
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/GL4o_umfVWM" title="Foundational Theory 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <p className="video-caption">Foundational concepts of class & struggle</p>
            </div>
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/v0PE6y-fybA" title="Foundational Theory 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <p className="video-caption">Defining class in Marxist philosophy</p>
            </div>
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/rMwMJCqCKhc" title="Foundational Theory 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <p className="video-caption">Modern relevance of class struggle</p>
            </div>
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/qVr_qV9nRB8" title="Lenin Definition" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <p className="video-caption">Lenin’s definition analyzed</p>
            </div>
          </div>

          <section>
            <h3>7. Class & nation relationship</h3>
            <p><strong>Class essence:</strong> Historical economic category; not reducible to pure economics.</p>
            <p><strong>Unity:</strong> At certain stages, labouring classes’ interests fuse with national liberation.</p>
            <ul>
              <li><strong>Strategic alliances:</strong> Long-term shared fundamental interests.</li>
              <li><strong>Tactical alliances:</strong> Temporary, immediate objectives.</li>
              <li><strong>Dialectic:</strong> Class struggle and alliance-building co-produce historical force.</li>
            </ul>
          </section>

          <h3>8. Historical examples</h3>
          <p><strong>French Revolution (1789):</strong> Bourgeoisie vs. feudal aristocracy.</p>
          <p><strong>October Revolution (1917):</strong> Proletariat seizes power, establishing first socialist state.</p>
          <p><strong>19th–20th c. labour movements:</strong> 8‑hour day, social insurance gains.</p>
        </div>
      </main>
    </div>
  );
}
