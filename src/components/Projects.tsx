import React from 'react';
import { ExternalLink } from 'lucide-react';

const projectData = [
  {
    title: 'Discover India Web Platform',
    context: 'A modern web application showcasing the rich culture, history, and beauty of India.',
    challenge: 'Creating a highly responsive, visual, and fast-loading web interface using clean semantic layout principles without external CSS frameworks.',
    approach: 'Built from scratch utilizing HTML5, custom CSS3, Flexbox/Grid, and responsive design best practices.',
    solution: 'Interactive frontend platform with smooth layouts, cross-device compatibility, and structured content sections.',
    results: 'Clean semantic codebase with 100% custom styling, fast page load speeds, and intuitive user navigation.',
    tech: ['HTML5', 'CSS3', 'Flexbox', 'Responsive Design'],
    links: {
      github: 'https://github.com/amansarohadev/discover-india'
    }
  },
  {
    title: 'Full-Stack Development Hub',
    context: 'Interactive full-stack web applications and backend API integrations built during modern web engineering development.',
    challenge: 'Building scalable full-stack features, dynamic state handling, and structured REST API routes.',
    approach: 'Developed using modern JavaScript (ES6+), Node.js, Express.js backend API routes, and clean modular components.',
    solution: 'Production-ready web modules featuring user interaction, dynamic data rendering, and backend integration.',
    results: 'Solid full-stack architecture demonstrating frontend component state management combined with RESTful API backends.',
    tech: ['JavaScript (ES6+)', 'Node.js', 'Express.js', 'REST APIs', 'HTML5/CSS3'],
    links: {
      github: 'https://github.com/amansarohadev/full-stack-developer'
    }
  },
  {
    title: 'SQL Mastery & Database Architecture Portfolio',
    context: 'Enterprise database query engineering focusing on complex data modeling and query optimization.',
    challenge: 'Solving high-workload database bottlenecks, unoptimized multi-table JOINs, and complex data aggregations.',
    approach: 'Engineered advanced T-SQL, PostgreSQL, and MySQL queries utilizing Common Table Expressions (CTEs), Window Functions, and strategic indexing.',
    solution: 'Comprehensive SQL architecture repository tackling real-world business scenarios and query execution optimization.',
    results: 'Drastically improved query execution times, reduced CPU/IO overhead, and clean relational database logic.',
    tech: ['T-SQL', 'PostgreSQL', 'MySQL', 'CTEs', 'Window Functions', 'Indexing'],
    links: {
      github: 'https://github.com/amansarohadev/sql-mastery-portfolio'
    }
  },
  {
    title: 'Relational HR Database Architecture',
    context: 'Enterprise-grade relational database design and analytical reporting schema.',
    challenge: 'Designing normalized relational tables, implementing efficient indexes, and optimizing analytical queries for dashboard consumption.',
    approach: 'Modeled relational schemas from scratch in MySQL, incorporating foreign key constraints, analytical views, and CTEs.',
    solution: 'High-performance HR relational system capable of handling complex employee data queries seamlessly.',
    results: 'Achieved optimal schema normalization (3NF) with optimized index scanning for instant data retrieval.',
    tech: ['MySQL', 'Database Design', 'Indexing', 'Views', 'SQL'],
    links: {
      github: 'https://github.com/amansarohadev/hr-analytics-mysql'
    }
  },
  {
    title: 'Web Data Scraping & Automation Pipeline',
    context: 'Automated data extraction pipeline to harvest unstructured web data into structured datasets.',
    challenge: 'Handling dynamic HTML changes, request throttling, rate limiting, and broken scraping connections.',
    approach: 'Built resilient Python scrapers using BeautifulSoup, Requests, and Pandas with custom exception handling and request delays.',
    solution: 'End-to-end web data pipeline that extracts, parses, cleans, and exports structured datasets automatically.',
    results: 'Automated 100% of data extraction tasks with high fault tolerance and clean tabular outputs.',
    tech: ['Python', 'BeautifulSoup', 'Requests', 'Pandas', 'Automation'],
    links: {
      github: 'https://github.com/amansarohadev/web-scraping'
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
            Featured <span className="gradient-text">Engineering Projects</span>
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
                    <ExternalLink size={16} /> View GitHub Repo
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
