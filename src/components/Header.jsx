import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <nav className="main-nav">
        <ul>
          <li><a href="#home">Trang chủ</a></li>
          <li><a href="#about">Giới thiệu</a></li>
          <li><a href="#content">Nội dung</a></li>
          <li><a href="#quiz">Ôn tập</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;