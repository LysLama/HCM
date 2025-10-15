import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Content.css';
import theoryImg from '../../assets/img/theory.jpg';
import roleImg from '../../assets/img/role.jpg';
import futureImg from '../../assets/img/future.jpg';
import conclusionImg from '../../assets/img/conclusion.jpg';

// Chapter 2 focus (EN)
const sectionsEn = [
  {
    id: 'chapter2/money/en',
    title: '1) Money',
    description: 'Origins, nature, and functions of money in a commodity economy.',
    img: theoryImg,
  },
  {
    id: 'chapter2/services/en',
    title: '2) Services & Exchange Relations',
    description: 'Services and special exchange relations for factors beyond ordinary goods.',
    img: roleImg,
  },
  {
    id: 'chapter2/market-concepts/en',
    title: '3) Market: Concepts & Roles',
    description: 'Definition, classification, and roles of markets in the economy.',
    img: futureImg,
  },
  {
    id: 'chapter2/market-economy/en',
    title: '4) Market Economy',
    description: 'Core features and key laws of the market economy; role of the state.',
    img: conclusionImg,
  },
];

export default function ContentEn() {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const cards = Array.from(gridRef.current.children);
    cards.forEach(card => observer.observe(card));
    return () => cards.forEach(card => observer.unobserve(card));
  }, []);

  return (
    <main id="main-content" className="content-container">
      <h1 className="content-main-title">Chapter 2: Goods, Money, Services, Markets, and the Market Economy</h1>
      <div className="content-grid" ref={gridRef}>
        {sectionsEn.map(section => (
          <Link to={`/${section.id}`} key={section.id} className="content-card-link">
            <div className="content-card">
              <div className="content-card-body">
                <h3 className="content-card-title">{section.title}</h3>
                <p className="content-card-description">{section.description}</p>
              </div>
              <img src={section.img} alt={section.title} className="content-card-img" />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
