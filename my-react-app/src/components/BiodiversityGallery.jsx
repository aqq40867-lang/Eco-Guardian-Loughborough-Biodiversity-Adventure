import React, { useState } from 'react';

import FoxImg from '../assets/Mammals/Fox.jpg';
import FerretImg from '../assets/Mammals/Ferret.jpg';
import DeerImg from '../assets/Mammals/Deer.jpg';
import SquirrelImg from '../assets/Mammals/Squirrel.jpg';
import RabbitImg from '../assets/Mammals/Rabbit.jpg';
import WaterVoleImg from '../assets/Mammals/WaterVole.jpg';
import WoodMouseImg from '../assets/Mammals/WoodMouse.jpg';

import LapwingImg from '../assets/Birds/Lapwing.jpg';
import MallardImg from '../assets/Birds/Mallard.jpg';
import MandarinImg from '../assets/Birds/Mandarin.jpg';
import AvocetImg from '../assets/Birds/Avocet.jpg';
import BuzzardImg from '../assets/Birds/Buzzard.jpg';
import MuteSwan from '../assets/Birds/MuteSwan.jpg';
import PeregrineFalconImg from '../assets/Birds/PeregrineFalcon.jpg';

import CommonLizardImg from '../assets/AmphibiansReptiles/CommonLizard.jpg';
import CommonToadImg from '../assets/AmphibiansReptiles/CommonToad.jpg';
import GrassSnakeImg from '../assets/AmphibiansReptiles/GrassSnake.jpg';
import GreatCrestedNewtImg from '../assets/AmphibiansReptiles/GreatCrestedNewt.jpg';
import RedEaredTerrapinImg from '../assets/AmphibiansReptiles/RedEaredTerrapin.jpg';
import CommonFrog from '../assets/AmphibiansReptiles/CommonFrog.jpg';

