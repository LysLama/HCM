import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <nav className="main-nav">
        <ul>
        <li><Link to="/#home">Trang chủ</Link></li>
        <li><Link to="/#introduction">Giới thiệu</Link></li>
        <li><Link to="/content">Nội dung</Link></li>
        <li><Link to="/quiz">Ôn tập</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;