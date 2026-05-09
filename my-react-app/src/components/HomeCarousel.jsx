import React, { useEffect, useState } from 'react';

const slides = [
  {
    image: '/images/slide-1.jpg',
    title: 'Explore Loughborough’s Green Future',
    subtitle: 'Learn how nature, people and city planning can grow together.',
    tag: 'Eco Adventure'
  },
  {
    image: '/images/slide-2.jpg',
    title: 'Protect Local Biodiversity',
    subtitle: 'Discover animals, habitats and daily actions that make a difference.',
    tag: 'Biodiversity'
  },
  {
    image: '/images/slide-3.jpg',
    title: 'Make Smart City Decisions',
    subtitle: 'Balance money, ecology and happiness as the mayor of Loughborough.',
    tag: 'Interactive Learning'
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