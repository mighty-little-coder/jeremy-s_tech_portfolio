// src/pages/Home.jsx

import React from 'react';

function Resume() {
  return (
    <div className="resume_container">
      <h1>Resume</h1>
      <div className="resume_elements">
        <h2>Proficiencies</h2>
        <div className="resume_proficiencies">
          {/* <p>Hi, I'm [Your Name], a passionate developer.</p>
        <p>This is where I showcase my projects and skills.</p> */}
        </div>
        <section className="resume_proficiencies_items">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
          <ul>
            <li>MySQL</li>
            <li>Sequelize ORM</li>
            <li>MongoDB</li>
          </ul>
          <ul>
            <li>GraphQL</li>
            <li>RESTful APIs</li>
            <li>Git</li>
          </ul>
        </section>
        <h2>Experience</h2>
        <div className="resume_experience">
          <p>
            LIST EXPERIENCE HERE
          </p>
        </div>
      </div>
      <div className="resumeDL">
        <a href="resume_link">Click for downloadable resume pdf file.</a>
      </div>
    </div>
  );
}

export default Resume; // Export as default
