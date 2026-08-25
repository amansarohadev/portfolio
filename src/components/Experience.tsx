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
              <h3>Backend Engineer & Software Developer</h3>
              <span className="exp-company">Independent Engineering Practice</span>
              <ul className="exp-list">
                <li>Designed and built RESTful APIs using Node.js and Express.js with clean route architecture, middleware patterns, and secure authentication flows (OAuth 2.0, Passport.js).</li>
                <li>Engineered and optimized relational database schemas in PostgreSQL and MySQL — advanced CTEs, window functions, indexing strategies, and execution plan analysis.</li>
                <li>Built automated data extraction pipelines using Python to harvest, transform, and structure unstructured web data into relational datasets.</li>
                <li>Developed production-grade web applications with TypeScript, focusing on clean code, modular architecture, and maintainable codebases.</li>
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
