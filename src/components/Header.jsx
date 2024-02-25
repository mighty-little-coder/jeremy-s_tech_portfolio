import React from 'react';

function Header() {
  return (
    <header className='header-content'>
      <h1>Jeremy Doran</h1>
      <h2>Professional Portfolio</h2>
      <nav className='navbar-content'>
        <ul className='buttons'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
