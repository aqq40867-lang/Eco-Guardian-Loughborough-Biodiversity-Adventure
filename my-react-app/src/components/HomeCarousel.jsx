import React, { useEffect, useState } from 'react';
import RiverImg from '../assets/Print/River.jpg';
import ParkImg from '../assets/Print/Park.jpg';
import ForestImg from '../assets/Print/Forest.jpg';

const slides = [
  {
    image: ParkImg,
    title: 'Explore Loughborough’s Green Spaces',
    subtitle: 'Discover parks, local wildlife and the natural beauty across Loughborough.',
    tag: 'Eco Adventure'
  },
  {
    image: ForestImg,
    title: 'Discover Forest Biodiversity',
    subtitle: 'Explore woodland habitats and learn how animals and plants live together.',
    tag: 'Woodland Wildlife'
  },
  {
    image: RiverImg,
    title: 'Protect Local Waterways',
    subtitle: 'Learn how rivers and wetlands support wildlife and healthy ecosystems.',
    tag: 'River Ecology'
  }
];

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prev =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="home-carousel" id="home">
      <div
        className="home-carousel-slide"
        style={{ backgroundImage: `url(${currentSlide.image})` }}
      >
        <div className="home-carousel-overlay">
          <span className="home-carousel-tag">{currentSlide.tag}</span>

          <h1>{currentSlide.title}</h1>

          <p>{currentSlide.subtitle}</p>

          <button className="home-carousel-button">
            Start Exploring
          </button>
        </div>

        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={goToNext}
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCarousel;