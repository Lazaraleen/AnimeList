import React from "react";
import './movieName.css';

function MovieName({movie}) {
    return (
        <div className={`name ${movie.active ? 'active' : undefined}`}>
            <h2>{movie.name}</h2>
        </div>
    )
}

export default MovieName;