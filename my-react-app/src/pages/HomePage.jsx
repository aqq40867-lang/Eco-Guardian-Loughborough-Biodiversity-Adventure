import React, { useState } from 'react';

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

  const [tasks, setTasks] = useState({
    quizAnswered: 0,
    galleryViewed: 0,
    policyMade: 0
  });

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

  return (
    <>
      <Navbar />
      <CookieBanner />
      <EcoTaskPanel tasks={tasks} />

      <main>
        <HomeCarousel />

        <BiodiversityGallery
          onViewAnimal={() => {
            setTasks(prev => ({
              ...prev,
              galleryViewed: prev.galleryViewed + 1
            }));
          }}
        />

        <DailyEcoActions />

        <QuizGame onCorrect={handleQuizCorrect} />

        <InteractiveMap
          onDiscoverAnimal={() => {
            setTasks(prev => ({
              ...prev,
              galleryViewed: prev.galleryViewed + 1
            }));
          }}
        />

        <BudgetGame
          stats={stats}
          setStats={setStats}
          onPolicyMade={() => {
            setTasks(prev => ({
              ...prev,
              policyMade: prev.policyMade + 1
            }));
          }}
        />

        <MessageBoard />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;