import React from 'react';
import ReadingProgressDashboard from '../components/ReadingProgressDashboard';
import '../styles/Section.css';

const ProgressPage = () => {
    return (
        <div className="page-container">
            {/* Hero Section */}
            <header className="section-hero" style={{
                background: 'linear-gradient(135deg, #22c55e 0%, #16a085 100%)'
            }}>
                <div className="hero-overlay"></div>
                <h1 className="section-hero-title">Tiến Trình Học Tập</h1>
            </header>

            {/* Main Content */}
            <main className="section-main-content">
                <ReadingProgressDashboard />
            </main>
        </div>
    );
};

export default ProgressPage;