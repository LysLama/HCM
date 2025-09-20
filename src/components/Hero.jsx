import React from 'react';
import '../styles/Hero.css';
import { HiChevronDoubleDown } from 'react-icons/hi2';


const Hero = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <h1>Đấu Tranh Giai Cấp & Tương Lai Lịch Sử Nhân Loại</h1>
        <p>Nếu không còn đấu tranh giai cấp, lịch sử nhân loại có dừng lại không?</p>
      </div>
      <a href="#dat-van-de" className="scroll-down-arrow" aria-label="Scroll down">
        <HiChevronDoubleDown />
      </a>
    </header>
  );
};

export default Hero;