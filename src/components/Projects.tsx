import React from 'react';
import { ExternalLink } from 'lucide-react';

const projectData = [
  {
    title: 'Full-Stack E-Commerce Platform',
    context: 'A growing retail business needed to modernize their online presence to handle increased traffic and improve customer experience.',
    challenge: 'Legacy system was slow, could not handle peak loads, and lacked real-time inventory management.',
    approach: 'Built from scratch using Next.js for frontend, Node.js/Express for backend, and PostgreSQL for database. Implemented Redis caching and Stripe integration.',
    solution: 'Complete e-commerce platform with real-time inventory, secure payments, admin dashboard, and mobile-responsive design.',
    results: 'Reduced page load time by 60%, increased conversion rate by 34%, and handled 10x traffic during peak seasons.',
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    links: {
      live: '#',
      github: '#'
    }
  },
  {
    title: 'Cloud Database Optimization Tool',
    context: 'Enterprise clients were struggling with Azure SQL database performance issues and lacked visibility into query optimization.',
    challenge: 'Manual query analysis was time-consuming and required deep expertise that was not always available.',
    approach: 'Developed a monitoring tool using Python and Azure APIs with real-time query analysis and ML-based optimization suggestions.',
    solution: 'Automated performance monitoring platform with execution plan analysis, indexing recommendations, and alert system.',
    results: 'Reduced database troubleshooting time by 70% and improved query performance by an average of 45% for clients.',
    tech: ['Python', 'Azure SQL', 'FastAPI', 'React', 'Machine Learning'],
    links: {
      live: '#',
      github: '#'
    }
  },
  {
    title: 'Web3 Token Dashboard',
    context: 'Cryptocurrency investors needed a better way to track their Internet Computer (ICP) token investments across multiple wallets.',
    challenge: 'Existing tools were fragmented, lacked real-time updates, and did not support ICP ecosystem tokens.',
    approach: 'Built a decentralized dashboard using React and ICP blockchain integration with real-time price feeds and portfolio tracking.',
    solution: 'Comprehensive dashboard with multi-wallet support, real-time price updates, portfolio analytics, and transaction history.',
    results: 'Launched with 500+ active users in first month, handling 50,000+ API calls daily with 99.9% uptime.',
    tech: ['React', 'ICP', 'Rust', 'TypeScript', 'Web3'],
    links: {
      live: '#',
      github: '#'
    }
  },
  {
    title: 'AI-Powered Code Review Assistant',
    context: 'Development teams were spending significant time on code reviews with inconsistent quality and missed security vulnerabilities.',
    challenge: 'Manual code reviews were slow, inconsistent, and often missed critical security issues and performance problems.',
    approach: 'Built an AI-powered tool using TensorFlow for code analysis, with custom rules for security patterns and performance optimization.',
    solution: 'Automated code review platform with real-time feedback, security vulnerability detection, and performance suggestions.',
    results: 'Reduced code review time by 50%, caught 40% more security issues, and improved code quality scores by 35%.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React', 'NLP'],
    links: {
      live: '#',
      github: '#'
    }
  },
  {
    title: 'Real-Time Collaboration Platform',
    context: 'Remote teams needed better tools for real-time collaboration on documents and projects with integrated communication.',
    challenge: 'Existing tools were either too complex or lacked the real-time features needed for effective remote collaboration.',
    approach: 'Built a collaborative platform using WebSockets for real-time updates, with integrated video conferencing and project management.',
    solution: 'All-in-one collaboration platform with real-time document editing, video calls, task management, and team chat.',
    results: 'Adopted by 20+ teams, reduced meeting times by 30%, and improved project completion rates by 25%.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'WebRTC'],
    links: {
      live: '#',
      github: '#'
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
            Featured <span className="gradient-text">Case Studies</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className={`project-card reveal reveal-delay-${index + 1}`} key={project.title}>
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
                  <a href={project.links.live} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.links.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} /> GitHub
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
