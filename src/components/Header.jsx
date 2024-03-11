import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    setActiveButton(location.pathname);
  }, [location.pathname]);

  let headerClass = 'header-color-default';

if (location.pathname === '/projects') {
  headerClass = 'header-color-projects';
} else if (location.pathname === '/contact') {
  headerClass = 'header-color-contact';
} else if (location.pathname === '/resume') {
  headerClass = 'header-color-resume';
} else {
  headerClass = 'header-color-default';
}

  return (
    <header className={`header_content ${headerClass}`}>
      <h1>Jeremy Doran</h1>
      <h2>Professional Portfolio</h2>
      <nav className='navbar_content'>
        <ul className='buttons'>
          <li className={activeButton === '/' ? 'active' : ''}>
            <Link to="/">About</Link>
          </li>
          <li className={activeButton === '/projects' ? 'active' : ''}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={activeButton === '/contact' ? 'active' : ''}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={activeButton === '/resume' ? 'active' : ''}>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
