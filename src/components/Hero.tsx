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
            Building systems<br />
            <span className="line-2"><span className="gradient-text">that scale.</span></span>
          </h1>

          <div className="hero-role">Backend Engineer · Software Developer</div>

          <p className="hero-description">
            I don't just write code — I <strong>obsess over what's under the hood</strong>. 
            From query execution plans to API architecture, I build backend systems where 
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
          <div className="hero-code-window">
            <div className="code-window-header">
              <div className="code-dots">
                <span className="code-dot"></span>
                <span className="code-dot"></span>
                <span className="code-dot"></span>
              </div>
              <span className="code-filename">engineer.ts</span>
            </div>
            <div className="code-body">
              <div className="code-line">
                <span className="code-ln">1</span>
                <span className="code-keyword">const</span> <span className="code-var">engineer</span> <span className="code-op">=</span> <span className="code-bracket">{'{'}</span>
              </div>
              <div className="code-line">
                <span className="code-ln">2</span>
                <span className="code-indent"></span><span className="code-prop">name</span><span className="code-op">:</span> <span className="code-string">"Aman Saroha"</span><span className="code-op">,</span>
              </div>
              <div className="code-line">
                <span className="code-ln">3</span>
                <span className="code-indent"></span><span className="code-prop">role</span><span className="code-op">:</span> <span className="code-string">"Backend Engineer"</span><span className="code-op">,</span>
              </div>
              <div className="code-line">
                <span className="code-ln">4</span>
                <span className="code-indent"></span><span className="code-prop">stack</span><span className="code-op">:</span> <span className="code-bracket">[</span><span className="code-string">"Node"</span><span className="code-op">,</span> <span className="code-string">"TS"</span><span className="code-op">,</span> <span className="code-string">"SQL"</span><span className="code-bracket">]</span><span className="code-op">,</span>
              </div>
              <div className="code-line">
                <span className="code-ln">5</span>
                <span className="code-indent"></span><span className="code-prop">focus</span><span className="code-op">:</span> <span className="code-string">"APIs & Databases"</span><span className="code-op">,</span>
              </div>
              <div className="code-line">
                <span className="code-ln">6</span>
                <span className="code-indent"></span><span className="code-prop">status</span><span className="code-op">:</span> <span className="code-string">"building"</span><span className="code-op">,</span>
              </div>
              <div className="code-line">
                <span className="code-ln">7</span>
                <span className="code-bracket">{'}'}</span><span className="code-op">;</span>
              </div>
              <div className="code-line code-line-empty">
                <span className="code-ln">8</span>
              </div>
              <div className="code-line">
                <span className="code-ln">9</span>
                <span className="code-comment">// clean code · scalable systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
