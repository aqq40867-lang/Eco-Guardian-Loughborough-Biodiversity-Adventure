import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import './index.css';

import HomePage from './pages/HomePage';
import BiodiversityPage from './pages/BiodiversityPage';
import EcoClassroomPage from './pages/EcoClassroomPage';
import QuizPage from './pages/QuizPage';
import GamePage from './pages/GamePage';
import MessagePage from './pages/MessagePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/biodiversity"
          element={<BiodiversityPage />}
        />

        <Route
          path="/education"
          element={<EcoClassroomPage />}
        />

        <Route
          path="/quiz"
          element={<QuizPage />}
        />

        <Route
          path="/game"
          element={<GamePage />}
        />

        <Route
          path="/message"
          element={<MessagePage />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;