import React from 'react';

const skillData = [
  {
    icon: '💻',
    title: 'Frontend Engineering',
    tags: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Flexbox & Grid', 'Responsive Design'],
  },
  {
    icon: '⚙️',
    title: 'Backend Engineering',
    tags: ['Node.js', 'Express.js', 'RESTful APIs', 'Python', 'NPM', 'Asynchronous JS', 'Middleware Architecture'],
  },
  {
    icon: '🛢️',
    title: 'Databases & SQL',
    tags: ['Azure SQL Database', 'PostgreSQL', 'MySQL', 'SQL Server', 'CTEs & Window Functions', 'Query Optimization', 'DMVs & Query Store', 'Indexing Strategies'],
  },
  {
    icon: '🔒',
    title: 'Security & Auth',
    tags: ['OAuth 2.0', 'Passport.js', 'bcrypt', 'Session Management', 'Web Security', 'API Protection'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Workflows',
    tags: ['Git & GitHub', 'VS Code', 'Postman', 'Linux / Command Line', 'Azure Data Factory', 'Vercel Deployment'],
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
