import React from 'react';
import '../styles/Hero.css';
import { HiChevronDoubleDown } from 'react-icons/hi2';

// English version of the Hero section
const HeroEn = () => {
  const handleScrollDown = (e) => {
    e.preventDefault();
    const introductionSection = document.getElementById('introduction');
    if (introductionSection) {
      introductionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header id='home' className="main-header">
      <div className="header-content">
        <h1>Chapter 2: Goods, Markets and Roles of Market Participants</h1>
        <p>I. Theory of commodity production — II. Markets and the market economy</p>
      </div>
      <a
        href="#introduction"
        className="scroll-down-arrow"
        aria-label="Scroll down"
        onClick={handleScrollDown}
      >
        <HiChevronDoubleDown />
      </a>
    </header>
  );
};

export default HeroEn;
