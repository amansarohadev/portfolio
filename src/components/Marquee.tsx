import React from 'react';

const techs = [
  'SQL', 'Power BI', 'Advanced Excel', 'Python', 'Pandas', 'Azure SQL',
  'MySQL', 'PostgreSQL', 'Tableau', 'Databricks', 'AWS', 'ETL Pipelines',
  'SQL', 'Power BI', 'Advanced Excel', 'Python', 'Pandas', 'Azure SQL',
  'MySQL', 'PostgreSQL', 'Tableau', 'Databricks', 'AWS', 'ETL Pipelines',
];

const Marquee: React.FC = () => {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {techs.map((tech, i) => (
          <span className="marquee-item" key={i}>
            <span className="dot"></span>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
