import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';
import LanguageToggle from './LanguageToggle.jsx';
import useLanguage from '../hooks/useLanguage.js';

const Header = () => {
  const { lang, buildPath } = useLanguage();
  const t = (vi, en) => (lang === 'en' ? en : vi);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Prevent background scroll when menu is open on mobile
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    }
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>      
      <div className={`mobile-nav-overlay ${open ? 'visible' : ''}`} onClick={closeMenu} />
      <div className="header-inner">
        <div className="logo-text">
          <NavLink to={buildPath('/') + '#home'} onClick={closeMenu}>Triết Học</NavLink>
        </div>
        <LanguageToggle />
        <button
          className={`hamburger ${open ? 'is-active' : ''}`}
          aria-label={t('Mở điều hướng', 'Toggle navigation')}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`main-nav ${open ? 'open' : ''}`}>
          <ul>
            <li><NavLink onClick={closeMenu} to={buildPath('/') + '#home'}>{t('Trang chủ', 'Home')}</NavLink></li>
            <li><Link onClick={closeMenu} to={buildPath('/') + '#introduction'}>{t('Giới thiệu', 'Introduction')}</Link></li>
            <li><NavLink onClick={closeMenu} to={buildPath('/content')}>{t('Nội dung', 'Content')}</NavLink></li>
            <li><NavLink onClick={closeMenu} to={buildPath('/knowledge')}>{t('Tri thức & Lịch sử', 'Knowledge & History')}</NavLink></li>
            <li><NavLink onClick={closeMenu} to={buildPath('/quiz')}>{t('Ôn tập', 'Quiz')}</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;