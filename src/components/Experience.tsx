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
              <h3>Full-Stack Developer & Cloud Database Engineer</h3>
              <span className="exp-company">Independent Practice</span>
              <ul className="exp-list">
                <li>Architected production-ready full-stack web applications using React.js, Next.js (App Router), and Node.js/Express.js with secure OAuth 2.0 authentication.</li>
                <li>Designed and optimized relational schemas in PostgreSQL and Azure SQL, writing complex queries and evaluating execution plans to eliminate bottlenecks.</li>
                <li>Built robust Python scraping pipelines to automate web data collection, converting unstructured data into structured relational datasets.</li>
                <li>Developed decentralized applications on the Internet Computer (ICP) ecosystem, writing smart contracts and deploying token logic.</li>
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
