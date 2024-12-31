import React from 'react';
import ProjectCard from './ProjectCard';
import {projects} from "../config"

function Projects() {


  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Projects
        </h2>
        <div className="projects-list grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
