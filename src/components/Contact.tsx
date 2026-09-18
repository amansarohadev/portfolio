import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner reveal">
        <div className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</div>
        <h2>
          Let's unlock value from<br />
          <span className="gradient-text">your business data.</span>
        </h2>
        <p>
          Whether you need a Data Analyst, a Database Operations Specialist, or someone who automates
          complex reporting workflows and builds intuitive dashboards — I'm ready to bring immediate value to your team.
        </p>
        <a href="mailto:amansarohadev@gmail.com" className="contact-email">
          <Mail size={18} />
          amansarohadev@gmail.com
          <ArrowUpRight size={14} />
        </a>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <a href="https://linkedin.com/in/amansarohadev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/amansarohadev" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://instagram.com/amansaroha98" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p>Designed & Built by Aman Saroha · {new Date().getFullYear()}</p>
      </footer>
    </section>
  );
};

export default Contact;
