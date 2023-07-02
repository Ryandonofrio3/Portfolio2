// src/pages/Projects.tsx

import React from 'react';
import { FaCode } from 'react-icons/fa';
import projects from '../Projects';

const Projects: React.FC = () => {
    return (
        <div id="projects" className="p-5">
            <h2 className="text-2xl mb-5 font-bold"><FaCode className="inline-block mr-2" />Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded transform transition duration-500 hover:scale-105"
                    >
                        <div className="p-5">
                            <h3 className="font-bold mb-3">{project.title}</h3>
                            <p>{project.description}</p>
                            <img src={project.imageUrl} alt={project.title} className="mt-3 rounded object-cover h-64 w-full" />
                            {/* <a
                                href={project.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition duration-200"
                            >
                                View Project
                            </a> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
