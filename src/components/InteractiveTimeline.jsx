import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/InteractiveTimeline.css';

const timelineDataVi = [
    {
        id: 1,
        year: "1818-1883",
        title: "Karl Marx",
        description: "Phát triển lý thuyết về giai cấp và đấu tranh giai cấp",
        details: "Marx đặt nền móng cho lý thuyết giai cấp hiện đại, phân tích mâu thuẫn giữa tư sản và vô sản trong 'Tuyên ngôn Đảng Cộng sản' và 'Tư bản luận'.",
        color: "var(--primary-red)",
        link: "/theory",
        image: "📚"
    },
    {
        id: 2,
        year: "1820-1895",
        title: "Friedrich Engels", 
        description: "Đồng sáng lập chủ nghĩa Mác-xít, phát triển lý thuyết về nguồn gốc gia đình",
        details: "Engels bổ sung quan điểm về vai trò của kinh tế trong xã hội và phân tích sự tiến hóa của các hình thái xã hội.",
        color: "var(--secondary-yellow)",
        image: "⚡",
        link: "/theory"
    },
    {
        id: 3,
        year: "1870-1924",
        title: "Vladimir Lenin",
        description: "Phát triển lý thuyết Mác-xít trong thời đại đế quốc",
        details: "Lenin áp dụng và phát triển lý thuyết Mác-xít vào thực tiễn cách mạng, tạo nên chủ nghĩa Mác-Lênin.",
        color: "var(--primary-red-light)",
        link: "/role",
        image: "🚩"
    },
    {
        id: 4,
        year: "1818-1968",
        title: "Phong trào Cách mạng",
        description: "Ứng dụng thực tiễn lý thuyết đấu tranh giai cấp",
        details: "Các cuộc cách mạng xã hội chủ nghĩa trên thế giới chứng minh tính đúng đắn của lý thuyết đấu tranh giai cấp.",
        color: "var(--accent-gold)",
        link: "/role",
        image: "🌍"
    },
    {
        id: 5,
        year: "1975-nay",
        title: "Thời kỳ Đổi mới",
        description: "Vận dụng sáng tạo trong điều kiện mới",
        details: "Việt Nam và các nước xã hội chủ nghĩa vận dụng linh hoạt lý thuyết giai cấp trong thời kỳ hội nhập và phát triển.",
        color: "var(--secondary-yellow-dark)",
        link: "/future",
        image: "🌱"
    }
];

const timelineDataEn = [
    {
        id: 1,
        year: "1818-1883",
        title: "Karl Marx",
        description: "Developed the theory of class and class struggle",
        details: "Marx laid the foundation for modern class theory, analyzing the contradiction between bourgeoisie and proletariat in the Manifesto and Capital.",
        color: "var(--primary-red)",
        link: "/theory/en",
        image: "📚"
    },
    {
        id: 2,
        year: "1820-1895",
        title: "Friedrich Engels", 
        description: "Co-developed Marxism; expanded theory of family origins",
        details: "Engels added perspectives on the role of economics and analyzed evolution of social formations.",
        color: "var(--secondary-yellow)",
        image: "⚡",
        link: "/theory/en"
    },
    {
        id: 3,
        year: "1870-1924",
        title: "Vladimir Lenin",
        description: "Advanced Marxism in the age of imperialism",
        details: "Lenin applied and developed Marxist theory in revolutionary practice, shaping Marxism–Leninism.",
        color: "var(--primary-red-light)",
        link: "/role/en",
        image: "🚩"
    },
    {
        id: 4,
        year: "1818-1968",
        title: "Revolutionary Movements",
        description: "Practical application of class struggle theory",
        details: "Global socialist revolutions demonstrated the explanatory power of class struggle theory.",
        color: "var(--accent-gold)",
        link: "/role/en",
        image: "🌍"
    },
    {
        id: 5,
        year: "1975–present",
        title: "Renovation Period",
        description: "Creative adaptation in new conditions",
        details: "Vietnam and other socialist countries flexibly apply class theory in integration and development phases.",
        color: "var(--secondary-yellow-dark)",
        link: "/future/en",
        image: "🌱"
    }
];

