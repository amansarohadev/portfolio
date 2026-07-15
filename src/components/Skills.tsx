import React from 'react';

const skillData = [
  {
    icon: '🛢️',
    title: 'Databases & Cloud',
    tags: ['Azure SQL', 'PostgreSQL', 'SQL Server', 'Query Optimization', 'DMVs', 'Query Store', 'Indexing Strategies', 'Execution Plans', 'Data Modeling'],
  },
  {
    icon: '⚙️',
    title: 'Backend Engineering',
    tags: ['Node.js', 'Express.js', 'JavaScript ES6+', 'Python', 'REST APIs', 'Web Scraping', 'NPM'],
  },
  {
    icon: '🎨',
    title: 'Frontend Engineering',
    tags: ['React.js', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SSR / SSG', 'App Router'],
  },
  {
    icon: '🔒',
    title: 'Security & DevOps',
    tags: ['OAuth 2.0', 'Passport.js', 'bcrypt', 'Session Management', 'Git & GitHub', 'Linux CLI', 'API Integrations'],
  },
  {
    icon: '🔗',
    title: 'Web3 & Blockchain',
    tags: ['Internet Computer (ICP)', 'Smart Contracts', 'Token Logic', 'NFT Minting', 'Blockchain Fundamentals'],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="section" id="skills">
      <div className="section-inner">
        <div className="section-header reveal">
          <div className="section-label">What I Work With</div>
          <h2 className="section-title">
            My Technical <span className="gradient-text">Arsenal</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillData.map((skill, index) => (
            <div className={`skill-card reveal reveal-delay-${index + 1}`} key={skill.title}>
              <div className="skill-card-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <div className="skill-tags">
                {skill.tags.map(tag => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
