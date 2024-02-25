// src/App.jsx

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; // Example import for a page component
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home /> {/* Example usage of a page component */}
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
