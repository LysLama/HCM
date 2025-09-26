import React from 'react';
import useLanguage from '../hooks/useLanguage.js';
import '../styles/Header.css';

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();
  return (
    <div className="lang-toggle-wrapper">
      <button aria-label="Switch language" className="lang-toggle-btn" onClick={toggleLanguage}>
        {lang === 'en' ? 'VI' : 'EN'}
      </button>
    </div>
  );
}