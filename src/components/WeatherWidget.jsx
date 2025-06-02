import React, { useEffect, useState } from "react";

const LAT = -34.61; // Latitud de Buenos Aires
const LON = -58.38; // Longitud de Buenos Aires

function WeatherWidget() {
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m&timezone=America%2FArgentina%2FBuenos_Aires`
    )
      .then((res) => res.json())
      .then((data) => setTemp(data.current?.temperature_2m));
  }, []);

  return (
    <div className="weather-widget">
      {temp !== null ? (
        <span>Buenos Aires: {temp}°C</span>
      ) : (
        <span>Cargando clima...</span>
      )}
    </div>
  );
}

export default WeatherWidget;
