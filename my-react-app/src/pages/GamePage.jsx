import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import BudgetGame from '../components/BudgetGame';
import Footer from '../components/Footer';

const GamePage = () => {

  const [stats, setStats] = useState({
    money: 100,
    eco: 50,
    happy: 50
  });

  return (
    <>
      <Navbar />

      <main>
        <section className="page-hero">
          <span className="page-badge">
            ECO CITY SIMULATION
          </span>

          <h1>🏛️ Loughborough Eco City Simulator</h1>

          <p>
            Balance economy, ecology and public happiness to build your own sustainable future city.
          </p>
        </section>

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