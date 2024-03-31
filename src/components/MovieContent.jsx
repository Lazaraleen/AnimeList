import React from "react";
import './movieContent.css';

function MovieContent({movie}) {
    return (
        <div className={`content ${movie.active ? 'active' : undefined}`}>
            <h2><span>{movie.title}</span></h2>
            <h4><span>{movie.year}</span>
                <span><i>{movie.typeSort}</i></span>
                <span>{movie.length}</span>
                <span>{movie.category}</span>
                <span>{movie.category2}</span>
            </h4>
            <p>{movie.description}</p>
        </div>
    )
}

export default MovieContent;