import React from 'react';
import Project from '../components/Projects';

const projects = [
  {
    title: 'TechnoBlog',
    description: 'A CMS-style blog site build with Model-View-Controller (MVC) paradigm.',
    imageUrl: 'src/assets/images/techno-homepage.png',
    githubUrl: 'https://github.com/mighty-little-coder/TechnoBlog',
    demoUrl: 'https://techno-blog-mod14-6af041f446b3.herokuapp.com/home'
  },
  {
    title: 'Gizmo Gaming',
    description: 'A full-stack social media platform for gamers to connect and share their experiences.',
    imageUrl: 'src/assets/images/Classes.jpg',
    githubUrl: 'https://github.com/mighty-little-coder/gizmo-gaming',
    demoUrl: 'https://gizmo-gaming-055183e9597f.herokuapp.com/'
  },
  {
    title: 'Employee Tracker Tables',
    description: 'A command-line application that allows the user to manage a company\'s employee database.',
    imageUrl: 'src/assets/images/employee-demo.png',
    githubUrl: 'https://github.com/mighty-little-coder/Employee-Tracker-Tables',
    demoUrl: 'src/assets/vids/employee_tracker_demo.mp4'
  },
  {
    title: 'Videography Quiz',
    description: 'A timed quiz on videography terminology and techniques build with vanilla js, css and html.',
    imageUrl: 'src/assets/images/videography_demo.png',
    githubUrl: 'https://github.com/mighty-little-coder/Videography-Quiz',
    demoUrl: 'https://mighty-little-coder.github.io/Videography-Quiz/'
  },
  {
    title: 'README Generator',
    description: 'A command-line application that dynamically generates a README.md from a user\'s input.',
    imageUrl: 'src/assets/images/readme-demo.png',
    githubUrl: 'https://github.com/mighty-little-coder/Readme-Creation-Tool',
    demoUrl: 'src/assets/vids/README-Generator.mp4'
  },
  {
    title: 'ExpressNote',
    description: 'A note-taking app built with Express.js and MySQL.',
    imageUrl: 'src/assets/images/note-taker-demo.png',
    githubUrl: 'https://github.com/mighty-little-coder/ExpressNote',
    demoUrl: 'https://notation-app-2aea203684b5.herokuapp.com/'
  }
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
