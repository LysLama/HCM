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
      <h1 className="intro-section-title">Topic introduction</h1>

      <div className="intro-card">
        <h2>Scope & structure</h2>
        <div className="intro-section-content">
          <p>
            This site focuses on <strong>Ho Chi Minh Thought on great national unity</strong>, organized around two main axes:
            <strong> (1) the role</strong> and <strong>(2) the forces and foundation</strong> of the great national unity bloc.
          </p>
          <div className="quote-section">
            <blockquote>
              <p>
                “History teaches us this lesson: When our people are united as one, our country will gain independence and freedom. Conversely, when our
                people are not united, we will be invaded by foreign powers.”
              </p>
              <cite>— Ho Chi Minh</cite>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="intro-card">
        <h2>Learning Goals</h2>
        <div className="intro-section-content">
          <ul>
            <li><strong>Understand the core claims:</strong> Unity is a long-term strategy and a decisive factor for revolutionary success.</li>
            <li><strong>Master the structure:</strong> Strategic role → primary objective/task → forces → foundation and the “core factor”.</li>
            <li><strong>Connect to practice:</strong> Identify how to strengthen social consensus and mobilize national strength today.</li>
          </ul>
        </div>
      </div>

      <div className="intro-card">
        <h2>Quick Access</h2>
        <div className="intro-section-content">
          <ul>
            <li><a href="/overview/en">Overview</a></li>
            <li><a href="/methods/en">Methods</a></li>
            <li><a href="/front/en">Front</a></li>
            <li><a href="/resources/en">Resources</a></li>
            <li><a href="/quiz/en">Quiz</a></li>
          </ul>
        </div>
      </div>

      <div className="intro-card">
        <h2>Technical Stack</h2>
        <div className="intro-section-content">
          <ul>
            <li><strong>React + Vite</strong> • Fast iteration and optimized bundling</li>
            <li><strong>ESNext + CSS</strong> • Interactive UI with fine‑grained styling</li>
            <li><strong>Optional GSAP</strong> • Subtle motion for progressive reveal</li>
            <li><strong>Integrated Q&A</strong> • Topic‑scoped academic assistant</li>
          </ul>
        </div>
      </div>

      <div className="intro-card">
        <h2>Statement on AI Usage</h2>
        <div className="intro-section-content">
          <p>We use AI as a supportive tool for drafting and interaction; it does not replace scholarly research or authorship.</p>
          <p><strong>Scope of AI assistance:</strong></p>
          <ul>
            <li>Non‑core phrasing and structural suggestions.</li>
            <li>Light code quality checks and minor performance hints.</li>
            <li>In‑page Q&A assistant scoped to the project’s topics with caching and fallback.</li>
          </ul>
          <p><strong>Academic integrity:</strong> All substantive arguments, analysis and conclusions are authored by the team using primary and authoritative sources; AI outputs are reviewed and treated as references only.</p>
        </div>
      </div>

      <div className="intro-card">
        <h2>Contributors</h2>
        <div className="intro-section-content">
          <ul>
            <li><strong>Minh Khanh</strong> – Team lead, primary research</li>
            <li><strong>Thanh Lam</strong> – Back‑end developer, server ops, API</li>
            <li><strong>Gia Bao</strong> – Front‑end developer, UI design</li>
            <li><strong>Song Thien</strong> – Technical support, design/content edits</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IntroEn;