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

const ResetMapButton = () => {
  const map = useMap();

  const resetMap = () => {
    map.setView([52.7721, -1.2062], 14, {
      animate: true
    });
  };

  return (
    <button className="reset-map-btn" onClick={resetMap}>
      🔄 Reset Map
    </button>
  );
};

const ecoAreas = [
  {
    name: 'River Soar',
    icon: '🌊',
    type: 'River Habitat',
    center: [52.7765, -1.1905],
    radius: 700,
    color: '#5DADE2',
    description: 'A river habitat supporting water birds, freshwater fish and riverside wildlife.',
    species: [
      { name: 'Mallard Duck', icon: '🦆', group: 'Bird', points: [[52.7765, -1.1905], [52.7745, -1.1932], [52.7792, -1.1878]] },
      { name: 'Swan', icon: '🦢', group: 'Bird', points: [[52.7757, -1.1914], [52.7786, -1.1884]] },
      { name: 'Perch / Roach', icon: '🐟', group: 'Fish', points: [[52.7771, -1.1901], [52.7739, -1.1947]] },
      { name: 'Otter', icon: '🦦', group: 'Rare Mammal', points: [[52.7801, -1.1868], [52.7726, -1.1962]] },
      { name: 'Frog', icon: '🐸', group: 'Amphibian', points: [[52.7752, -1.192], [52.7789, -1.1875]] },
    ]
  },
  {
    name: "Queen's Park",
    icon: '🌳',
    type: 'Urban Park',
    center: [52.7717, -1.2076],
    radius: 330,
    color: '#58D68D',
    description: 'A public green space supporting common city wildlife, pollinators and garden birds.',
    species: [
      { name: 'Grey Squirrel', icon: '🐿️', group: 'Mammal', points: [[52.7717, -1.2076], [52.7722, -1.2084], [52.7711, -1.2066]] },
      { name: 'Pigeon', icon: '🕊️', group: 'Bird', points: [[52.7714, -1.2071], [52.7723, -1.2077]] },
      { name: 'Robin', icon: '🐦', group: 'Bird', points: [[52.7712, -1.2068], [52.7724, -1.2072]] },
      { name: 'Hedgehog', icon: '🦔', group: 'Mammal', points: [[52.7709, -1.208], [52.772, -1.2065]] },
      { name: 'Butterfly', icon: '🦋', group: 'Insect', points: [[52.7718, -1.2069], [52.7708, -1.2079]] },
      { name: 'Bee', icon: '🐝', group: 'Pollinator', points: [[52.7721, -1.2081], [52.7713, -1.2064]] }
    ]
  },
  {
    name: 'Dishley Pool Nature Area',
    icon: '🦢',
    type: 'Wetland / Pool Habitat',
    center: [52.7903, -1.2178],
    radius: 550,
    color: '#76D7C4',
    description: 'A wetland-style area suitable for pond wildlife, amphibians, fish and water birds.',
    species: [
      { name: 'Great Crested Newt', icon: '🦎', group: 'Protected Amphibian', points: [[52.7901, -1.2167], [52.7912, -1.2192]] },
      { name: 'Common Frog', icon: '🐸', group: 'Amphibian', points: [[52.7899, -1.2169], [52.7914, -1.2183]] },
      { name: 'Moorhen', icon: '🦆', group: 'Wetland Bird', points: [[52.7903, -1.2178], [52.7895, -1.219]] },
      { name: 'Pond Snail', icon: '🐌', group: 'Pond Invertebrate', points: [[52.7908, -1.2186], [52.7898, -1.2169]] },
      { name: 'Stickleback', icon: '🐟', group: 'Fish', points: [[52.791, -1.2164], [52.7902, -1.2194]] }
    ]
  },
  {
    name: 'Outwoods Woodland Park',
    icon: '🌲',
    type: 'Woodland Habitat',
    center: [52.7457, -1.2426],
    radius: 850,
    color: '#27AE60',
    description: 'A woodland habitat near Loughborough with rich forest wildlife and fungi.',
    species: [
      { name: 'Red Fox', icon: '🦊', group: 'Mammal', points: [[52.7457, -1.2426], [52.748, -1.2398], [52.7439, -1.2446]] },
      { name: 'Fallow Deer', icon: '🦌', group: 'Mammal', points: [[52.7425, -1.2412], [52.7492, -1.2444], [52.7468, -1.2462]] },
      { name: 'Owl', icon: '🦉', group: 'Bird', points: [[52.7461, -1.2434], [52.7436, -1.2409]] },
      { name: 'Wild Rabbit', icon: '🐇', group: 'Mammal', points: [[52.7472, -1.241], [52.7448, -1.2395]] },
      { name: 'Woodpecker', icon: '🐦', group: 'Forest Bird', points: [[52.7484, -1.243], [52.7442, -1.245]] },
      { name: 'Forest Fungi', icon: '🍄', group: 'Fungi', points: [[52.7451, -1.2404], [52.7477, -1.2454]] },
      { name: 'Badger', icon: '🦡', group: 'Mammal', points: [[52.7442, -1.245], [52.7471, -1.2438]] }
    ]
  },
  {
    name: 'Loughborough University Campus Green Areas',
    icon: '🎓',
    type: 'Campus Green Space',
    center: [52.765, -1.232],
    radius: 700,
    color: '#F7C243',
    description: 'Campus lawns, gardens and green spaces supporting everyday urban wildlife.',
    species: [
      { name: 'Crow', icon: '🐦', group: 'Bird', points: [[52.765, -1.232], [52.7662, -1.2298]] },
      { name: 'Wood Pigeon', icon: '🕊️', group: 'Bird', points: [[52.7644, -1.231], [52.7667, -1.233]] },
      { name: 'Squirrel', icon: '🐿️', group: 'Mammal', points: [[52.7638, -1.2328], [52.7659, -1.2308], [52.7671, -1.2328]] },
      { name: 'Ducks', icon: '🦆', group: 'Bird', points: [[52.7649, -1.2344], [52.7661, -1.2352]] },
      { name: 'Bees', icon: '🐝', group: 'Pollinator', points: [[52.7636, -1.234], [52.7654, -1.2312]] },
      { name: 'Butterflies', icon: '🦋', group: 'Insect', points: [[52.7658, -1.2295], [52.7675, -1.2316]] }
    ]
  }
];

