import React, { useState, useEffect } from 'react';
import './banner.css';
import MovieContent from '../components/MovieContent';
import PlayBtn from '../components/PlayBtn';
import MovieSwiper from '../components/MovieSwiper';

function Banner() {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/movieData.json')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(e => console.log("Error fetching movies:", e.message));
  }, []);

  const handleSlideChange = (id) => {
    const newMovies = movies.map(movie => ({
      ...movie, // copy the movie object
      active: movie._id === id // set active only if ids match
    }));
    setMovies(newMovies);
  };

  const handlePlayChange = (modalState) => setIsModalOpen(modalState);

  return (
    <div className="banner">
      {movies.length > 0 && movies.map(movie => (
        <div className="movie" key={movie._id}>
          <img
            src={process.env.PUBLIC_URL + movie.bgImg}
            alt={movie.title}
            className={`bgImg ${movie.active ? 'active' : ''}`}
          />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <MovieContent movie={movie} />
              </div>
              <div className="col-lg-6 col-md-12">
                <PlayBtn movie={movie} onPlayChange={handlePlayChange} />
              </div>
            </div>
          </div>
        </div>
      ))}

      {movies.length > 0 && (
        <MovieSwiper
          slides={movies}
          slideChange={handleSlideChange}
          isModalOpen={isModalOpen}
        />
      )}
    </div>
  );
}

export default Banner;
