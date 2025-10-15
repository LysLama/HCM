import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Content.css';

// Import hình ảnh cho mỗi mục
import lyThuyetImg from '../assets/img/theory.jpg';
import vaiTroImg from '../assets/img/role.jpg';
import xaHoiImg from '../assets/img/future.jpg';
import ketLuanImg from '../assets/img/conclusion.jpg';

const sections = [
    {
        id: 'chapter2/money',
        title: '1) Tiền tệ (Thuyết trình)',
        description: 'Nguồn gốc, bản chất và các chức năng của tiền trong kinh tế hàng hoá.',
        img: lyThuyetImg,
    },
    {
        id: 'chapter2/services',
        title: '2) Dịch vụ & quan hệ trao đổi',
        description: 'Dịch vụ và các quan hệ trao đổi với một số yếu tố khác hàng hoá hiện nay.',
        img: vaiTroImg,
    },
    {
        id: 'chapter2/market-concepts',
        title: '3) Thị trường: khái niệm & vai trò',
        description: 'Khái niệm, phân loại và vai trò của thị trường trong nền kinh tế.',
        img: xaHoiImg,
    },
    {
        id: 'chapter2/market-economy',
        title: '4) Nền kinh tế thị trường',
        description: 'Đặc trưng và một số quy luật chủ yếu của nền kinh tế thị trường.',
        img: ketLuanImg,
    },
];

const Content = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Kích hoạt khi 10% của phần tử hiển thị
            }
        );

        const cards = Array.from(gridRef.current.children);
        cards.forEach((card) => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            cards.forEach((card) => {
                if (card) {
                    observer.unobserve(card);
                }
            });
        };
    }, []);

    return (
        <main id="main-content" className="content-container">
            <h1 className="content-main-title">Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể</h1>
            <div className="content-grid" ref={gridRef}>
                {sections.map((section) => (
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
};

export default Content;