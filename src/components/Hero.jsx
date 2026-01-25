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
        <h1>Tư tưởng Hồ Chí Minh về Đại đoàn kết Toàn dân tộc</h1>
        <p>Vai trò chiến lược • Mục tiêu & nhiệm vụ • Lực lượng • Nền tảng</p>
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