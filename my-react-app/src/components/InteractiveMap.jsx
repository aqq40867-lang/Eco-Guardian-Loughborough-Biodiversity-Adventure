import React, { useState } from 'react';

const InteractiveMap = () => {
  const [activeRegion, setActiveRegion] = useState(null);
  const [showAnimals, setShowAnimals] = useState(true);

  const regions = [
    { id: 1, name: '查恩伍德森林', desc: '拉夫堡边缘的古老森林，是许多珍稀鸟类的栖息地。', top: '10%', left: '20%' },
    { id: 2, name: '大运河区域', desc: '水生生态系统，绿头鸭和天鹅的家园。', top: '50%', left: '60%' },
    { id: 3, name: '大学校园区', desc: '人类活动密集区，展示了城市化与野生动物共存的挑战。', top: '70%', left: '30%' }
  ];

  return (
    <section id="map" className="map-section">
      <h2>探索拉夫堡生态地图</h2>
      <div className="map-layout">
        <aside className="map-sidebar">
          <h3>生态控制台</h3>
          <label className="toggle">
            <input type="checkbox" checked={showAnimals} onChange={() => setShowAnimals(!showAnimals)} />
            显示野生动物活动轨迹
          </label>
          <div className="region-info-panel">
            {activeRegion ? (
              <>
                <h4>{activeRegion.name}</h4>
                <p>{activeRegion.desc}</p>
              </>
            ) : (
              <p className="hint">👈 请点击右侧地图区域查看详细生态信息</p>
            )}
          </div>
        </aside>

        <div className="map-canvas">
          <div className="map-background">拉夫堡模拟地图</div>
          {regions.map((region) => (
            <div
              key={region.id}
              className={`map-region ${activeRegion?.id === region.id ? 'active' : ''}`}
              style={{ top: region.top, left: region.left }}
              onClick={() => setActiveRegion(region)}
            >
              📍 {region.name}
            </div>
          ))}
          {showAnimals && <div className="animal-marker" style={{ top: '60%', left: '70%' }}>🦆</div>}
          {showAnimals && <div className="animal-marker" style={{ top: '20%', left: '30%' }}>🦊</div>}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;