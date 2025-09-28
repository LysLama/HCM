import React from 'react';
import '../../styles/Section.css';
import conclusionImg from '../../assets/img/conclusion.jpg';

// New analytical conclusion mirroring Vietnamese structure; only closing quotes retained.
export default function ConclusionEn() {
  return (
    <div className="page-container">
      <header
        className="section-hero"
        style={{ backgroundImage: `url(${conclusionImg})` }}
      >
        <div className="hero-overlay"></div>
        <h1 className="section-hero-title">Conclusion</h1>
      </header>
      <main className="section-main-content">
        <div className="content-text">
          {/* 1. Historical possibility of ending antagonistic class struggle */}
          <section>
            <h2>1. Historical possibility of transcending antagonistic class conflict</h2>
            <p>
              Marx and Engels treated <em>class struggle</em> not as an eternal law but
              as a historically bounded form of social contradiction bound to
              private property and structural divergence of fundamental interests.
              When the conditions that reproduce antagonism (private appropriation
              of decisive means of production, alienated labour, political
              oppression) are progressively dismantled, the <strong>antagonistic</strong> form
              can recede, giving way to predominantly <strong>non‑antagonistic</strong>
              developmental tensions.
            </p>
            <ul>
              <li><strong>Material premise:</strong> Productivity high enough to relax absolute scarcity constraints broadly.</li>
              <li><strong>Social premise:</strong> Expansion of social/community ownership of major productive assets; contraction of privileges rooted in ownership of others' labour.</li>
              <li><strong>Political premise:</strong> Transformation of the state from coercive class instrument toward coordinating public institution.</li>
              <li><strong>Cultural premise:</strong> Generalized education, scientific literacy, civic competence and cooperative creative capacity.</li>
            </ul>
            <p>
              Under such convergence, class struggle does not vanish from memory;
              it loses inevitability as the perpetual lever of systemic change.
              Transitional society opens capacity to manage contradictions through
              democratic, scientific and socialist rule‑of‑law mediation.
            </p>
          </section>

            {/* 2. Does history stop? */}
          <section>
            <h2>2. Does history end?</h2>
            <p>
              The attenuation of antagonistic class forms does not spell an “end of
              history”; instead it inaugurates a qualitatively new <strong>phase</strong> in which
              humanity deliberately restructures its conditions of existence at a
              planetary scale.
            </p>
            <p>Emergent axial dynamics likely include:</p>
            <ol>
              <li><strong>Human ↔ Nature:</strong> Regulating material–energy metabolism sustainably; repairing ruptures induced by capital’s logic.</li>
              <li><strong>Knowledge ↔ Innovation:</strong> Tension between techno‑scientific potential and lagging ethical / legal organizational forms.</li>
              <li><strong>Progressive ↔ Backward:</strong> Regional/social developmental gaps and the mandate that “no one is left behind.”</li>
              <li><strong>Infinite needs ↔ Finite resources:</strong> Driving circular economy, product life‑cycle redesign and sufficiency cultures.</li>
            </ol>
            <p>
              Thus history shifts emphasis: from rupturing antagonistic property
              relations toward optimizing socio‑ecological‑innovative coordination
              to expand human capability.
            </p>
          </section>

          {/* 3. Transforming drivers */}
          <section>
            <h2>3. Transforming developmental drivers</h2>
            <p>
              As negating, conflictual drivers recede, constructive motors rise:
            </p>
            <ul>
              <li><strong>Scientific–technological innovation</strong> as accelerator of productivity and liberation of labour time.</li>
              <li><strong>Open knowledge cooperation</strong> (research networks, libre software, shared data) compressing idea‑to‑application cycles.</li>
              <li><strong>Quality‑of‑life elevation</strong>: preventive health, lifelong learning, mental well‑being expanding human capital reproduction.</li>
              <li><strong>Planetary responsibility</strong>: climate stability, biodiversity, ecological security as core performance metrics.</li>
              <li><strong>Cultural–aesthetic creativity</strong>: enlarging spaces of meaning, identity and non‑coercive social cohesion.</li>
            </ul>
            <p>
              These drivers reconfigure contradictions into collaborative
              “problems‑to‑solve,” reducing the social cost of antagonism.
            </p>
          </section>

          {/* 4. Methodological implications */}
          <section>
            <h2>4. Current methodological implications</h2>
            <ul>
              <li><strong>Research:</strong> Model coupled economic–ecological–knowledge contradictions to map emergent structural dynamics.</li>
              <li><strong>Policy:</strong> Design allocation mechanisms grounded in data transparency, co‑creation and adaptive feedback.</li>
              <li><strong>Political education:</strong> Shift from one‑way transmission to empowerment of critical, participatory and co‑design capacities.</li>
              <li><strong>Social alliances:</strong> Extend beyond worker–peasant blocs to include knowledge workers, technical strata and creative labour in digital–green economies.</li>
            </ul>
          </section>

          {/* 5. Post-class transformed contradictions */}
          <section>
            <h2>5. Transformed contradictions after class antagonism recedes</h2>
            <p>
              After antagonistic classes are abolished, social contradictions do not
              disappear; they <em>mutate</em> into new, largely non‑antagonistic forms that
              act as developmental drivers at a higher level of social organization.
            </p>
            <p>Representative axes:</p>
            <ul>
              <li><strong>Human ↔ Nature:</strong> Reorganizing material–energy exchange on sustainable metabolic foundations.</li>
              <li><strong>Individual ↔ Community:</strong> Harmonizing creative autonomy with social responsibility.</li>
              <li><strong>Science & Technology ↔ Society & Ethics:</strong> Governing application of breakthroughs under humanistic normative frameworks.</li>
              <li><strong>Nation – People ↔ Globalization:</strong> Aligning developmental interests with collective obligations to global challenges.</li>
              <li><strong>Material ↔ Spiritual within the person:</strong> Balancing material needs, meaning, identity and psycho‑emotional well‑being.</li>
            </ul>
            <p>
              These evolving contradictions substitute for the earlier historic role
              of antagonistic class struggle, structuring new cooperative–innovative
              dynamics of social progress.
            </p>
          </section>

          {/* 6. Synthesizing message */}
          <section>
            <h2>6. Synthesizing message</h2>
            <p>
              The aim is not “struggle for struggle’s sake” but the social enabling
              of conditions wherein each person’s capability can flourish freely in
              the free flourishing of all. Antagonistic class struggle is a
              necessary yet finite historical lever unlocking this qualitative
              transition.
            </p>
          </section>

          {/* 7. Closing quotations (retained) */}
          <section className="quote-section">
            <h2>7. Closing quotations</h2>
            <blockquote>
              <p>"Class struggle is a crucial direct motor — but never the only one."</p>
              <cite>— Synthesized from classics</cite>
            </blockquote>
            <blockquote>
              <p>"The free development of each is the condition for the free development of all."</p>
              <cite>— Manifesto</cite>
            </blockquote>
          </section>
        </div>
      </main>
    </div>
  );
}
