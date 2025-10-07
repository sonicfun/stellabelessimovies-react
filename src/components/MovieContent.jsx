import React from 'react';
import './movieContent.css';


function MovieContent({ movie }) {
    return (
        <div className={`content ${movie.active ? 'active' : undefined}`}>
        <img src={movie.titleImg} alt="Movie Title" className="movie-title" />
        <h4>
        <span>{movie.year}</span>
        <span>{movie.format}</span>
        <span>{movie.length}</span>
        <span>{movie.category}</span>
        </h4>
        <p>{movie.description}</p>
           
        </div>
    );
}

export default MovieContent;
