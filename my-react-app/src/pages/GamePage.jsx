import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import QuizGame from '../components/QuizGame';
import BudgetGame from '../components/BudgetGame';
import Footer from '../components/Footer';

const GamePage = () => {
  const [stats, setStats] = useState({
    money: 100,
    eco: 50,
    happy: 50
  });

  const handleQuizCorrect = (reward) => {
    setStats(prev => ({
      ...prev,
      money: prev.money + reward
    }));
  };

  return (
    <>
      <Navbar />

      <main>
        <section className="page-hero">
          <span className="page-badge">
            ECO GAME CENTER
          </span>

          <h1>🎮 Loughborough Eco Game Center</h1>

          <p>
            Answer eco quiz questions to earn city funds, then use those funds
            to make policy decisions and build a sustainable Loughborough.
          </p>
        </section>

        <QuizGame onCorrect={handleQuizCorrect} />

        <BudgetGame
          stats={stats}
          setStats={setStats}
        />
      </main>

      <Footer />
    </>
  );
};

export default GamePage;