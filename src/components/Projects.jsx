import React from 'react';

function Project({ title, description, imageUrl, githubUrl, demoUrl }) {
  return (
    <div className="project_card">
      <img src={imageUrl} alt={title} />
      <div className="project_details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project_links">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          {demoUrl && <a href={demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>}
        </div>
      </div>
    </div>
  );
}

export default Project;
