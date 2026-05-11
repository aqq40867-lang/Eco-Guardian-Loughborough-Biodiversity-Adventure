import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import HomeCarousel from '../components/HomeCarousel';
import BiodiversityGallery from '../components/BiodiversityGallery';
import DailyEcoActions from '../components/DailyEcoActions';
import QuizGame from '../components/QuizGame';
import InteractiveMap from '../components/InteractiveMap';
import BudgetGame from '../components/BudgetGame';
import MessageBoard from '../components/MessageBoard';
import EcoTaskPanel from '../components/EcoTaskPanel';
import CookieBanner from '../components/CookieBanner';
import Footer from '../components/Footer';

const HomePage = () => {
  const [stats, setStats] = useState({
    money: 100,
    eco: 50,
    happy: 50
  });

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('eco-tasks');

    return savedTasks
      ? JSON.parse(savedTasks)
      : {
          quizAnswered: 0,
          galleryViewed: 0,
          policyMade: 0
        };
  });

  useEffect(() => {
    localStorage.setItem('eco-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleQuizCorrect = (reward) => {
    setStats(prev => ({
      ...prev,
      money: prev.money + reward
    }));

    setTasks(prev => ({
      ...prev,
      quizAnswered: prev.quizAnswered + 1
    }));
  };

  const handleViewAnimal = () => {
    setTasks(prev => ({
      ...prev,
      galleryViewed: prev.galleryViewed + 1
    }));
  };

  const handlePolicyMade = () => {
    setTasks(prev => ({
      ...prev,
      policyMade: prev.policyMade + 1
    }));
  };

  return (
    <>
      <Navbar />
      <CookieBanner />
      <EcoTaskPanel tasks={tasks} />

      <main>
        <HomeCarousel />

        <BiodiversityGallery onViewAnimal={handleViewAnimal} />

        <DailyEcoActions />

        <QuizGame onCorrect={handleQuizCorrect} />

        <InteractiveMap onDiscoverAnimal={handleViewAnimal} />

        <BudgetGame
          stats={stats}
          setStats={setStats}
          onPolicyMade={handlePolicyMade}
        />

        <MessageBoard />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;