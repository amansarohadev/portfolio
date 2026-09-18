import React from 'react';

const skillData = [
  {
    icon: '📊',
    title: 'BI & Visual Analytics',
    tags: ['Microsoft Power BI', 'Advanced Excel (XLOOKUP, Pivots)', 'Tableau', 'Data Visualization', 'DAX Measures', 'Power Query', 'Executive KPI Dashboards'],
  },
  {
    icon: '🛢️',
    title: 'Databases & SQL',
    tags: ['SQL', 'T-SQL', 'Microsoft Azure SQL Database', 'MySQL', 'PostgreSQL', 'Window Functions', 'CTEs & Subqueries', 'Query Optimization & Indexing'],
  },
  {
    icon: '🐍',
    title: 'Programming & Automation',
    tags: ['Python', 'Pandas', 'NumPy', 'SQLAlchemy', 'Extract, Transform, Load (ETL)', 'Web Scraping (BeautifulSoup)', 'Data Cleaning & Structuring'],
  },
  {
    icon: '☁️',
    title: 'Cloud Platforms & Tools',
    tags: ['Microsoft Azure (AZ-104)', 'Azure Fundamentals (AZ-900)', 'Amazon Web Services (AWS)', 'Databricks', 'Git & GitHub', 'Linux CLI'],
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
