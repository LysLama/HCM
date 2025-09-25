import React, { useState } from 'react';
import InteractiveTimeline from '../components/InteractiveTimeline';
import KnowledgeMap from '../components/KnowledgeMap';
import '../styles/Section.css';
import '../styles/CombinedKnowledge.css';

const CombinedKnowledgePage = () => {
    const [activeSection, setActiveSection] = useState('timeline');

    return (
        <div className="page-container">
            {/* Hero Section */}
            <header className="section-hero combined-hero">
                <div className="hero-overlay"></div>
                <h1 className="section-hero-title">Tri Thức & Lịch Sử Triết Học</h1>
                <p className="hero-subtitle">Khám phá dòng chảy lịch sử và mối liên kết tri thức trong lý thuyết đấu tranh giai cấp</p>
            </header>

            {/* Tab Navigation */}
            <div className="knowledge-navigation">
                <div className="nav-container">
                    <button
                        className={`nav-tab ${activeSection === 'timeline' ? 'active' : ''}`}
                        onClick={() => setActiveSection('timeline')}
                    >
                        <span className="tab-icon">📜</span>
                        <span className="tab-label">Dòng Thời Gian</span>
                        <span className="tab-description">Lịch sử phát triển</span>
                    </button>
                    
                    <button
                        className={`nav-tab ${activeSection === 'knowledge' ? 'active' : ''}`}
                        onClick={() => setActiveSection('knowledge')}
                    >
                        <span className="tab-icon">🧠</span>
                        <span className="tab-label">Bản Đồ Tri Thức</span>
                        <span className="tab-description">Mối liên kết khái niệm</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <main className="section-main-content">
                <div className="content-wrapper">
                    {/* Timeline Section */}
                    {activeSection === 'timeline' && (
                        <div className="section-content timeline-content">
                            <div className="section-intro">
                                <h2>📜 Dòng Thời Gian Lịch Sử</h2>
                                <p>Khám phá hành trình phát triển tư tưởng triết học từ Marx, Engels, Lenin đến thời đại ngày nay. Mỗi mốc thời gian đánh dấu những bước ngoặt quan trọng trong sự hình thành và phát triển lý thuyết đấu tranh giai cấp.</p>
                            </div>
                            <InteractiveTimeline />
                        </div>
                    )}

                    {/* Knowledge Map Section */}
                    {activeSection === 'knowledge' && (
                        <div className="section-content knowledge-content">
                            <div className="section-intro">
                                <h2>🧠 Bản Đồ Tri Thức</h2>
                                <p>Khám phá mạng lưới khái niệm phức tạp trong lý thuyết triết học Mác-Lênin. Tương tác với từng khái niệm để hiểu rõ mối quan hệ và ảnh hưởng lẫn nhau giữa các ý tưởng cốt lõi.</p>
                            </div>
                            <KnowledgeMap />
                        </div>
                    )}
                </div>
            </main>

            {/* Quick Links Section */}
            <section className="quick-links-section">
                <div className="quick-links-container">
                    <h3>🔗 Liên Kết Nhanh đến Nội Dung Chuyên Sâu</h3>
                    <div className="quick-links-grid">
                        <a href="/theory" className="quick-link-card theory">
                            <div className="card-icon">📚</div>
                            <div className="card-content">
                                <h4>Lý Thuyết Nền Tảng</h4>
                                <p>Tìm hiểu khái niệm giai cấp và đấu tranh giai cấp theo Mác-Lênin</p>
                            </div>
                        </a>

                        <a href="/role" className="quick-link-card role">
                            <div className="card-icon">⚡</div>
                            <div className="card-content">
                                <h4>Vai Trò Lịch Sử</h4>
                                <p>Phân tích vai trò của đấu tranh giai cấp trong lịch sử phát triển xã hội</p>
                            </div>
                        </a>

                        <a href="/future" className="quick-link-card future">
                            <div className="card-icon">🌅</div>
                            <div className="card-content">
                                <h4>Tương Lai Xã Hội</h4>
                                <p>Khám phá khả năng của xã hội không còn đối kháng giai cấp</p>
                            </div>
                        </a>

                        <a href="/conclusion" className="quick-link-card conclusion">
                            <div className="card-icon">🎯</div>
                            <div className="card-content">
                                <h4>Kết Luận</h4>
                                <p>Tổng kết và ý nghĩa đương đại của lý thuyết đấu tranh giai cấp</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CombinedKnowledgePage;