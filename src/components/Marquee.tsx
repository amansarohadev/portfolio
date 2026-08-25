import React from 'react';

const techs = [
  'C', 'C++', 'Node.js', 'TypeScript', 'PostgreSQL', 'REST APIs',
  'Express.js', 'SQL', 'OAuth 2.0', 'MySQL', 'Git', 'Azure SQL',
  'C', 'C++', 'Node.js', 'TypeScript', 'PostgreSQL', 'REST APIs',
  'Express.js', 'SQL', 'OAuth 2.0', 'MySQL', 'Git', 'Azure SQL',
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
