import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

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
            Transforming data into<br />
            <span className="line-2"><span className="gradient-text">actionable insights.</span></span>
          </h1>

          <div className="hero-role">Data Analyst · Database Operations Specialist</div>

          <p className="hero-description">
            I bridge the gap between <strong>raw data and business decisions</strong>. 
            From advanced SQL querying and database optimization to interactive Power BI dashboards and Python automation pipelines, 
            I build data solutions that drive measurable business impact.
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
              <div className="stat-number">14M</div>
              <div className="stat-label">HCL Azure SQL</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">AZ-104</div>
              <div className="stat-label">Certified</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Queries & Reports</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-code-window">
            <div className="code-window-header">
              <div className="code-dots">
                <span className="code-dot"></span>
                <span className="code-dot"></span>
                <span className="code-dot"></span>
              </div>
              <span className="code-filename">analyst.py</span>
            </div>
            <div className="code-body">
              <div className="code-line">
                <span className="code-ln">1</span>
                <span className="code-keyword">analyst</span> <span className="code-op">=</span> <span className="code-bracket">{'{'}</span>
              </div>
              <div className="code-line">
                <span className="code-ln">2</span>
                <span className="code-indent"></span><span className="code-prop">"name"</span><span className="code-op">:</span> <span className="code-string">"Aman Saroha"</span><span className="code-op">,</span>
              </div>
              <div className="code-line">
                <span className="code-ln">3</span>
                <span className="code-indent"></span><span className="code-prop">"role"</span><span className="code-op">:</span> <span className="code-string">"Data Analyst"</span><span className="code-op">,</span>
              </div>
              <div className="code-line">
                <span className="code-ln">4</span>
                <span className="code-indent"></span><span className="code-prop">"stack"</span><span className="code-op">:</span> <span className="code-bracket">[</span><span className="code-string">"SQL"</span><span className="code-op">,</span> <span className="code-string" style={{ whiteSpace: 'nowrap' }}>"Power&nbsp;BI"</span><span className="code-op">,</span> <span className="code-string">"Excel"</span><span className="code-op">,</span> <span className="code-string">"Python"</span><span className="code-bracket">]</span><span className="code-op">,</span>
              </div>
              <div className="code-line">
                <span className="code-ln">5</span>
                <span className="code-indent"></span><span className="code-prop">"specialty"</span><span className="code-op">:</span> <span className="code-string">"BI & Azure SQL"</span><span className="code-op">,</span>
              </div>
              <div className="code-line">
                <span className="code-ln">6</span>
                <span className="code-indent"></span><span className="code-prop">"status"</span><span className="code-op">:</span> <span className="code-string">"ready_to_deploy"</span><span className="code-op">,</span>
              </div>
              <div className="code-line">
                <span className="code-ln">7</span>
                <span className="code-bracket">{'}'}</span>
              </div>
              <div className="code-line code-line-empty">
                <span className="code-ln">8</span>
              </div>
              <div className="code-line">
                <span className="code-ln">9</span>
                <span className="code-comment"># turning raw data into business value</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
