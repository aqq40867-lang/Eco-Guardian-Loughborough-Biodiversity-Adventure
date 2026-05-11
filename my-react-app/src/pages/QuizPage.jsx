import React from 'react';

import Navbar from '../components/Navbar';
import QuizGame from '../components/QuizGame';
import Footer from '../components/Footer';

const QuizPage = () => {
  return (
    <>
      <Navbar />

      <main>


        <QuizGame />
      </main>

      <Footer />
    </>
  );
};

export default QuizPage;