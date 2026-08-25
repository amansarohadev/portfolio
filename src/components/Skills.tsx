import React from 'react';

const skillData = [
  {
    icon: '💻',
    title: 'Languages',
    tags: ['C', 'C++', 'JavaScript (ES6+)', 'TypeScript', 'SQL'],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'API Development', 'OAuth 2.0', 'Passport.js', 'Middleware Architecture', 'Authentication'],
  },
  {
    icon: '🛢️',
    title: 'Databases',
    tags: ['PostgreSQL', 'MySQL', 'SQL Server', 'Azure SQL Database', 'Query Optimization', 'Indexing Strategies', 'CTEs & Window Functions', 'DMVs & Query Store'],
  },
  {
    icon: '🛠️',
    title: 'Engineering / Tools',
    tags: ['Git & GitHub', 'VS Code', 'Postman', 'Linux / CLI', 'Vercel Deployment'],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="section" id="skills">
      <div className="section-inner">
        <div className="section-header reveal">
          <div className="section-label">What I Work With</div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Arsenal</span>
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
