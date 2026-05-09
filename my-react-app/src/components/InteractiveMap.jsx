import React, { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  useMap
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const createEmojiIcon = (emoji) =>
  L.divIcon({
    html: `<div class="eco-map-marker">${emoji}</div>`,
    className: '',
    iconSize: [42, 42],
    iconAnchor: [21, 21]
  });

const ecoLocations = [
  {
    name: "Queen's Park",
    type: '公园生态点',
    emoji: '🌳',
    position: [52.7717, -1.2076],
    animals: ['Grey Squirrel', 'Roe Deer'],
    score: 92,
    desc: '城市中心重要绿地，为鸟类和小型哺乳动物提供栖息地。'
  },
  {
    name: 'River Soar Habitat',
    type: '河流栖息地',
    emoji: '🦆',
    position: [52.7684, -1.1986],
    animals: ['Mallard Duck', 'Water Vole'],
    score: 84,
    desc: '水鸟和水生动物的重要活动区域。'
  },
  {
    name: 'Loughborough University Green Space',
    type: '校园生态点',
    emoji: '🦊',
    position: [52.765, -1.232],
    animals: ['Red Fox', 'European Hedgehog'],
    score: 88,
    desc: '校园绿地连接多个小型栖息地，适合夜行性动物活动。'
  },
  {
    name: 'Charnwood Forest Edge',
    type: '森林边缘',
    emoji: '🦌',
    position: [52.744, -1.242],
    animals: ['Roe Deer', 'Badger'],
    score: 95,
    desc: '森林边缘生态多样性较高，是大型哺乳动物的重要区域。'
  },
  {
    name: 'Town Centre Pressure Zone',
    type: '生态压力区',
    emoji: '🏭',
    position: [52.7729, -1.2065],
    animals: ['Pigeons', 'Urban Fox'],
    score: 48,
    desc: '交通、人流和噪音较多，对城市生态造成一定压力。'
  }
];

const ResetMapButton = () => {
  const map = useMap();

  const resetMap = () => {
    map.setView([52.7721, -1.2062], 13, {
      animate: true
    });
  };

  return (
    <button
      className="reset-map-btn"
      onClick={resetMap}
    >
      🔄 重置地图
    </button>
  );
};

const InteractiveMap = ({ onDiscoverAnimal }) => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleDiscover = (animal) => {
    setSelectedAnimal(animal);

    if (onDiscoverAnimal) {
      onDiscoverAnimal(animal);
    }
  };

  return (
    <section className="eco-map-section" id="map">
      <div className="eco-map-frame">
        <div className="eco-map-header">
          <span className="eco-map-badge">LOUGHBOROUGH ECO MAP</span>
          <h2>🗺️ 拉夫堡生态地图</h2>
          <p>
            探索拉夫堡的公园、河流、校园绿地和动物栖息地，点击地图标记发现本地野生动物。
          </p>
        </div>

        <div className="eco-map-layout">
          <div className="eco-map-info-panel">
            <h3>🐾 动物发现系统</h3>

            {selectedAnimal ? (
              <div className="discovered-animal-card">
                <span>已发现动物</span>
                <h4>{selectedAnimal}</h4>
                <p>
                  你刚刚在生态地图中发现了 {selectedAnimal}。
                  继续探索不同区域，可以了解更多本地生物。
                </p>
              </div>
            ) : (
              <p>
                点击地图上的生态点，然后选择一种动物进行发现。
              </p>
            )}

            <div className="eco-map-legend">
              <h4>地图图例</h4>
              <p>🌳 公园绿地</p>
              <p>🦆 河流栖息地</p>
              <p>🦊 动物活动区</p>
              <p>🏭 生态压力区</p>
            </div>
          </div>

          <div className="eco-map-container">
            <MapContainer
              center={[52.7721, -1.2062]}
              zoom={13}
              scrollWheelZoom={false}
              className="leaflet-eco-map"
            >
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <ResetMapButton />

              {ecoLocations.map((location) => (
                <React.Fragment key={location.name}>
                  <Marker
                    position={location.position}
                    icon={createEmojiIcon(location.emoji)}
                  >
                    <Popup>
                      <div className="eco-popup">
                        <h3>{location.name}</h3>
                        <strong>{location.type}</strong>
                        <p>{location.desc}</p>
                        <p>生态评分：{location.score}/100</p>

                        <div className="popup-animal-buttons">
                          {location.animals.map(animal => (
                            <button
                              key={animal}
                              onClick={() => handleDiscover(animal)}
                            >
                              发现 {animal}
                            </button>
                          ))}
                        </div>
                      </div>
                    </Popup>
                  </Marker>

                  <Circle
                    center={location.position}
                    radius={location.score * 8}
                    pathOptions={{
                      color: location.score < 60 ? '#E8714C' : '#1C4D4F',
                      fillColor: location.score < 60 ? '#E8714C' : '#D6E8B1',
                      fillOpacity: 0.25
                    }}
                  />
                </React.Fragment>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;