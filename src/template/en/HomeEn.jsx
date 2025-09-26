import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/Home.css';
import HeroEn from '../../components/HeroEn.jsx';
import IntroEn from './IntroEn.jsx';

export default function HomeEn() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <HeroEn />
      <IntroEn />
    </>
  );
}
