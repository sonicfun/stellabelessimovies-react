import React, { useState, useEffect } from 'react';
import './playBtn.css';
import Modal from './Modal';

function PlayBtn({ movie, onPlayChange }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    const newState = !modal;
    setModal(newState);
    if (onPlayChange) {
      onPlayChange(newState);
    }
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modal]);

  return (
    <>
      <div
        className={`trailer d-flex align-items-center justify-content-center ${
          movie.active ? 'active' : undefined
        }`}
      >
        <a href="#" className="playBtn" onClick={toggleModal}>
          <ion-icon name="play-outline"></ion-icon>
        </a>
        <p>Watch Movie</p>
      </div>
      {movie.active && (
        <Modal movie={movie} status={modal} toggleModal={toggleModal} />
      )}
    </>
  );
}

export default PlayBtn;