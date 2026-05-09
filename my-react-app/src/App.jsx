import React, { useState } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import HomeCarousel from './components/HomeCarousel';
import BiodiversityGallery from './components/BiodiversityGallery';
import InteractiveMap from './components/InteractiveMap';
import BudgetGame from './components/BudgetGame';
import QuizGame from './components/QuizGame';
import EcoTaskPanel from './components/EcoTaskPanel';
import DailyEcoActions from './components/DailyEcoActions';
import MessageBoard from './components/MessageBoard';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BiodiversityPage from './pages/BiodiversityPage';


const App = () => {
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
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <CookieBanner />
            <EcoTaskPanel tasks={tasks} />

            <main>
              <HomeCarousel />
              <DailyEcoActions />
              
              <InteractiveMap
                onDiscoverAnimal={() => {
                  setTasks(prev => ({
                    ...prev,
                    galleryViewed: prev.galleryViewed + 1
                  }));
                }}
              />
              <QuizGame onCorrect={handleQuizCorrect} />
              <BudgetGame
                stats={stats}
                setStats={setStats}
                onPolicyMade={handlePolicyMade}
              />
              <MessageBoard />
            </main>

            <Footer />
          </>
        }
      />

      <Route path="/biodiversity" element={<BiodiversityPage />} />
    </Routes>
  </BrowserRouter>
);
}
export default App;