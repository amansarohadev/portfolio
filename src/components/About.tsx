import React from 'react';
import realImage from '../assets/real_image.jpg';

const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className="section-header reveal">
          <div className="section-label">About Me</div>
          <h2 className="section-title">
            The Analyst Behind <span className="gradient-text">The Insights</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text reveal">
            <p className="about-intro">
              I'm a Data Analyst and Database Operations Specialist who bridges the gap between complex relational databases and high-impact business decisions.
            </p>

            <p>
              My background is anchored in enterprise relational systems. During my 14 months at <strong>HCL Technologies (Oct 2022 – Dec 2023) supporting Microsoft Azure SQL Database</strong>, I diagnosed and resolved real-world database performance bottlenecks, investigated complex query execution plans, and ensured mission-critical data availability for enterprise clients.
            </p>

            <p>
              Today, I channel that deep SQL and cloud infrastructure foundation into end-to-end analytics — transforming messy transactional datasets into executive <strong>Power BI dashboards, Advanced Excel financial & operational models, and automated Python (Pandas) ETL workflows</strong> that save hours of manual reporting time.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">📊</div>
                <div className="highlight-content">
                  <h4>Business Insights</h4>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">🗄️</div>
                <div className="highlight-content">
                  <h4>SQL & DB Architecture</h4>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <div className="highlight-content">
                  <h4>Automated Reporting</h4>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">☁️</div>
                <div className="highlight-content">
                  <h4>Azure Certified (AZ-104)</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image reveal reveal-delay-2">
            <div className="about-image-wrapper">
              <img src={realImage} alt="Aman Saroha — Data Analyst" className="about-portrait" />
              <div className="about-image-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
