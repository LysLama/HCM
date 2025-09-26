import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Content.css';
import theoryImg from '../../assets/img/theory.jpg';
import roleImg from '../../assets/img/role.jpg';
import futureImg from '../../assets/img/future.jpg';
import conclusionImg from '../../assets/img/conclusion.jpg';

const sectionsEn = [
  { id: 'theory', title: 'Foundational Theory', description: 'Explore the Marxist–Leninist concepts of class and class struggle.', img: theoryImg },
  { id: 'role', title: 'Historical Role', description: 'Analyze class struggle as a driver of social development.', img: roleImg },
  { id: 'future', title: 'Future Society', description: 'Discuss possibilities in a society beyond antagonistic classes.', img: futureImg },
  { id: 'conclusion', title: 'Conclusion', description: 'Synthesize key points and the enduring relevance of the topic.', img: conclusionImg },
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
      <h1 className="content-main-title">Explore Topics</h1>
      <div className="content-grid" ref={gridRef}>
        {sectionsEn.map(section => (
          <Link to={`/${section.id}/en`} key={section.id} className="content-card-link">
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
