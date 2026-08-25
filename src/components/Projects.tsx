import React from 'react';
import { ExternalLink } from 'lucide-react';

const projectData = [
  {
    title: 'Backend API & Web Engineering Hub',
    context: 'Backend-driven web applications with REST API development, server-side routing, and database integration.',
    challenge: 'Designing scalable API architectures, handling authentication flows, and structuring modular backend codebases.',
    approach: 'Built using Node.js and Express.js with structured REST API routes, middleware patterns, and clean separation of concerns.',
    solution: 'Production-ready backend modules featuring RESTful endpoints, dynamic data handling, and secure API patterns.',
    results: 'Solid backend architecture demonstrating API design, route handling, middleware composition, and server-side logic.',
    tech: ['Node.js', 'Express.js', 'REST APIs', 'JavaScript (ES6+)'],
    links: {
      github: 'https://github.com/amansarohadev/full-stack-developer'
    }
  },
  {
    title: 'SQL Mastery & Database Engineering Portfolio',
    context: 'Enterprise database engineering focusing on complex data modeling, query architecture, and performance optimization.',
    challenge: 'Solving high-workload database bottlenecks, unoptimized multi-table JOINs, and complex data aggregations.',
    approach: 'Engineered advanced T-SQL, PostgreSQL, and MySQL queries utilizing CTEs, Window Functions, and strategic indexing.',
    solution: 'Comprehensive SQL engineering repository tackling real-world business scenarios and query execution optimization.',
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
    approach: 'Built resilient scrapers using Python, BeautifulSoup, and Pandas with custom exception handling and request delays.',
    solution: 'End-to-end data pipeline that extracts, parses, cleans, and exports structured datasets automatically.',
    results: 'Automated 100% of data extraction tasks with high fault tolerance and clean tabular outputs.',
    tech: ['Python', 'BeautifulSoup', 'Requests', 'Pandas', 'Automation'],
    links: {
      github: 'https://github.com/amansarohadev/web-scraping'
    }
  },
  {
    title: 'Discover India Web Platform',
    context: 'A structured web application showcasing the culture, history, and geography of India through clean semantic architecture.',
    challenge: 'Building a performant, responsive content platform from scratch without external frameworks or CSS libraries.',
    approach: 'Engineered from the ground up using HTML5 semantic markup, custom CSS3 architecture, and structured content organization.',
    solution: 'Content-driven platform with clean code structure, cross-device compatibility, and optimized load performance.',
    results: 'Fully custom codebase with zero dependencies, fast page loads, and maintainable content architecture.',
    tech: ['HTML5', 'CSS3', 'Responsive Design'],
    links: {
      github: 'https://github.com/amansarohadev/discover-india'
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
