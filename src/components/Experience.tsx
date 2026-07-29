import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="section" id="experience">
      <div className="section-inner">
        <div className="section-header reveal">
          <div className="section-label">Where I've Been</div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="experience-grid">
          <div className="exp-card reveal">
            <div className="exp-meta">
              <span className="exp-date">2024 — Present</span>
              <span className="exp-type">Remote · Self-Employed</span>
            </div>
            <div className="exp-content">
              <h3>Full-Stack Developer & Database Specialist</h3>
              <span className="exp-company">Independent Engineering Practice</span>
              <ul className="exp-list">
                <li>Architected production-ready full-stack web applications using React.js, Next.js (App Router), and Node.js/Express.js with secure authentication patterns.</li>
                <li>Designed and optimized relational database schemas in PostgreSQL and MySQL, engineering advanced CTEs, window functions, and execution plans.</li>
                <li>Built robust Python web scraping and automation pipelines to harvest and transform unstructured data into relational datasets.</li>
                <li>Developed modular frontend interfaces and API components adhering to modern JavaScript (ES6+), TypeScript, and responsive design standards.</li>
              </ul>
            </div>
          </div>

          <div className="exp-card reveal reveal-delay-2">
            <div className="exp-meta">
              <span className="exp-date">Prior — Dec 2023</span>
              <span className="exp-type">On-site · Microsoft Vendor</span>
            </div>
            <div className="exp-content">
              <h3>Azure SQL Database Support Engineer</h3>
              <span className="exp-company">HCL Technologies</span>
              <ul className="exp-list">
                <li>Diagnosed and mitigated enterprise-level Azure SQL Database performance bottlenecks using DMVs, Extended Events, and Query Store.</li>
                <li>Analyzed complex query execution plans and indexing strategies to reduce high CPU utilization and I/O latency for enterprise clients.</li>
                <li>Troubleshot and resolved engine concurrency issues, including complex blocking chains, deadlocks, and resource contention.</li>
                <li>Provided deep-tier technical support for Azure SQL infrastructure, network connectivity, firewall rules, and access management.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
