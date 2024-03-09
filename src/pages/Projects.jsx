import React from 'react';
import Project from '../components/Projects';

const projects = [
  {
    title: 'TechnoBlog',
    description: 'A CMS-style blog site build with Model-View-Controller (MVC) paradigm.',
    imageUrl: 'https://via.placeholder.com/300',
    githubUrl: 'https://github.com/mighty-little-coder/TechnoBlog',
    demoUrl: 'https://github.com/mighty-little-coder/TechnoBlog/blob/main/link'
  },
  {
    title: 'ExpressNote',
    description: 'A note-taking app built with Express.js and MySQL.',
    imageUrl: 'https://via.placeholder.com/300',
    githubUrl: 'https://github.com/mighty-little-coder/ExpressNote',
    demoUrl: 'https://notation-app-2aea203684b5.herokuapp.com/'
  },
  {
    title: 'README Generator',
    description: 'A command-line application that dynamically generates a README.md from a user\'s input.',
    imageUrl: 'https://via.placeholder.com/300',
    githubUrl: 'https://github.com/mighty-little-coder/Readme-Creation-Tool',
    demoUrl: 'https://github.com/mighty-little-coder/Readme-Creation-Tool/assets/144641610/e2638860-03dc-40c9-aa58-93efb7f0f326'
  },
  {
    title: 'Employee Tracker Tables',
    description: 'A command-line application that allows the user to manage a company\'s employee database.',
    imageUrl: 'https://via.placeholder.com/300',
    githubUrl: 'https://github.com/mighty-little-coder/Employee-Tracker-Tables',
    demoUrl: 'https://private-user-images.githubusercontent.com/144641610/291031266-258d3608-bfe4-4f64-b999-192acfd3bc4d.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk5Nzg4ODUsIm5iZiI6MTcwOTk3ODU4NSwicGF0aCI6Ii8xNDQ2NDE2MTAvMjkxMDMxMjY2LTI1OGQzNjA4LWJmZTQtNGY2NC1iOTk5LTE5MmFjZmQzYmM0ZC5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwOVQxMDAzMDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMjYwZjMyMTRjZDBlYWEwZjlhODU5ZDkwOWNjYWUxNjY3OTRjNDczYTAwZTBjYjdlZDliNGFkMWQ4ZjViM2M3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.JOAnPEcHwGuj9uh1k2KN6220rk-tQ8T8sM_eME-w_Kk'
  },
  {
    title: 'Videography Quiz',
    description: 'A timed quiz on videography terminology and techniques build with vanilla js, css and html.',
    imageUrl: 'https://via.placeholder.com/300',
    githubUrl: 'https://github.com/mighty-little-coder/Videography-Quiz',
    demoUrl: 'https://mighty-little-coder.github.io/Videography-Quiz/'
  },
  {
    title: 'Gizmo Gaming',
    description: 'A full-stack social media platform for gamers to connect and share their experiences.',
    imageUrl: 'https://via.placeholder.com/300',
    githubUrl: 'https://github.com/mighty-little-coder/gizmo-gaming',
    demoUrl: 'https://gizmo-gaming-055183e9597f.herokuapp.com/'
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
