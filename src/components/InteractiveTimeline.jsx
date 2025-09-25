import React, { useState } from 'react';
import '../styles/InteractiveTimeline.css';

const timelineData = [
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

const InteractiveTimeline = () => {
    const [selectedMilestone, setSelectedMilestone] = useState(null);
    const [hoveredMilestone, setHoveredMilestone] = useState(null);

    const handleMilestoneClick = (milestone) => {
        setSelectedMilestone(milestone.id === selectedMilestone?.id ? null : milestone);
    };

    const handleLearnMore = (link) => {
        window.location.href = link;
    };

    return (
        <div className="timeline-container">
            <div className="timeline-header">
                <h2>Lịch Sử Phát Triển Lý Thuyết Giai Cấp</h2>
                <p>Khám phá hành trình phát triển tư tưởng triết học từ Marx đến thời đại ngày nay</p>
            </div>

            <div className="timeline-wrapper">
                <div className="timeline-line"></div>
                
                {timelineData.map((milestone, index) => (
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
                                            Tìm hiểu thêm
                                        </button>
                                        <button className="action-btn secondary">Chia sẻ</button>
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
                        {index < timelineData.length - 1 && (
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
                    Reset View
                </button>
                <div className="timeline-progress">
                    <div className="progress-bar">
                        <div 
                            className="progress-fill"
                            style={{ 
                                width: selectedMilestone ? 
                                    `${((selectedMilestone.id - 1) / (timelineData.length - 1)) * 100}%` : 
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