const InteractiveMap = ({ onDiscoverAnimal }) => {
  const [openArea, setOpenArea] = useState('River Soar');
  const [selectedSpecies, setSelectedSpecies] = useState([]);

  const toggleSpecies = (areaName, speciesName) => {
    const key = `${areaName}-${speciesName}`;

    setSelectedSpecies(prev =>
      prev.includes(key)
        ? prev.filter(item => item !== key)
        : [...prev, key]
    );

    if (onDiscoverAnimal) {
      onDiscoverAnimal(speciesName);
    }
  };

  const isSpeciesSelected = (areaName, speciesName) => {
    return selectedSpecies.includes(`${areaName}-${speciesName}`);
  };

  return (
    <section className="eco-map-section" id="map">
      <div className="eco-map-frame">
        <div className="eco-map-header">
          <span className="eco-map-badge">
            LOUGHBOROUGH ECO MAP
          </span>

          <h2>🗺️ Loughborough Eco Area Map</h2>

          <p>
            Select an ecological area, then tick wildlife types to show their
            simplified distribution on the map.
          </p>
        </div>

        <div className="eco-map-layout">
          <aside className="eco-map-info-panel">
            <h3>🌿 Eco Area Filter</h3>

            <p className="eco-map-helper">
              Choose an area below and tick animals to display them on the map.
            </p>

            <div className="eco-area-list">
              {ecoAreas.map(area => (
                <div key={area.name} className="eco-area-card">
                  <button
                    className={`eco-area-toggle ${
                      openArea === area.name ? 'active' : ''
                    }`}
                    onClick={() =>
                      setOpenArea(openArea === area.name ? null : area.name)
                    }
                  >
                    <span>
                      {area.icon} {area.name}
                    </span>

                    <strong>
                      {openArea === area.name ? '−' : '+'}
                    </strong>
                  </button>

                  {openArea === area.name && (
                    <div className="eco-area-dropdown">
                      <small>{area.type}</small>
                      <p>{area.description}</p>

                      <div className="species-checkbox-list">
                        {area.species.map(species => (
                          <label
                            key={species.name}
                            className="species-checkbox-item"
                          >
                            <span>
                              {species.icon} {species.name}
                            </span>

                            <input
                              type="checkbox"
                              checked={isSpeciesSelected(
                                area.name,
                                species.name
                              )}
                              onChange={() =>
                                toggleSpecies(area.name, species.name)
                              }
                            />
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>

          <div className="eco-map-container">
            <MapContainer
              center={[52.7721, -1.2062]}
              zoom={14}
              scrollWheelZoom={false}
              className="leaflet-eco-map"
            >
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <ResetMapButton />

              {ecoAreas.map(area => (
                <Circle
                  key={area.name}
                  center={area.center}
                  radius={area.radius}
                  pathOptions={{
                    color: area.color,
                    fillColor: area.color,
                    fillOpacity: 0.18,
                    weight: 3
                  }}
                >
                  <Popup>
                    <div className="eco-popup">
                      <h3>
                        {area.icon} {area.name}
                      </h3>
                      <strong>{area.type}</strong>
                      <p>{area.description}</p>
                    </div>
                  </Popup>
                </Circle>
              ))}

              {ecoAreas.flatMap(area =>
                area.species.flatMap(species => {
                  if (!isSpeciesSelected(area.name, species.name)) {
                    return [];
                  }

                  return species.points.map((point, index) => (
                    <Marker
                      key={`${area.name}-${species.name}-${index}`}
                      position={point}
                      icon={createEmojiIcon(species.icon)}
                    >
                      <Popup>
                        <div className="eco-popup">
                          <h3>
                            {species.icon} {species.name}
                          </h3>
                          <p>
                            <strong>Area:</strong> {area.name}
                          </p>
                          <p>
                            <strong>Type:</strong> {species.group}
                          </p>
                          <p>
                            This marker shows a simplified educational
                            distribution point based on habitat type.
                          </p>
                        </div>
                      </Popup>
                    </Marker>
                  ));
                })
              )}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;