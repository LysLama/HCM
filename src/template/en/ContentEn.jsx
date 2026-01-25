import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Content.css';
import theoryImg from '../../assets/img/strategic-role.jpg';
import roleImg from '../../assets/img/hochiminh1.jpg';
import futureImg from '../../assets/img/dai_doan_ket.jpg';
import conclusionImg from '../../assets/img/mit_tinh_0.jpg';

const sectionsEn = [
  {
    id: 'strategic-role/en',
    title: 'Strategic role',
    description: 'Great national unity is a long-term strategy that determines revolutionary success.',
    img: theoryImg,
  },
  {
    id: 'primary-task/en',
    title: 'Primary objective & task',
    description: 'Great unity is not only a slogan but also a long-term objective and the Party’s foremost task.',
    img: roleImg,
  },
  {
    id: 'forces/en',
    title: 'Forces of the unity bloc',
    description: 'The subjects of unity include the entire people—across classes, religions, ethnicities, and communities at home and abroad.',
    img: futureImg,
  },
  {
    id: 'foundation/en',
    title: 'Foundation & “core factor”',
    description: 'Foundation: workers–peasants–intelligentsia; core factor: unity within the Party to strengthen unity in society.',
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
      <h1 className="content-main-title">Overview: Ho Chi Minh Thought on Great National Unity</h1>
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
