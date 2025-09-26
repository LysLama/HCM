import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';
import LanguageToggle from './LanguageToggle.jsx';
import useLanguage from '../hooks/useLanguage.js';

const Header = () => {
  const { lang, buildPath } = useLanguage();
  const t = (vi, en) => (lang === 'en' ? en : vi);
  return (
    <header className="site-header" style={{ paddingTop: '42px' }}>
      <LanguageToggle />
      <nav className="main-nav">
        <ul>
          <li><NavLink to={buildPath('/') + '#home'}>{t('Trang chủ', 'Home')}</NavLink></li>
          <li><Link to={buildPath('/') + '#introduction'}>{t('Giới thiệu', 'Introduction')}</Link></li>
          <li><NavLink to={buildPath('/content')}>{t('Nội dung', 'Content')}</NavLink></li>
          <li><NavLink to={buildPath('/knowledge')}>{t('Tri thức & Lịch sử', 'Knowledge & History')}</NavLink></li>
          <li><NavLink to={buildPath('/quiz')}>{t('Ôn tập', 'Quiz')}</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;