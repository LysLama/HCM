import React from 'react';
import InteractiveTimeline from '../components/InteractiveTimeline';
import '../styles/Section.css';

const TimelinePage = () => {
    return (
        <div className="page-container">
            {/* Hero Section */}
            <header className="section-hero" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
                <div className="hero-overlay"></div>
                <h1 className="section-hero-title">Dòng Thời Gian Lịch Sử</h1>
            </header>

            {/* Main Content */}
            <main className="section-main-content">
                <InteractiveTimeline />
            </main>
        </div>
    );
};

export default TimelinePage;