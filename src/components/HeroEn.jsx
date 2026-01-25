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
        <h1>Ho Chi Minh Thought on Great National Unity</h1>
        <p>Strategic role • Primary objective & task • Forces • Foundation</p>
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
