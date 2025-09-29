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
          {/* New Sections: Conditions / Classification / Alliance */}
          <h3>2. Conditions / origins of classes</h3>
          <ul className="bullet-list">
            <li><strong>Underlying (deep) cause:</strong> Rising labour productivity generates a <strong>surplus product</strong> → possibility of <strong>appropriating</strong> the portion produced by others.</li>
            <li><strong>Direct cause:</strong> Establishment of <strong>private ownership of the means of production</strong> → divergence of interests and formation of opposed class positions.</li>
          </ul>
          <div className="note-block">
            <blockquote>
              <p><strong>Note:</strong> The <strong>social division of labour</strong> (especially mental vs. manual) <em>accelerates</em> stratification but is <em>not</em> the decisive cause by itself.</p>
            </blockquote>
          </div>

          <h3>3. Classification of classes</h3>
          <ul className="bullet-list">
            <li><strong>Basic (fundamental) classes:</strong> Shape the core contradiction of a given <strong>socio‑economic formation</strong>; directly tied to <strong>ownership relations</strong> and <strong>position</strong> in production.</li>
            <li><strong>Non‑basic / intermediate classes (strata):</strong> Middle layers; do not define the fundamental contradiction yet exert socio‑political influence.</li>
          </ul>
          <h4>Examples by formation</h4>
          <div className="responsive-table">
            <table>
              <thead>
                <tr>
                  <th>Formation</th>
                  <th><strong>Basic classes</strong></th>
                  <th><strong>Non‑basic / intermediate</strong> (examples)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Slave-owning</strong></td>
                  <td><strong>Slave owners ↔ Slaves</strong></td>
                  <td>Free artisans, merchants</td>
                </tr>
                <tr>
                  <td><strong>Feudal</strong></td>
                  <td><strong>Landlords / Feudal lords ↔ Serf peasants</strong></td>
                  <td>Artisans, traders, officials, clergy, scholars</td>
                </tr>
                <tr>
                  <td><strong>Capitalist</strong></td>
                  <td><strong>Bourgeoisie ↔ Proletariat (wage workers)</strong></td>
                  <td>Petty bourgeois, peasants, small proprietors, salaried staff, intelligentsia</td>
                </tr>
                <tr>
                  <td><strong>Transition to socialism</strong></td>
                  <td><strong>Working class ↔ Peasantry</strong> <em>(non‑antagonistic)</em></td>
                  <td>Intelligentsia and other labouring strata</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>4. Class alliance</h3>
          <ul className="bullet-list">
            <li><strong>Concept:</strong> Coordinated action among classes / strata sharing <strong>fundamentally convergent interests</strong> in a historical phase.</li>
            <li><strong>Purpose:</strong> Concentrate forces to <strong>resolve the fundamental contradiction</strong> (overthrow the old ruling class, build a new order; under socialism: construction & defense).</li>
            <li><strong>Principles:</strong> Shared strategic goal; respect legitimate interests; <strong>working-class leadership core</strong>; tactical flexibility.</li>
            <li><strong>Typical example:</strong> <strong>Worker–peasant–intelligentsia alliance</strong> (political foundation of the socialist state); broad national united front in national–democratic revolutions.</li>
          </ul>

          <h3>5. Nature of class struggle</h3>
          <p>• <strong>Inevitability:</strong> Rooted in irreconcilable interests between exploiting and exploited classes.</p>
          <p>• <strong>Definition:</strong> Struggle among large social groups whose fundamental interests oppose within a given mode of production.</p>
          <p>• <strong>Essence:</strong> The organized resistance of oppressed labouring masses against exploiting classes.</p>

          <h3>6. Main forms</h3>
          <ul>
            <li><strong>Economic:</strong> Wages, conditions, ownership and distribution.</li>
            <li><strong>Political:</strong> Seizing and using state power.</li>
            <li><strong>Ideological–cultural:</strong> Defending or challenging dominant worldviews.</li>
          </ul>

          <section>
            <h3>7. Marx’s three key theses (1852)</h3>
            <ol>
              <li><strong>Historical character:</strong> Classes arise and vanish with productive epochs.</li>
              <li><strong>Revolutionary objective:</strong> Struggle tends toward proletarian political rule.</li>
              <li><strong>Future perspective:</strong> That rule is a transition toward a classless society.</li>
            </ol>
            <div className="callout info">
              <strong>Key idea:</strong> Ultimate goal is not replacing one ruling class with another but abolishing the conditions reproducing class antagonism.
            </div>
          </section>

          <h3>8. Classic quotations</h3>
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

          <h3>9. Academic videos</h3>
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
          <h3>10. Historical examples</h3>
          <p><strong>French Revolution (1789):</strong> Bourgeoisie vs. feudal aristocracy.</p>
          <p><strong>October Revolution (1917):</strong> Proletariat seizes power, establishing first socialist state.</p>
          <p><strong>19th–20th c. labour movements:</strong> 8‑hour day, social insurance gains.</p>
        </div>
      </main>
    </div>
  );
}
