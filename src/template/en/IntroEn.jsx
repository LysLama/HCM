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
          <p>To deliver a modern UI and smooth UX we rely on:</p>
          <ul>
            <li><strong>React + Vite</strong></li>
            <li><strong>JavaScript</strong> for interactive logic.</li>
            <li><strong>CSS</strong> for styling and responsive layout.</li>
            <li><strong>GSAP</strong> for refined animation effects.</li>
          </ul>
        </div>
      </div>

      <div className="intro-card">
        <h2>Statement on AI Usage</h2>
        <div className="intro-section-content">
          <p>We used AI tools responsibly as support utilities, not as a replacement for academic reasoning.</p>
          <br />
          <p><strong>Models used:</strong> Google Gemini and other LLMs for auxiliary tasks.</p>
          <br />
          <p><strong>Purposes:</strong></p>
          <ul>
            <li><strong>Idea structuring:</strong> Brainstorming outlines and structural variations.</li>
            <li><strong>Code optimization:</strong> Refactoring and debugging frontend logic.</li>
            <li><strong>Auxiliary narrative content:</strong> Writing non‑core descriptive passages.</li>
          </ul>
          <br />
          <p><strong>Academic integrity:</strong> All core analytical and theoretical passages were written by team members from primary sources.</p>
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