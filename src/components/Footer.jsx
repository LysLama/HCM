import React from 'react';
import '../styles/Footer.css';
import useLanguage from '../hooks/useLanguage';

const Footer = () => {
  const { isEnglish } = useLanguage();

  const copy = isEnglish
    ? {
      line1: 'Developed by MoonSpace Team - FPT University HCM.',
      line2: 'This project was completed for the HCM202 course, serving as a helpful digital learning resource for the community.',
      line3: '© 2026 - Philosophy Analysis.'
    }
    : {
      line1: 'Phát triển bởi Nhóm MoonSpace - Đại học FPT HCM.',
      line2: 'Dự án được thực hiện cho môn học HCM202, đồng thời xây dựng một tài nguyên học tập số hữu ích cho cộng đồng.',
      line3: '© 2026 - Phân Tích Triết Học.'
    };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>{copy.line1}</p>
        <p>{copy.line2}</p>
        <p>{copy.line3}</p>
      </div>
    </footer>
  );
};

export default Footer;