import React, { useEffect } from "react";
import teamData from "../data/teamData";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SkillList from "../components/SkillList";
import TechIcons from "../components/TechIcons";
import ProjectCard from "../components/ProjectCard";

import '../styles/Projects.css';

function Integrante () {
  const { nombreIntegrante } = useParams();
  const navigate = useNavigate()

  const miembro = teamData.find(m => m.id === nombreIntegrante)

  useEffect(() => {
    if (!miembro) {
      navigate("not-found", {replace: true })
    }
  }, [miembro, navigate])

  if (!miembro) return null
  return (
      <div className="member-profile" key={miembro.id}>
        <h1>{miembro.nombre} {miembro.apellido}</h1>
        <div className="member-info">
          <div className="member-skills">
              <h3>Habilidades en programación:</h3>
              {/* este es un comentario en el codigo */}
              <SkillList skills={miembro.habilidades}/>
          </div>
          <img src={miembro.imagenPerfil} alt={`${miembro.nombre} ${miembro.apellido}`} className="member-photo" />
        </div>
        <h3>Proyectos:</h3>
        {miembro.proyectos && miembro.proyectos.length > 0 ? (
          <div className="member-projects-grid">
            {miembro.proyectos.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p>Este miembro aún no tiene proyectos listados.</p>
        )}
        
        <h3>Tecnologias:</h3>
        <TechIcons tecnologias={miembro.tecnologias} />
      </div>
  )
}

export default Integrante