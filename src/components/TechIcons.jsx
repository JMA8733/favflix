import React from "react";

function TechIcons({ tecnologias }) {
    return (
        <div className="tech-icons-container">
            {tecnologias.map((techName, index) => (
                <img 
                    key={index}
                    src={`/icons/${techName}.svg`}
                    alt={`${techName} icon`}
                    className="tech-icon"
                    />
            ))}
        </div>
    )
}

export default TechIcons