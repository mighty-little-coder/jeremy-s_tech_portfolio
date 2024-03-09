import React from 'react';

function Header() {
  return (
    <header className='header_content'>
      <h1>Jeremy Doran</h1>
      <h2>Professional Portfolio</h2>
      <nav className='navbar_content'>
        <ul className='buttons'>
          <li><a href="/">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
