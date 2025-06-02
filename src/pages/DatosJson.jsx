import React from 'react';
import seriesData from '../data/seriesData.json';

import '../styles/Series.css'; 

const SerieCard = ({ serie }) => {
    return (
        <div className="series-card">
            <img src={serie.imagenPortada} alt={serie.titulo} className='series-image'/>
            <h2>{serie.titulo}</h2>
            <hr className="series-card-separator" />
            <p><strong>Genero:</strong> {serie.genero}</p>
            <p>{serie.descripcion}</p>
        </div>
    );
}

function SeriesListPage() {
    return (
        <div className="series-list-page">
            <h1>Nuestras Series Favoritas</h1>
            {seriesData && seriesData.length > 0 ? (
                <div className="series-grid">
                {seriesData.map(serie => (
                    <SerieCard key={serie.id} serie={serie} />
                ))}
            </div>
            ) : (
                <p>No hay series disponibles.</p>
            )}
        </div>
    );
}

export default SeriesListPage;