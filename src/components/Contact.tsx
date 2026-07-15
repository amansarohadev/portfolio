import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner reveal">
        <div className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</div>
        <h2>
          Let's build something<br />
          <span className="gradient-text">extraordinary.</span>
        </h2>
        <p>
          Whether you need a database expert, a full-stack developer, or someone who can
          do both — I'm always open to discussing new opportunities and interesting projects.
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
          <a href="https://twitter.com/amansarohadev" target="_blank" rel="noopener noreferrer">X / Twitter</a>
        </div>
        <p>Designed & Built by Aman · {new Date().getFullYear()}</p>
      </footer>
    </section>
  );
};

export default Contact;
