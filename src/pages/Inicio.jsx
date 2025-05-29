import React from "react"
import { Link } from "react-router-dom"
import Tarjeta from "../components/TarjetaPresentacion"
import teamData from "../data/teamData"
import fondo from "../assets/images/fondo05.jpg"

function HomePage () {
  
  return (
    <>
      <div className="page-container">
        <img src={fondo}/>
        <h1>Home</h1>
        <div className="team-grid-container">
          {teamData.map((miembro, index) => (
            <Link key={miembro.id} to={`/equipo/${miembro.id}`} 
              className='cardAnimation'
              style={{animationDelay: `${0.2 + index * 0.15}s`}}>
              <Tarjeta
                imagenMascota={miembro.imagenMascota}
                nombre={miembro.nombre}
                apellido={miembro.apellido} 
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default HomePage