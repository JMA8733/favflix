import React from "react"
function Tarjeta ({nombre, apellido, imagenMascota}) {
    return(
        <div className="presentation-card">
            <div className="image-card-container">
                <img src={ imagenMascota } alt={`Mascota de ${nombre}`} className="mascot-image" />
            </div>
            <div className="info-card-container">
                <h3 className="name-card"> { nombre } { apellido } </h3>
            </div>
        </div>
    )
}

export default Tarjeta