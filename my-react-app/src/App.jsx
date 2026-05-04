import React, { useState, useEffect } from 'react';
import './App.css';

// 导入组件
import Navbar from './components/Navbar';
import BiodiversityGallery from './components/BiodiversityGallery';
import EcoStory from './components/EcoStory';
import QuizGame from './components/QuizGame';
import BudgetGame from './components/BudgetGame';
import MessageBoard from './components/MessageBoard';
import DailyEcoActions from './components/DailyEcoActions';
import WelcomeStage from './components/WelcomeStage';
import Backpack from './components/Backpack';

function App() {
  const [appStage, setAppStage] = useState('LOADING'); 
  const [stats, setStats] = useState({ money: 100, eco: 50, happy: 50 });
  const [badges, setBadges] = useState([]);

  // 1. 初始检查
  useEffect(() => {
    const hasVisited = localStorage.getItem('lboro_visited');
    setAppStage(hasVisited === 'true' ? 'MAIN' : 'WELCOME');
  }, []);

  // 2. 勋章逻辑
  useEffect(() => {
    if (stats.eco >= 80 && !badges.includes('绿色巨人')) setBadges(prev => [...prev, '绿色巨人']);
    if (stats.money >= 200 && !badges.includes('理财专家')) setBadges(prev => [...prev, '理财专家']);
  }, [stats]);

  // 3. 阶段切换函数
  const enterMainSite = () => {
    localStorage.setItem('lboro_visited', 'true');
    setAppStage('MAIN');
  };

  if (appStage === 'LOADING') return null;

  // ---------------------------------------------------------
  // 分阶段渲染
  // ---------------------------------------------------------

  if (appStage === 'WELCOME') {
    return <WelcomeStage onStart={() => setAppStage('STORY')} />;
  }

  if (appStage === 'STORY') {
    return (
      <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', backgroundColor: '#f0fdf4' }}>
        <EcoStory onFinish={enterMainSite} />
      </div>
    );
  }

  return (
    <div className="app-container" style={{ animation: 'fadeIn 1s ease' }}>
      <Navbar />
      <BiodiversityGallery />
      
      <main id="center" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        <DailyEcoActions />
        
        <div id="spacer" style={{ margin: '40px 0' }}><div className="ticks"></div></div>

        <QuizGame onCorrect={(amt) => setStats(p => ({...p, money: p.money + amt}))} />
        <BudgetGame stats={stats} setStats={setStats} />
        
        {/* 使用新组件展示勋章 */}
        <Backpack badges={badges} />

        <MessageBoard />
      </main>

      <footer id="spacer" style={{ textAlign: 'center', padding: '60px', opacity: 0.7 }}>
        <p>© 2026 Loughborough University | COP926 Coursework</p>
      </footer>
    </div>
  );
}

export default App;