const InteractiveTimeline = () => {
    const [selectedMilestone, setSelectedMilestone] = useState(null);
    const [hoveredMilestone, setHoveredMilestone] = useState(null);
    const location = useLocation();
    const isEn = location.pathname.endsWith('/en') || location.pathname.includes('/en/');
    const data = isEn ? timelineDataEn : timelineDataVi;

    const handleMilestoneClick = (milestone) => {
        setSelectedMilestone(milestone.id === selectedMilestone?.id ? null : milestone);
    };

    const handleLearnMore = (link) => {
        window.location.href = link;
    };

    return (
        <div className="timeline-container">
            <div className="timeline-header">
                <h2>{isEn ? 'Historical Development of Class Theory' : 'Lịch Sử Phát Triển Lý Thuyết Giai Cấp'}</h2>
                <p>{isEn ? 'Explore the evolution of philosophical thought from Marx to the present era' : 'Khám phá hành trình phát triển tư tưởng triết học từ Marx đến thời đại ngày nay'}</p>
            </div>

            <div className="timeline-wrapper">
                <div className="timeline-line"></div>
                
                {data.map((milestone, index) => (
                    <div 
                        key={milestone.id}
                        className={`milestone ${index % 2 === 0 ? 'left' : 'right'} ${
                            selectedMilestone?.id === milestone.id ? 'selected' : ''
                        }`}
                        onClick={() => handleMilestoneClick(milestone)}
                        onMouseEnter={() => setHoveredMilestone(milestone)}
                        onMouseLeave={() => setHoveredMilestone(null)}
                        style={{ '--milestone-color': milestone.color }}
                    >
                        <div className="milestone-dot">
                            <span className="milestone-icon">{milestone.image}</span>
                            <div className="milestone-pulse"></div>
                        </div>
                        
                        <div className="milestone-content">
                            <div className="milestone-year">{milestone.year}</div>
                            <h3 className="milestone-title">{milestone.title}</h3>
                            <p className="milestone-description">{milestone.description}</p>
                            
                            {selectedMilestone?.id === milestone.id && (
                                <div className="milestone-details">
                                    <p>{milestone.details}</p>
                                    <div className="milestone-actions">
                                        <button 
                                            className="action-btn primary"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleLearnMore(milestone.link);
                                            }}
                                        >
                                            {isEn ? 'Learn more' : 'Tìm hiểu thêm'}
                                        </button>
                                        <button className="action-btn secondary">{isEn ? 'Share' : 'Chia sẻ'}</button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Hover Card */}
                        {hoveredMilestone?.id === milestone.id && !selectedMilestone && (
                            <div className="hover-card">
                                <div className="hover-card-content">
                                    <strong>{milestone.title}</strong>
                                    <span>{milestone.year}</span>
                                </div>
                            </div>
                        )}

                        {/* Connection Lines */}
                        {index < data.length - 1 && (
                            <div className="milestone-connection">
                                <svg className="connection-svg" viewBox="0 0 100 50">
                                    <path 
                                        d="M 10 25 Q 50 10 90 25" 
                                        fill="none" 
                                        stroke={milestone.color} 
                                        strokeWidth="2"
                                        className="connection-path"
                                    />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation Controls */}
            <div className="timeline-controls">
                <button 
                    className="control-btn"
                    onClick={() => setSelectedMilestone(null)}
                >
                    {isEn ? 'Reset View' : 'Reset View'}
                </button>
                <div className="timeline-progress">
                    <div className="progress-bar">
                        <div 
                            className="progress-fill"
                            style={{ 
                                width: selectedMilestone ? 
                                    `${((selectedMilestone.id - 1) / (data.length - 1)) * 100}%` : 
                                    '0%' 
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveTimeline;