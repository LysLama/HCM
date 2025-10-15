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
        <h1>Chương 2: Hàng hóa, Thị trường và Vai trò Chủ thể</h1>
        <p>I. Lý luận về sản xuất hàng hóa – II. Thị trường và nền kinh tế thị trường</p>
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