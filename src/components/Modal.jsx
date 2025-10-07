import React, { useEffect, useState } from 'react';
import './modal.css';

function Modal({ movie, status, toggleModal }) {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    if (status) {
      // Store original scroll position
      const scrollY = window.scrollY;
      
      // Disable page scroll with multiple methods for better compatibility
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      // Prevent scroll on touch devices
      document.body.style.touchAction = 'none';
      
      // Add autoplay param
      const autoplayUrl = movie.video.includes("?")
        ? `${movie.video}&autoplay=1`
        : `${movie.video}?autoplay=1`;
      setVideoSrc(autoplayUrl);

      // Store scroll position for restoration
      document.body.setAttribute('data-scroll-y', scrollY);
    } else {
      // Get stored scroll position
      const scrollY = document.body.getAttribute('data-scroll-y');
      
      // Re-enable page scroll and restore position
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.touchAction = '';
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY));
        document.body.removeAttribute('data-scroll-y');
      }
      
      setVideoSrc(""); // clear to stop video when modal closes
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.touchAction = '';
      
      const scrollY = document.body.getAttribute('data-scroll-y');
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY));
        document.body.removeAttribute('data-scroll-y');
      }
    };
  }, [status, movie.video]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && status) {
        toggleModal();
      }
    };

    if (status) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [status, toggleModal]);

  // Handle backdrop click to close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div 
      className={`movieModal ${status ? 'active' : ''}`}
      onClick={handleBackdropClick}
    >
      <a href="#" className="modalClose" onClick={toggleModal}>
        <ion-icon name="close-outline"></ion-icon>
      </a>
      {status && (
        <iframe
          width="1280"
          height="720"
          src={videoSrc}
          title={`${movie.title} | Official Movie`}
          frameBorder="0"
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default Modal;