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
      <h1 className="intro-section-title">Chapter 2 Overview</h1>

      <div className="intro-card">
        <h2>Scope & Structure</h2>
        <div className="intro-section-content">
          <p>
            Focus shifted to <strong>Chapter 2: Goods, Markets and Roles of Market Participants</strong>. Part I introduces Marx’s theory of <em>commodity production and the commodity</em>. Part II covers <em>markets and the market economy</em>.
          </p>
        </div>
      </div>

      <div className="intro-card">
        <h2>Learning Goals</h2>
        <div className="intro-section-content">
          <ul>
            <li><strong>Systematize key concepts:</strong> Goods, money, services, and special exchange relations.</li>
            <li><strong>Discuss market roles:</strong> Signals, allocation, competition, and integration.</li>
            <li><strong>Bridge theory and practice:</strong> From value and price to financial instruments and policy.</li>
          </ul>
        </div>
      </div>

      <div className="intro-card">
        <h2>Quick Access</h2>
        <div className="intro-section-content">
          <ul>
            <li><a href="/chapter2/money/en">1) Money</a></li>
            <li><a href="/chapter2/services/en">2) Services & Exchange Relations</a></li>
            <li><a href="/chapter2/market-concepts/en">3) Market: Concepts & Roles</a></li>
            <li><a href="/chapter2/market-economy/en">4) Market Economy</a></li>
            <li><a href="/knowledge/en">Chapter 2 • Knowledge Hub</a></li>
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