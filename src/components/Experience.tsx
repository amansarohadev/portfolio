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
              <span className="exp-type">Remote · Freelance</span>
            </div>
            <div className="exp-content">
              <h3>Data Analyst & Database Consultant</h3>
              <span className="exp-company">Independent Client Engagements</span>
              <ul className="exp-list">
                <li>Designed and deployed interactive Power BI dashboards and Advanced Excel reporting models (KPI scorecards, SLA tracking, trend analysis) for business decision-makers.</li>
                <li>Engineered complex T-SQL, MySQL, and PostgreSQL queries using CTEs, Window Functions (DENSE_RANK, ROW_NUMBER), subqueries, and views to extract business metrics from multi-million row datasets.</li>
                <li>Developed Python (Pandas, NumPy, SQLAlchemy) scripts to automate repetitive ETL data workflows, reducing manual Excel consolidation time by over 70%.</li>
                <li>Built resilient web scraping pipelines (BeautifulSoup, Requests) with error-handling and automated database ingestion.</li>
              </ul>
            </div>
          </div>

          <div className="exp-card reveal reveal-delay-2">
            <div className="exp-meta">
              <span className="exp-date">Oct 2022 — Dec 2023</span>
              <span className="exp-type">14 Months · On-site Microsoft Engagement</span>
            </div>
            <div className="exp-content">
              <h3>Azure SQL Database Support Engineer</h3>
              <span className="exp-company">HCL Technologies</span>
              <ul className="exp-list">
                <li>Diagnosed and mitigated enterprise-level Microsoft Azure SQL Database performance bottlenecks using DMVs, Extended Events, and Query Store.</li>
                <li>Analyzed complex query execution plans and indexing strategies to eliminate high CPU utilization and I/O latency for enterprise clients.</li>
                <li>Troubleshot and resolved relational engine concurrency issues, including complex blocking chains, deadlocks, and resource contention.</li>
                <li>Provided deep-tier technical support for Azure cloud infrastructure, network connectivity, firewall rules, and security compliance.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
