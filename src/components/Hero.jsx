import React from 'react';
import '../styles/Hero.css';
import { HiOutlineQuestionMarkCircle, HiOutlineBookOpen, HiOutlineScale, HiOutlineForward } from "react-icons/hi2";


const sections = [
    {
        id: 'dat-van-de',
        icon: <HiOutlineQuestionMarkCircle />,
        title: 'Đặt Vấn Đề',
        description: 'Giới thiệu bối cảnh và câu hỏi trung tâm của chủ đề.',
    },
    {
        id: 'ly-thuyet-nen-tang',
        icon: <HiOutlineBookOpen />,
        title: 'Lý Thuyết Nền Tảng',
        description: 'Tìm hiểu về khái niệm giai cấp và đấu tranh giai cấp theo triết học Mác – Lênin.',
    },
    {
        id: 'vai-tro-lich-su',
        icon: <HiOutlineScale />,
        title: 'Vai Trò Lịch Sử',
        description: 'Phân tích vai trò của đấu tranh giai cấp như một động lực phát triển xã hội.',
    },
    {
        id: 'xa-hoi-tuong-lai',
        icon: <HiOutlineForward />,
        title: 'Xã Hội Tương Lai',
        description: 'Thảo luận về khả năng và động lực phát triển trong một xã hội không đối kháng.',
    },
];

const Hero = () => {
    return (
        <section className="hero-section">
            <h1 className="hero-title">Nội dung chính</h1>
            <div className="card-container">
                {sections.map((section) => (
                    <a key={section.id} href={`#${section.id}`} className="hero-card">
                        <div className="hero-card-icon">{section.icon}</div>
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Hero;