import React from 'react';

import Navbar from '../components/Navbar';
import QuizGame from '../components/QuizGame';
import Footer from '../components/Footer';

const QuizPage = () => {
  return (
    <>
      <Navbar />

      <main>
        <section className="page-hero">
          <span className="page-badge">
            ECO KNOWLEDGE CHALLENGE
          </span>

          <h1>💡 Eco Knowledge Challenge</h1>

          <p>
            Learn about sustainability and biodiversity through interactive quizzes and become a true Eco Guardian.
          </p>
        </section>

        <QuizGame />
      </main>

      <Footer />
    </>
  );
};

export default QuizPage;