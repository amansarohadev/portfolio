import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import portrait from '../assets/portrait.png';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="status-pill">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <h1>
            Building systems<br />
            <span className="line-2"><span className="gradient-text">that scale.</span></span>
          </h1>

          <div className="hero-role">Full-Stack Developer & Cloud Engineer</div>

          <p className="hero-description">
            I don't just write code — I <strong>obsess over what's under the hood</strong>. 
            From query execution plans to React component trees, I build applications where 
            performance is the architecture, not an afterthought.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Get in Touch <ArrowRight size={16} />
            </a>
            <a href="/resume.pdf" download className="btn-secondary">
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1+</div>
              <div className="stat-label">Years Exp</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Domains</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit-ring"><span className="orbit-dot"></span></div>
          <div className="orbit-ring"><span className="orbit-dot"></span></div>
          <div className="orbit-ring"><span className="orbit-dot"></span></div>
          <div className="hero-portrait-wrapper">
            <div className="portrait-ring"></div>
            <img src={portrait} alt="Aman — Software Engineer" className="hero-portrait-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
