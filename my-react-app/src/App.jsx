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
import GamePage from './pages/GamePage';
import MessagePage from './pages/MessagePage';
import AnimalDetailPage from './pages/AnimalDetailPage';

const App = () => {
  return (
    <BrowserRouter basename="/Coursework">
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
          path="/game"
          element={<GamePage />}
        />

        <Route
          path="/message"
          element={<MessagePage />}
        />

        <Route
          path="/animal/:animalId"
          element={<AnimalDetailPage />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;