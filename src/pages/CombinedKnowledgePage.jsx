import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import InteractiveTimeline from '../components/InteractiveTimeline';
import KnowledgeMap from '../components/KnowledgeMap';
import '../styles/Section.css';
import '../styles/CombinedKnowledge.css';

const CombinedKnowledgePage = () => {
    const [activeSection, setActiveSection] = useState('timeline');
    const location = useLocation();
    const isEn = location.pathname.endsWith('/en');

    return (
        <div className="page-container">
            {/* Hero Section */}
                        <header className="section-hero combined-hero">
                                <div className="hero-overlay"></div>
                                {isEn ? (
                                    <>
                                        <h1 className="section-hero-title">Knowledge & Philosophical History</h1>
                                        <p className="hero-subtitle">Explore historical flow and conceptual connections in class struggle theory</p>
                                    </>
                                ) : (
                                    <>
                                        <h1 className="section-hero-title">Tri Thức & Lịch Sử Triết Học</h1>
                                        <p className="hero-subtitle">Khám phá dòng chảy lịch sử và mối liên kết tri thức trong lý thuyết đấu tranh giai cấp</p>
                                    </>
                                )}
                        </header>

            {/* Tab Navigation */}
            <div className="knowledge-navigation">
                <div className="nav-container">
                    <button
                        className={`nav-tab ${activeSection === 'timeline' ? 'active' : ''}`}
                        onClick={() => setActiveSection('timeline')}
                    >
                        <span className="tab-icon">📜</span>
                        <span className="tab-label">{isEn ? 'Timeline' : 'Dòng Thời Gian'}</span>
                        <span className="tab-description">{isEn ? 'Historical development' : 'Lịch sử phát triển'}</span>
                    </button>
                    
                    <button
                        className={`nav-tab ${activeSection === 'knowledge' ? 'active' : ''}`}
                        onClick={() => setActiveSection('knowledge')}
                    >
                        <span className="tab-icon">🧠</span>
                        <span className="tab-label">{isEn ? 'Knowledge Map' : 'Bản Đồ Tri Thức'}</span>
                        <span className="tab-description">{isEn ? 'Conceptual links' : 'Mối liên kết khái niệm'}</span>
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
                                <h2>{isEn ? '📜 Historical Timeline' : '📜 Dòng Thời Gian Lịch Sử'}</h2>
                                <p>{isEn ? 'Explore the development of philosophical thought from Marx, Engels, Lenin to the present. Each milestone marks turning points in forming and evolving class struggle theory.' : 'Khám phá hành trình phát triển tư tưởng triết học từ Marx, Engels, Lenin đến thời đại ngày nay. Mỗi mốc thời gian đánh dấu những bước ngoặt quan trọng trong sự hình thành và phát triển lý thuyết đấu tranh giai cấp.'}</p>
                            </div>
                            <InteractiveTimeline />
                        </div>
                    )}

                    {/* Knowledge Map Section */}
                    {activeSection === 'knowledge' && (
                        <div className="section-content knowledge-content">
                            <div className="section-intro">
                                <h2>{isEn ? '🧠 Knowledge Map' : '🧠 Bản Đồ Tri Thức'}</h2>
                                <p>{isEn ? 'Explore the conceptual network in Marxist–Leninist philosophy. Interact with nodes to understand relationships and influence among core ideas.' : 'Khám phá mạng lưới khái niệm phức tạp trong lý thuyết triết học Mác-Lênin. Tương tác với từng khái niệm để hiểu rõ mối quan hệ và ảnh hưởng lẫn nhau giữa các ý tưởng cốt lõi.'}</p>
                            </div>
                            <KnowledgeMap />
                        </div>
                    )}
                </div>
            </main>

            {/* Quick Links Section */}
            <section className="quick-links-section">
                <div className="quick-links-container">
                    <h3>{isEn ? '🔗 Quick Links to In-Depth Content' : '🔗 Liên Kết Nhanh đến Nội Dung Chuyên Sâu'}</h3>
                    <div className="quick-links-grid">
                        <a href={isEn ? '/theory/en' : '/theory'} className="quick-link-card theory">
                            <div className="card-icon">📚</div>
                            <div className="card-content">
                                <h4>{isEn ? 'Foundational Theory' : 'Lý Thuyết Nền Tảng'}</h4>
                                <p>{isEn ? 'Study class and class struggle concepts in Marxism–Leninism' : 'Tìm hiểu khái niệm giai cấp và đấu tranh giai cấp theo Mác-Lênin'}</p>
                            </div>
                        </a>

                        <a href={isEn ? '/role/en' : '/role'} className="quick-link-card role">
                            <div className="card-icon">⚡</div>
                            <div className="card-content">
                                <h4>{isEn ? 'Historical Role' : 'Vai Trò Lịch Sử'}</h4>
                                <p>{isEn ? 'Analyze the role of class struggle in social development' : 'Phân tích vai trò của đấu tranh giai cấp trong lịch sử phát triển xã hội'}</p>
                            </div>
                        </a>

                        <a href={isEn ? '/future/en' : '/future'} className="quick-link-card future">
                            <div className="card-icon">🌅</div>
                            <div className="card-content">
                                <h4>{isEn ? 'Future Society' : 'Tương Lai Xã Hội'}</h4>
                                <p>{isEn ? 'Explore possibilities of a society beyond class antagonisms' : 'Khám phá khả năng của xã hội không còn đối kháng giai cấp'}</p>
                            </div>
                        </a>

                        <a href={isEn ? '/conclusion/en' : '/conclusion'} className="quick-link-card conclusion">
                            <div className="card-icon">🎯</div>
                            <div className="card-content">
                                <h4>{isEn ? 'Conclusion' : 'Kết Luận'}</h4>
                                <p>{isEn ? 'Summary and contemporary relevance of class struggle theory' : 'Tổng kết và ý nghĩa đương đại của lý thuyết đấu tranh giai cấp'}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CombinedKnowledgePage;