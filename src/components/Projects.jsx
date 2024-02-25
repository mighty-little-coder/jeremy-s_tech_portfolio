// src/components/Project.jsx

import React from 'react';

function Project({ title, description, imageUrl, githubUrl, demoUrl }) {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          {demoUrl && <a href={demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>}
        </div>
      </div>
    </div>
  );
}

export default Project;  // Export as default
