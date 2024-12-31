import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card border border-cyan-600 w-[20vw] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-600 font-medium hover:underline"
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
