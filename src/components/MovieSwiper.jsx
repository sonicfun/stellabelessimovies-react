import React, { useState, useEffect, useRef } from 'react';
import './movieSwiper.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, FreeMode } from 'swiper/modules';

function MovieSwiper({ slides, slideChange, isModalOpen }) {
  const [loadedSlides, setLoadedSlides] = useState({});
  const swiperRef = useRef(null);

  // Mark slide as loaded
  const handleImageLoad = (id) => {
    setLoadedSlides(prev => ({ ...prev, [id]: true }));
  };

  // Control autoplay based on modal state
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      if (isModalOpen) {
        swiper.autoplay.stop();
      } else {
        // Small delay to ensure modal is fully closed before resuming
        setTimeout(() => {
          if (swiper.autoplay && !swiper.destroyed) {
            swiper.autoplay.start();
          }
        }, 100);
      }
    }
  }, [isModalOpen]);

  return (
    <Swiper
      ref={swiperRef}
      modules={[EffectCoverflow, Autoplay, FreeMode]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      loop={true}
      loopedSlides={Math.min(slides.length, 10)}
      freeMode={{ enabled: true, momentum: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
      touchRatio={1}
      threshold={10}
      resistance={true}
      resistanceRatio={0.85}
      touchStartPreventDefault={false}
      className="movieSwiper"
      onSlideChange={(swiper) => {
        const activeSlide = slides[swiper.realIndex];
        if (activeSlide) slideChange(activeSlide._id);
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide._id}>
          <div
            className="slide-content"
            onClick={() => slideChange(slide._id)}
          >
            <img
              src={slide.previewImg}
              alt={slide.title || 'Preview'}
              draggable={false}
              onLoad={() => handleImageLoad(slide._id)}
              className={loadedSlides[slide._id] ? 'loaded' : 'loading'}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieSwiper;