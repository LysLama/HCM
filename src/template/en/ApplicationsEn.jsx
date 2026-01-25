import React from 'react';
import '../../styles/Section.css';

const ApplicationsEn = () => {
  return (
    <div className="page-container">
      <header className="section-hero">
        <div className="hero-overlay" />
        <h1 className="section-hero-title">Applying the unity thought today</h1>
      </header>

      <main className="section-main-content">
        <div className="content-text">
          <p>
            This page focuses on <strong>practical applications</strong> of Ho Chi Minh’s thought on great national unity in today’s context.
          </p>

          <div className="callout info">
            <strong>Status</strong>
            <p style={{ margin: '6px 0 0' }}>
              A detailed “applications” section requires additional input sources (official press / authoritative documents). This page provides a
              reviewer-friendly outline; I will complete the content once sources are added.
            </p>
          </div>

          <h2>Proposed outline</h2>
          <ul>
            <li><strong>Unity and social consensus:</strong> cohesion, inclusion, reducing polarization.</li>
            <li><strong>Unity in diversity:</strong> ethnicity, religion, regions, generations; dialogue and mutual respect.</li>
            <li><strong>Unity in the digital era:</strong> information integrity, resilience against misinformation and division.</li>
            <li><strong>Unity in crises:</strong> disasters and public health; solidarity and community support.</li>
          </ul>

          <h2>Suggested high-credibility sources</h2>
          <ul>
            <li>Nhan Dan (nhandan.vn)</li>
            <li>VietnamPlus (vietnamplus.vn)</li>
            <li>VTV (vtv.vn) and VOV (vov.vn)</li>
          </ul>

          <h2>YouTube channels to search</h2>
          <ul>
            <li>VTV / VTV24 — search “great national unity”, “Vietnam Fatherland Front”, “Ho Chi Minh thought”.</li>
            <li>VOV / VOVTV — search “national unity bloc”, “social consensus”.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ApplicationsEn;
