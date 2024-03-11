import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer_content">
        <p>&copy; {currentYear} Jeremy Doran's Professional Portfolio</p>
        <a href="https://github.com/mighty-little-coder?tab=repositories">
          <img src="src/assets/imgs/icons8-github-48.png" alt="Github Icon" className="footer_link" />
        </a>
        <a href="www.linkedin.com/in/jeremy-doran-58ab93239">
          <img src="src/assets/imgs/icons8-linkedin-48.png" alt="LinkedIn Icon" className="footer_link" />
        </a>
        <a href="mailto:jeremy.doran.95@gmail.com?Subject=Connection opportunity!">
          <img src="src/assets/imgs/icons8-gmail-48.png" alt="Gmail Icon" className="footer_link" />
        </a>
        <a href="https://www.facebook.com/jeremy.doran.37">
          <img src="src/assets/imgs/icons8-facebook-48.png" alt="Facebook Icon" className="footer_link" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
