import React from 'react';
import Navbar from '../components/Navbar';
import BiodiversityGallery from '../components/BiodiversityGallery';
import Footer from '../components/Footer';

const BiodiversityPage = () => {
  return (
    <>
      <Navbar />

      <main>
        <BiodiversityGallery />
      </main>

      <Footer />
    </>
  );
};

export default BiodiversityPage;