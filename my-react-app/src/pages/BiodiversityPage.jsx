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
          <h1>🌿 拉夫堡生物图鉴</h1>
          <p>
            在这里探索拉夫堡的本地动物、栖息地和生态价值。
          </p>
        </section>

        <BiodiversityGallery />
      </main>

      <Footer />
    </>
  );
};

export default BiodiversityPage;