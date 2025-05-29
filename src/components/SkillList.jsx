import React from "react";

function SkillList({ skills }) {
    if (!Array.isArray(skills) || skills.length === 0) {
        return <p>No hay habilidades listadas</p>
    }

    return (
        <ul>
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    )
}

export default SkillList