const BiodiversityGallery = ({ onViewAnimal }) => {
  const [activeTab, setActiveTab] = useState('Mammals');
  const [currentIndex, setCurrentIndex] = useState(0);

  const speciesData = {
    Mammals: [
      { name: 'Red Fox', fact: 'A clever hunter of the night', img: FoxImg, color: '#D6E8B1', link: '#fox' },
      { name: 'Ferret', fact: 'Quick and agile underground explorer', img: FerretImg, color: '#B4D3D8', link: '#ferret' },
      { name: 'Fallow Deer', fact: 'A gentle animal of woodland parks', img: DeerImg, color: '#F1F1E8', link: '#fallow-deer' },
      { name: 'Grey Squirrel', fact: 'An energetic climber and food collector', img: SquirrelImg, color: '#F7C243', link: '#squirrel' },
      { name: 'Wild Rabbit', fact: 'A fast runner of open grasslands', img: RabbitImg, color: '#D6E8B1', link: '#rabbit' },
      { name: 'Water Vole', fact: 'A shy creature living near rivers', img: WaterVoleImg, color: '#B4D3D8', link: '#deer' },
      { name: 'Wood Mouse', fact: 'A tiny forest animal active at night', img: WoodMouseImg, color: '#F7C243', link: '#wood-mouse' },
    ],
    Birds: [
      { name: 'Northern Lapwing', fact: 'A graceful bird of open wetlands', img: LapwingImg, color: '#B4D3D8', link: '#lapwing' },
      { name: 'Mallard Duck', fact: 'A common duck often seen on rivers', img: MallardImg, color: '#D6E8B1', link: '#mallard' },
      { name: 'Mandarin Duck', fact: 'Known for its colourful feathers', img: MandarinImg, color: '#F1F1E8', link: '#mandarin-duck' },
      { name: 'Pied Avocet', fact: 'A striking wading bird with a curved bill', img: AvocetImg, color: '#E8714C', link: '#avocet' },
      { name: 'Common Buzzard', fact: 'A soaring bird of prey with sharp eyesight', img: BuzzardImg, color: '#F7C243', link: '#buzzard' },
      { name: 'Mute Swan', fact: 'An elegant bird often found on lakes', img: MuteSwan, color: '#D6E8B1', link: '#mute-swan' },
      { name: 'Peregrine Falcon', fact: 'One of the fastest birds in the world', img: PeregrineFalconImg, color: '#B4D3D8', link: '#falcon' },
    ],
    'Amphibians & Reptiles': [
      { name: 'Common Lizard', fact: 'A sun-loving reptile often seen on rocks', img: CommonLizardImg, color: '#B4D3D8', link: '#lizard' },
      { name: 'Common Toad', fact: 'A slow-moving amphibian found in damp habitats', img: CommonToadImg, color: '#D6E8B1', link: '#toad' },
      { name: 'Grass Snake', fact: 'A harmless snake that lives near water', img: GrassSnakeImg, color: '#F1F1E8', link: '#grass-snake' },
      { name: 'Great Crested Newt', fact: 'A rare newt with a distinctive spiky crest', img: GreatCrestedNewtImg, color: '#E8714C', link: '#great-crested-newt' },
      { name: 'Red-eared Terrapin', fact: 'A freshwater turtle with bright red markings', img: RedEaredTerrapinImg, color: '#F7C243', link: '#red-eared-terrapin' },
      { name: 'Common Frog', fact: 'A familiar amphibian with a croaking call', img: CommonFrog, color: '#B4D3D8', link: '#common-frog' },
    ],
  };

  const cardsToShow = 6;
  const activeData = speciesData[activeTab];


  const maxIndex = Math.max(0, activeData.length - cardsToShow);

  const handleTabChange = (cat) => {
    setActiveTab(cat);
    setCurrentIndex(0);
  };

  const handleCardClick = (link) => {
    if (onViewAnimal) {
      onViewAnimal();
    }

    if (link) {
      window.location.href = link;
    }
  };

  const goPrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };


    return (
  <section className="biodiversity-section" id="biodiversity">
    <div className="gallery-showcase-frame">
      <div className="gallery-showcase-header">
        <span className="gallery-badge">LOUGHBOROUGH WILDLIFE</span>

        <h2>🌿 Loughborough Wildlife Explorer</h2>

        <p>
          Discover some of the most iconic wildlife species around Loughborough and learn about their habitats, behaviours, and ecological importance.
        </p>
      </div>

      <div className="gallery-tabs">
        {Object.keys(speciesData).map(cat => (
          <button
            key={cat}
            onClick={() => handleTabChange(cat)}
            className={`gallery-tab ${activeTab === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-carousel">
        {currentIndex > 0 && (
          <button
            onClick={goPrev}
            className="gallery-arrow gallery-arrow-left"
            aria-label="Previous species"
          >
            ←
          </button>
        )}

        <div className="gallery-viewport">
          <div
            className="gallery-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
            }}
          >
            {activeData.map((item, index) => (
              <div key={index} className="gallery-card-shell">
                <button
                  className={`species-card ${item.isMore ? 'species-card-more' : ''}`}
                  style={{ backgroundColor: item.color || '#fff' }}
                  onClick={() => handleCardClick(item.link)}
                >
                  {!item.isMore ? (
                    <img
                      src={item.img}
                      alt={item.name}
                      className="species-image"
                    />
                  ) : (
                    <div className="species-more-icon">🔍</div>
                  )}

                  <div className="species-content">
                    <div>
                      <strong>{item.name}</strong>
                      {!item.isMore && <p>{item.fact}</p>}
                    </div>

                    <span className="species-card-action">
                      {item.isMore ? 'Discover More' : 'View Detail'}
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {currentIndex < maxIndex && (
          <button
            onClick={goNext}
            className="gallery-arrow gallery-arrow-right"
            aria-label="Next species"
          >
            →
          </button>
        )}
      </div>
    </div>
  </section>
);
};

export default BiodiversityGallery;