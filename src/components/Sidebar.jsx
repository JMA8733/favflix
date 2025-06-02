import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false)
    }
    return (
        <>
            <button className="hamburger-btn" onClick={toggleSidebar}>
                ☰
            </button>
            {isOpen && <div className="overlay" onClick={closeSidebar}></div>}
            <div className={`sidebar ${isOpen ? "open" : ''}`}>
                <div>
                    <img
                        className="sb-imagen-logo"
                        src={`https://easy-peasy.ai/_next/image?url=https%3A%2F%2Fmedia.easy-peasy.ai%2F0b478ea5-d876-485c-a538-3e9f3101557a%2Fb0d7b82a-2068-45bd-bc86-0efe3e466838.png&w=640&q=75`}
                        alt="Imagen de gato generada por ia"
                    />
                </div>
                <hr className="sb-separador" />
                <div>
                    <h1>Equipo</h1>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" onClick={closeSidebar}>Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/equipo/luis" onClick={closeSidebar}>Luis</NavLink>
                            </li>
                            <li>
                                <NavLink to="/equipo/jose" onClick={closeSidebar}>José</NavLink>
                            </li>
                            <li>
                                <NavLink to="/series" onClick={closeSidebar}>Datos Json</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Bitacora" onClick={closeSidebar}>Bitacora</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
