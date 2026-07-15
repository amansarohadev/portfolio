import React from 'react';

const techs = [
  'React.js', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Azure SQL',
  'Express.js', 'Python', 'OAuth 2.0', 'Web3 / ICP', 'Git', 'REST APIs',
  'React.js', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Azure SQL',
  'Express.js', 'Python', 'OAuth 2.0', 'Web3 / ICP', 'Git', 'REST APIs',
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
