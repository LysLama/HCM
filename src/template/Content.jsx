import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Content.css';

// Import hình ảnh cho mỗi mục
import lyThuyetImg from '../assets/img/strategic-role.jpg';
import vaiTroImg from '../assets/img/hochiminh1.jpg';
import xaHoiImg from '../assets/img/dai_doan_ket.jpg';
import ketLuanImg from '../assets/img/mit_tinh_0.jpg';

const sections = [
    {
        id: 'strategic-role',
        title: 'Vai trò chiến lược',
        description: 'Đại đoàn kết là vấn đề chiến lược, quyết định thành công của cách mạng.',
        img: lyThuyetImg,
    },
    {
        id: 'primary-task',
        title: 'Mục tiêu & nhiệm vụ hàng đầu',
        description: 'Đại đoàn kết là mục tiêu lâu dài và nhiệm vụ hàng đầu của cách mạng.',
        img: vaiTroImg,
    },
    {
        id: 'forces',
        title: 'Lực lượng của khối đại đoàn kết',
        description: 'Chủ thể đại đoàn kết: toàn dân, mọi giai cấp/tầng lớp, dân tộc, tôn giáo…',
        img: xaHoiImg,
    },
    {
        id: 'foundation',
        title: 'Nền tảng & “hạt nhân”',
        description: 'Nền tảng CN–ND–TT; “hạt nhân” là đoàn kết trong Đảng để đoàn kết toàn dân.',
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
            <h1 className="content-main-title">Tổng quan: Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc</h1>
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