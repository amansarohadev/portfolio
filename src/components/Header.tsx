import React, { useState, useEffect } from 'react';
import { Mail, Sun, Moon } from 'lucide-react';

interface NavProps {
  onContactClick: () => void;
}

const Nav: React.FC<NavProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    setTheme(systemTheme);
    document.documentElement.setAttribute('data-theme', systemTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="nav-logo">
        <span className="accent">A</span>man
      </a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a href="mailto:amansarohadev@gmail.com" className="nav-cta" onClick={(e) => { e.preventDefault(); onContactClick(); }}>
          <Mail size={14} /> Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Nav;
