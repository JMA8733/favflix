import React from "react";
import "../styles/App.css";

function Bitacora() {
  return (
    <div
      className="bitacora-container"
      style={{
        background: "#555",
        borderRadius: "1rem",
        padding: "2rem",
        margin: "2rem auto",
        maxWidth: "700px",
        boxShadow: "0 0.25rem 0.5rem rgba(0,0,0,0.15)",
      }}
    >
      <h1
        style={{
          color: "#e0e0e0",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        Bitácora del Proyecto
      </h1>

      <h2 style={{ color: "#e0e0e0", marginBottom: "0.8rem" }}>
        Roles de cada integrante
      </h2>
      <ul style={{ marginBottom: "1.2rem", color: "#333" }}>
        <li>
          <strong>Luis:</strong> Desarrollo del frontend, estructura visual,
          componentes de React, y estilos CSS. Responsable de la documentación
          técnica.
        </li>
        <li>
          <strong>José:</strong> Encargado de la gestión de versiones y control
          de calidad. integración de APIs externas
        </li>
      </ul>

      <h2 style={{ color: "#e0e0e0", marginBottom: "0.8rem" }}>
        Organización del trabajo
      </h2>
      <p style={{ marginBottom: "1.2rem", color: "#333" }}>
        Mantuvimos reuniones cortas diarias para sincronizar avances y resolver
        dudas. El código se compartió en un repositorio de GitHub, realizando
        revisiones cruzadas antes publicar en Vercel.
      </p>

      <h2 style={{ color: "#e0e0e0", marginBottom: "0.8rem" }}>
        Metodología de trabajo
      </h2>
      <p style={{ color: "#333" }}>
        Priorizamos la comunicación constante y la revisión continua del código
        para asegurar calidad y cumplimiento de objetivos.
      </p>
    </div>
  );
}

export default Bitacora;
