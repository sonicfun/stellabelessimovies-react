import React, { useState, useEffect, useRef } from 'react';
import './card.css';

function Card({ movie }) {
  const [active, setActive] = useState(false);
  const cardRef = useRef(null);

  // Close preview if you tap outside the card
  useEffect(() => {
    const handleOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);

  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
      <div
        ref={cardRef}
        className={`movie-card ${active ? "touch-active" : ""}`}
        onClick={() => setActive(!active)} // toggle preview on tap
      >
        <img
          src={movie.previewImg}
          alt="Preview"
          className="img-fluid"
        />
        <p>
          {movie.length} | {movie.category}
        </p>
        <div className="content">
          <h4>{movie.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;

