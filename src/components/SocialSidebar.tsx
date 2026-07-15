import React from 'react';
import { FaLinkedinIn, FaGithub, FaXTwitter } from 'react-icons/fa6';

const SocialDock: React.FC = () => {
  return (
    <div className="social-dock">
      <a href="https://linkedin.com/in/amansarohadev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedinIn size={16} />
      </a>
      <a href="https://github.com/amansarohadev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub size={16} />
      </a>
      <a href="https://twitter.com/amansarohadev" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
        <FaXTwitter size={16} />
      </a>
    </div>
  );
};

export default SocialDock;
