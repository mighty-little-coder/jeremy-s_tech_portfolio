import React from 'react';
import githubIcon from '../assets/imgs/icons8-github-48.png';
import linkedinIcon from '../assets/imgs/icons8-linkedin-48.png';
import gmailIcon from '../assets/imgs/icons8-gmail-48.png';
import facebookIcon from '../assets/imgs/icons8-facebook-48.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer_content">
        <p>&copy; {currentYear} Jeremy Doran's Professional Portfolio</p>
        <a href="https://github.com/mighty-little-coder?tab=repositories">
          <img src={githubIcon} alt="Github Icon" className="footer_link" />
        </a>
        <a href="www.linkedin.com/in/jeremy-doran-58ab93239">
          <img src={linkedinIcon} alt="LinkedIn Icon" className="footer_link" />
        </a>
        <a href="mailto:jeremy.doran.95@gmail.com?Subject=Connection opportunity!">
          <img src={gmailIcon} alt="Gmail Icon" className="footer_link" />
        </a>
        <a href="https://www.facebook.com/jeremy.doran.37">
          <img src={facebookIcon} alt="Facebook Icon" className="footer_link" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
