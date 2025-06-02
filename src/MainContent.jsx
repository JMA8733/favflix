import React from "react";
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Inicio.jsx'
import Integrante from "./pages/PerfilMiembros.jsx";
import Bitacora from './pages/Bitacora.jsx'
import NoEncontrada from './pages/NotFoundPage .jsx'
import SeriesListPage from "./pages/DatosJson.jsx";

function MainContent() {
    
    return (
            <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/equipo/:nombreIntegrante" element={<Integrante/>}/>
            <Route path='/series' element={<SeriesListPage/>}/>
            {/* Ruta para la bitácora */}
            <Route path='/Bitacora' element={<Bitacora/>}/>
            {/* Ruta 404 para cualquier otra URL */}
            <Route path='*' element={<NoEncontrada/>}/>
          </Routes>
    )
}

export default MainContent