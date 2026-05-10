import React from 'react';
import Navbar from '../components/Navbar';
import BiodiversityGallery from '../components/BiodiversityGallery';
import Footer from '../components/Footer';

const BiodiversityPage = () => {
  return (
    <>
      <Navbar />

      <main>
        <section className="page-hero">
          <span className="page-badge">WILDLIFE ENCYCLOPEDIA</span>

          <h1>🌿 Loughborough Wildlife Encyclopedia</h1>

          <p>
            Explore local wildlife, natural habitats and the ecological importance of species found around Loughborough.
          </p>
        </section>

        <BiodiversityGallery />
      </main>

      <Footer />
    </>
  );
};

export default BiodiversityPage;