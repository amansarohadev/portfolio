import React from 'react';
import realImage from '../assets/real_image.jpg';

const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className="section-header reveal">
          <div className="section-label">About Me</div>
          <h2 className="section-title">
            The Person Behind <span className="gradient-text">The Code</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text reveal">
            <p className="about-intro">
              I'm a Full-Stack Developer and Cloud Database Engineer who obsesses over performance, scalability, and clean architecture. I don't just write code — I build systems that actually work at scale.
            </p>

            <p>
              My journey started with a curiosity about how things work under the hood. From query execution plans to React component trees, I've always been drawn to understanding the deeper mechanics of technology. This obsession with fundamentals has shaped my approach to engineering — I don't settle for solutions that "just work," I build solutions that work efficiently, reliably, and at scale.
            </p>

            <p>
              Currently, I'm focused on building production-ready applications using modern technologies like React, Next.js, Node.js, and cloud databases. I have deep expertise in database optimization, having worked as an Azure SQL Database Support Engineer where I diagnosed and resolved complex performance issues for enterprise clients.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-content">
                  <h4>Problem-First Approach</h4>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <div className="highlight-content">
                  <h4>Performance Obsessed</h4>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h4>Scalability Mindset</h4>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">🔧</div>
                <div className="highlight-content">
                  <h4>Full-Stack Perspective</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image reveal reveal-delay-2">
            <div className="about-image-wrapper">
              <img src={realImage} alt="Aman — Software Engineer" className="about-portrait" />
              <div className="about-image-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
