import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer>
        <div className="footer-content">
          <p>&copy; {currentYear} Jeremy Doran's Professional Portfolio</p>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
