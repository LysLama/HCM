import React, { useEffect, useRef } from 'react';
import '../../styles/Intro.css';

const IntroEn = () => {
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const cards = Array.from(cardsContainerRef.current.children).filter(c => c.classList.contains('intro-card'));
    cards.forEach(card => observer.observe(card));
    return () => cards.forEach(card => observer.unobserve(card));
  }, []);

  return (
    <section id="introduction" className="intro-section-container" ref={cardsContainerRef}>
      <h1 className="intro-section-title">Project Introduction</h1>

      <div className="intro-card">
        <h2>Project Overview</h2>
        <div className="intro-section-content">
          <p>
            The project <strong>"Class Struggle & The Future of Human History"</strong> is a knowledge portal designed for learning and research. With the guiding question: <em>"If class struggle ceased, would human history stop?"</em> we aim to create an academic space where learners can explore one of the core categories of Marxist philosophy and social theory.
          </p>
        </div>
      </div>

      <div className="intro-card">
        <h2>Project Objectives</h2>
        <div className="intro-section-content">
          <ul>
            <li><strong>Systematize knowledge:</strong> Offer students a structured and in‑depth view of class and class struggle in Marxism–Leninism.</li>
            <li><strong>Encourage open discussion:</strong> Stimulate critical thinking about the role of class struggle in historical development and humanity's future.</li>
            <li><strong>Integrate technology:</strong> Use modern web technologies to create a more engaging study experience than traditional static text.</li>
          </ul>
        </div>
      </div>

      <div className="intro-card">
        <h2>Technical Stack</h2>
        <div className="intro-section-content">
          <p>A modern performance‑oriented web stack with an embedded academic assistant:</p>
          <ul>
            <li><strong>React + Vite:</strong> Fast dev & optimized bundling.</li>
            <li><strong>Modern JavaScript (ESNext):</strong> Interaction & state handling.</li>
            <li><strong>Pure CSS + variables:</strong> Fine‑grained responsive control.</li>
            <li><strong>GSAP:</strong> Subtle motion & progressive reveal.</li>
            <li><strong>Integrated AI Q&A assistant:</strong> Ask contextual philosophy questions while reading (topic‑scoped, cached, fallback‑ready).</li>
          </ul>
        </div>
      </div>

      <div className="intro-card">
        <h2>Statement on AI Usage</h2>
        <div className="intro-section-content">
          <p>AI is employed as a supportive tool—never a substitute for scholarly analysis.</p>
          <p><strong>Scope of assistance:</strong></p>
          <ul>
            <li>Non-core phrasing refinement & structural suggestion.</li>
            <li>Light code quality improvements & small performance hints.</li>
            <li>In-page real‑time Q&A assistant for topic‑restricted philosophy queries.</li>
          </ul>
          <p><strong>Academic integrity:</strong> All substantive arguments, interpretations and conclusions are authored by the team using primary / authoritative sources; AI outputs are reviewed and never treated as authoritative.</p>
        </div>
      </div>

      <div className="intro-card">
        <h2>Contributors</h2>
        <div className="intro-section-content">
          <ul>
            <li><strong>Minh Khanh</strong> – Team lead, primary research</li>
            <li><strong>Ly Thanh Lam</strong> – Design & technical support</li>
            <li><strong>Ngo Gia Bao</strong> – Front‑end development & UI design</li>
            <li><strong>Nguyen Thi Kim Phung</strong> – Content editing & sourcing</li>
            <li><strong>Bui Gia Huy</strong> – Design & support</li>
            <li><strong>Manh Hung</strong> – Back‑end & data management</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IntroEn;