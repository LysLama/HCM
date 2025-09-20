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
        id: 'theory',
        title: 'Lý Thuyết Nền Tảng',
        description: 'Tìm hiểu về khái niệm giai cấp và đấu tranh giai cấp theo triết học Mác – Lênin.',
        img: lyThuyetImg,
    },
    {
        id: 'role',
        title: 'Vai Trò Lịch Sử',
        description: 'Phân tích vai trò của đấu tranh giai cấp như một động lực phát triển xã hội.',
        img: vaiTroImg,
    },
    {
        id: 'future',
        title: 'Xã Hội Tương Lai',
        description: 'Thảo luận về khả năng và động lực phát triển trong một xã hội không đối kháng.',
        img: xaHoiImg,
    },
    {
        id: 'conclusion',
        title: 'Kết luận',
        description: 'Tổng kết những điểm chính và tầm quan trọng của việc hiểu đấu tranh giai cấp.',
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
            <h1 className="content-main-title">Khám Phá Các Chủ Đề</h1>
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