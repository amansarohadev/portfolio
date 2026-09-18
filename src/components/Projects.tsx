import React from 'react';
import { ExternalLink } from 'lucide-react';

const projectData = [
  {
    title: 'Vendor Performance Analysis & Retail Analytics Pipeline',
    context: 'End-to-end retail business analytics pipeline evaluating vendor reliability, delivery SLAs, and profit margins across a 2GB+ transactional dataset.',
    challenge: 'Handling multi-million row transactional files, identifying vendor defect trends, and generating actionable procurement insights.',
    approach: 'Engineered automated ETL pipelines in Python using SQLAlchemy and Pandas, computed statistical metrics, and built interactive Power BI drill-down reports.',
    solution: 'Integrated analytics solution tracking fulfillment rates, return frequencies, and pricing discrepancies across supply chain vendors.',
    results: 'Surfaced critical vendor SLA delays and delivered executive dashboards that streamlined procurement and inventory decision-making.',
    tech: ['Python', 'SQLAlchemy', 'Power BI', 'Pandas', 'Statistical Analysis', 'ETL'],
    links: {
      github: 'https://github.com/amansarohadev/Vendor-Performance-Analysis'
    }
  },
  {
    title: 'SQL Analytics & Query Optimization Portfolio',
    context: 'Comprehensive analytical SQL repository addressing complex business scenarios, data warehousing logic, and relational transformations.',
    challenge: 'Solving multi-table joining bottlenecks, computing running totals, rolling averages, and optimizing slow-running business queries.',
    approach: 'Engineered advanced T-SQL, PostgreSQL, and MySQL queries utilizing recursive CTEs, window functions (ROW_NUMBER, DENSE_RANK, LEAD/LAG), and indexing.',
    solution: 'Structured collection of production-grade business queries tailored for reporting layers and relational data models.',
    results: 'Drastically reduced query execution times, eliminated table scan overhead, and simplified complex analytical reporting logic.',
    tech: ['T-SQL', 'PostgreSQL', 'MySQL', 'Window Functions', 'CTEs', 'Query Tuning'],
    links: {
      github: 'https://github.com/amansarohadev/sql-mastery-portfolio'
    }
  },
  {
    title: 'HR Relational Analytics & Attrition System',
    context: 'Enterprise-grade relational database design, workforce attrition analysis, and reporting schema.',
    challenge: 'Designing normalized relational tables, computing department-level turnover rates, and optimizing analytical queries for dashboard consumption.',
    approach: 'Modeled relational schemas from scratch in MySQL (3NF), created analytical views, and structured aggregation queries for KPI tracking.',
    solution: 'High-performance HR data architecture facilitating rapid querying of compensation, tenure, and department performance metrics.',
    results: 'Achieved sub-second query response times with optimized indexing, powering visual dashboards for HR leadership.',
    tech: ['MySQL', 'Relational Design', 'Indexing', 'Views', 'Aggregations'],
    links: {
      github: 'https://github.com/amansarohadev/hr-analytics-mysql'
    }
  },
  {
    title: 'Automated Web Data Extraction & ETL Pipeline',
    context: 'Automated data collection and ingestion engine harvesting market prices and product data into structured tabular datasets.',
    challenge: 'Extracting data across dynamic web pages, managing rate limiting and pagination, and ensuring clean schema outputs.',
    approach: 'Built resilient Python scrapers using BeautifulSoup, Requests, and Pandas with custom error handling, throttling, and automated CSV structuring.',
    solution: 'End-to-end data pipeline that extracts, parses, cleans, and exports structured datasets automatically for analysis.',
    results: 'Automated 100% of repetitive data gathering tasks with zero downtime, producing clean, structured feeds ready for analysis.',
    tech: ['Python', 'BeautifulSoup', 'Requests', 'Pandas', 'ETL Automation'],
    links: {
      github: 'https://github.com/amansarohadev/web-scraping'
    }
  },
  {
    title: 'Executive Sales & Operations Dashboard',
    context: 'Dynamic business intelligence dashboard modeling global sales trends, regional product margins, and customer demographic segments.',
    challenge: 'Consolidating dirty multi-year transaction data into an automated, interactive reporting tool without performance lag.',
    approach: 'Utilized Advanced Excel formulas (XLOOKUP, SUMIFS), Power Query data normalization, dynamic pivot tables, and interactive slicers.',
    solution: 'User-friendly executive reporting dashboard delivering real-time visibility into revenue targets, profit margins, and volume fluctuations.',
    results: 'Cut monthly reporting compilation time by 80% and enabled regional managers to self-serve sliceable performance KPIs.',
    tech: ['Microsoft Excel', 'XLOOKUP', 'Pivot Tables', 'Power Query', 'Power BI'],
    links: {
      github: 'https://github.com/amansarohadev'
    }
  }
];

const Projects: React.FC = () => {
  return (
    <section className="section" id="projects">
      <div className="section-inner">
        <div className="section-header reveal">
          <div className="section-label">What I've Built</div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Analytics Projects</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className={`project-card reveal reveal-delay-${(index % 3) + 1}`} key={project.title}>
              <div className="project-content">
                <h3>{project.title}</h3>
                
                <div className="case-study-section">
                  <h4>Context</h4>
                  <p>{project.context}</p>
                </div>

                <div className="case-study-section">
                  <h4>Challenge</h4>
                  <p>{project.challenge}</p>
                </div>

                <div className="case-study-section">
                  <h4>Approach</h4>
                  <p>{project.approach}</p>
                </div>

                <div className="case-study-section">
                  <h4>Solution</h4>
                  <p>{project.solution}</p>
                </div>

                <div className="case-study-section case-study-results">
                  <h4>Results</h4>
                  <p>{project.results}</p>
                </div>

                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.links.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} /> View Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
