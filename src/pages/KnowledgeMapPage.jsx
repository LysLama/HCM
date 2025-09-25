import React from 'react';
import KnowledgeMap from '../components/KnowledgeMap';
import '../styles/Section.css';

const KnowledgeMapPage = () => {
    return (
        <div className="page-container">
            {/* Hero Section */}
            <header className="section-hero" style={{
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
            }}>
                <div className="hero-overlay"></div>
                <h1 className="section-hero-title">Bản Đồ Tri Thức</h1>
            </header>

            {/* Main Content */}
            <main className="section-main-content">
                <KnowledgeMap />
            </main>
        </div>
    );
};

export default KnowledgeMapPage;