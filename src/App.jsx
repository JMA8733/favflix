import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import MainContent from "./MainContent.jsx";
import WeatherWidget from "./components/WeatherWidget.jsx";
function App() {
  const location = useLocation();
  const mainContentRef = useRef(null);

  useEffect(() => {
    //cada vez que location cambia, desplazamos hacia arriba
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [location]); // este useEffect se ejecuta cada vez que 'location' cambia

  return (
    <>
      <div className="app-container">
        <WeatherWidget /> {/* <-- Agrega esto */}
        <Sidebar />
        <div className="main-content" ref={mainContentRef}>
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
