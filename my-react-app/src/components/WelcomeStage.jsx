import React from 'react';

const WelcomeStage = ({ onStart }) => {
  return (
    <div id="center" style={{ backgroundColor: '#B2D1D6', minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* 3D 轴侧艺术中心 */}
      <div className="hero" style={{ marginBottom: '40px' }}>
        <div className="base">
          <svg viewBox="0 0 200 200" style={{ width: '160px' }}>
            <path d="M20 100 L100 50 L180 100 L100 150 Z" fill="rgba(222, 255, 154, 0.05)" stroke="#DEFF9A" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="framework">
          <span style={{ fontSize: '42px', filter: 'drop-shadow(0 0 10px rgba(222, 255, 154, 0.4))' }}>🌿</span>
        </div>
        <div className="vite">
          <span style={{ fontSize: '30px' }}>💎</span>
        </div>
      </div>

      {/* 启动按钮 */}
      <button className="counter" onClick={onStart}>
        开启冒险
      </button>

      {/* 底部装饰线 */}
      <div id="spacer" style={{ marginTop: '80px' }}>
        <div className="ticks" style={{ width: '300px', opacity: 0.3 }}></div>
      </div>
    </div>
  );
};

export default WelcomeStage;