import React from "react";

const ProjectCard = ({ project}) => {
    return (
        <div className="project-card">
            <img src={project.imagen} alt={project.nombre} className="project-image"/>
            <h3>{project.nombre}</h3>
            <p>{project.descripcionCorta}</p>
            <div className="project-techs">
                {project.tecnologiasUsadas && project.tecnologiasUsadas.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                ))}
            </div>
            <div className="project-links">
                {project.linkDemo && <a href={project.linkDemo} target="_blank" rel="noopener noreferrer">Demo</a> }
                {project.linkRepo && <a href={project.linkRepo} target="_blank" rel="noopener noreferrer">Repo</a>}
            </div>
        </div>
    );
};

export default ProjectCard;