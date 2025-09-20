import React from 'react';
import '../styles/Hero.css';
import { HiChevronDoubleDown } from 'react-icons/hi2';


const Hero = () => {
  const handleScrollDown = (e) => {
    e.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
    const introductionSection = document.getElementById('introduction');
    if (introductionSection) {
      introductionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header id='home' className="main-header">
      <div className="header-content">
        <h1>Đấu Tranh Giai Cấp & Tương Lai Lịch Sử Nhân Loại</h1>
        <p>Nếu không còn đấu tranh giai cấp, lịch sử nhân loại có dừng lại không?</p>
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

export default Hero;