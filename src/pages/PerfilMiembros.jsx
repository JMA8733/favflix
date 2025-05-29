import React, { useEffect } from "react";
import teamData from "../data/teamData";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SkillList from "../components/SkillList";
import TechIcons from "../components/TechIcons";
import ProjectCard from "../components/ProjectCard";

import '../Projects.css';

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
    
      <div className="member-profile">
        <h1>{miembro.nombre} {miembro.apellido}</h1>

        <h3>Habilidades en programación:</h3>
        {/* este es un comentario en el codigo */}
        <SkillList skills={miembro.habilidades}/>

        <h3>Proyectos:</h3>
        {/* Idealmente, aquí usarías <ProjectList projects={member.proyectos} /> */}
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