import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import InteractiveTimeline from '../components/InteractiveTimeline';
import KnowledgeMap from '../components/KnowledgeMap';
import '../styles/Section.css';
import '../styles/CombinedKnowledge.css';
// Icons
import learningPathIcon from '../assets/icons/learning-path.svg';
import conceptMapIcon from '../assets/icons/concept-map.svg';
import moneyIcon from '../assets/icons/money.svg';
import servicesIcon from '../assets/icons/services.svg';
import marketIcon from '../assets/icons/market.svg';
import marketEconomyIcon from '../assets/icons/market-economy.svg';
import linkIcon from '../assets/icons/link.svg';

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
                                        <h1 className="section-hero-title">Chapter 2 • Knowledge Hub</h1>
                                        <p className="hero-subtitle">Goods, money, services, markets, and the market economy — overview, learning path, and concept map</p>
                                    </>
                                ) : (
                                    <>
                                        <h1 className="section-hero-title">Chương 2 • Trung Tâm Tri Thức</h1>
                                        <p className="hero-subtitle">Hàng hóa, tiền tệ, dịch vụ, thị trường và kinh tế thị trường — tổng quan, lộ trình học và bản đồ khái niệm</p>
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
                        <span className="tab-icon"><img src={learningPathIcon} alt="" width={18} height={18} aria-hidden="true" /></span>
                        <span className="tab-label">{isEn ? 'Learning Path' : 'Lộ Trình Học'}</span>
                        <span className="tab-description">{isEn ? 'From goods to market economy' : 'Từ hàng hóa đến KTTT'}</span>
                    </button>
                    
                    <button
                        className={`nav-tab ${activeSection === 'knowledge' ? 'active' : ''}`}
                        onClick={() => setActiveSection('knowledge')}
                    >
                        <span className="tab-icon"><img src={conceptMapIcon} alt="" width={18} height={18} aria-hidden="true" /></span>
                        <span className="tab-label">{isEn ? 'Concept Map' : 'Bản Đồ Khái Niệm'}</span>
                        <span className="tab-description">{isEn ? 'Connections among core ideas' : 'Liên kết giữa các khái niệm'}</span>
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
                                <h2>
                                    <img src={learningPathIcon} alt="" width={22} height={22} aria-hidden="true" style={{ verticalAlign: 'text-bottom', marginRight: 8 }} />
                                    {isEn ? 'Learning Path' : 'Lộ Trình Học'}
                                </h2>
                                <p>{isEn ? 'A quick path through Chapter 2: Goods → Money → Services → Market concepts → Market economy.' : 'Lộ trình nhanh Chương 2: Hàng hóa → Tiền tệ → Dịch vụ → Khái niệm thị trường → Nền kinh tế thị trường.'}</p>
                            </div>
                            <InteractiveTimeline />
                        </div>
                    )}

                    {/* Knowledge Map Section */}
                    {activeSection === 'knowledge' && (
                        <div className="section-content knowledge-content">
                            <div className="section-intro">
                                <h2>
                                    <img src={conceptMapIcon} alt="" width={22} height={22} aria-hidden="true" style={{ verticalAlign: 'text-bottom', marginRight: 8 }} />
                                    {isEn ? 'Concept Map' : 'Bản Đồ Khái Niệm'}
                                </h2>
                                <p>{isEn ? 'See how goods, money, services, market mechanisms, and state roles connect.' : 'Xem cách các khái niệm hàng hóa, tiền tệ, dịch vụ, cơ chế thị trường và vai trò Nhà nước liên kết với nhau.'}</p>
                            </div>
                            <KnowledgeMap />
                        </div>
                    )}
                </div>
            </main>

            {/* Quick Links Section */}
            <section className="quick-links-section">
                <div className="quick-links-container">
                    <h3><img src={linkIcon} alt="" width={18} height={18} aria-hidden="true" style={{ verticalAlign: 'text-bottom', marginRight: 6 }} />{isEn ? 'Quick Links (Chapter 2)' : 'Liên Kết Nhanh (Chương 2)'}</h3>
                    <div className="quick-links-grid">
                        <a href={isEn ? '/chapter2/money/en' : '/chapter2/money'} className="quick-link-card theory">
                            <div className="card-icon"><img src={moneyIcon} alt="" width={22} height={22} aria-hidden="true" /></div>
                            <div className="card-content">
                                <h4>{isEn ? 'Money' : 'Tiền Tệ'}</h4>
                                <p>{isEn ? 'Origins, nature, functions, and circulation laws' : 'Nguồn gốc, bản chất, chức năng và quy luật lưu thông'}</p>
                            </div>
                        </a>

                        <a href={isEn ? '/chapter2/services/en' : '/chapter2/services'} className="quick-link-card role">
                            <div className="card-icon"><img src={servicesIcon} alt="" width={22} height={22} aria-hidden="true" /></div>
                            <div className="card-content">
                                <h4>{isEn ? 'Services' : 'Dịch Vụ'}</h4>
                                <p>{isEn ? 'Nature of services and special exchange relations' : 'Bản chất dịch vụ & các quan hệ trao đổi đặc thù'}</p>
                            </div>
                        </a>

                        <a href={isEn ? '/chapter2/market-concepts/en' : '/chapter2/market-concepts'} className="quick-link-card future">
                            <div className="card-icon"><img src={marketIcon} alt="" width={22} height={22} aria-hidden="true" /></div>
                            <div className="card-content">
                                <h4>{isEn ? 'Market Concepts' : 'Khái Niệm Thị Trường'}</h4>
                                <p>{isEn ? 'Definition, types, and roles of markets' : 'Khái niệm, phân loại và vai trò của thị trường'}</p>
                            </div>
                        </a>

                        <a href={isEn ? '/chapter2/market-economy/en' : '/chapter2/market-economy'} className="quick-link-card conclusion">
                            <div className="card-icon"><img src={marketEconomyIcon} alt="" width={22} height={22} aria-hidden="true" /></div>
                            <div className="card-content">
                                <h4>{isEn ? 'Market Economy' : 'Kinh Tế Thị Trường'}</h4>
                                <p>{isEn ? 'Core features, key laws, and the role of the state' : 'Đặc trưng, các quy luật chủ yếu & vai trò Nhà nước'}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CombinedKnowledgePage;