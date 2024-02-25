import React from 'react';
import Project from '../components/Projects';

const projects = [
  {
    title: 'React Portfolio',
    description: 'A portfolio website built with React and Vite.js.',
    imageUrl: 'https://via.placeholder.com/300',
    githubUrl: 'https://github.com/yourusername/react-portfolio',
    demoUrl: 'https://yourportfolio.com'
  },
  {
    title: 'E-commerce App',
    description: 'An e-commerce web application using React and Redux.',
    imageUrl: 'https://via.placeholder.com/300',
    githubUrl: 'https://github.com/yourusername/e-commerce-app',
    demoUrl: 'https://ecommerceapp.com'
  },
];

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
