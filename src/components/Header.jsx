import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <nav className="main-nav">
        <ul>
        <li><NavLink to="/#home">Trang chủ</NavLink></li>
        <li><Link to="/#introduction">Giới thiệu</Link></li>
        <li><NavLink to="/content">Nội dung</NavLink></li>
        <li><NavLink to="/quiz">Ôn tập</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;