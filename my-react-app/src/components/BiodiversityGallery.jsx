import React, { useState } from 'react';

const BiodiversityGallery = ({ onViewAnimal }) => {
  const [activeTab, setActiveTab] = useState('哺乳类');
  const [currentIndex, setCurrentIndex] = useState(0);

  const speciesData = {
    哺乳类: [
      { name: 'Red Fox', fact: '深夜猎手，平衡生态。', img: '🦊', color: '#D6E8B1', link: '#fox' },
      { name: 'European Badger', fact: '森林里的地下建筑师。', img: '🦡', color: '#B4D3D8', link: '#badger' },
      { name: 'European Hedgehog', fact: '花园里的除虫小能手。', img: '🦔', color: '#F1F1E8', link: '#hedgehog' },
      { name: 'Water Vole', fact: '索尔河畔的游泳健将。', img: '🐭', color: '#F7C243', link: '#vole' },
      { name: 'Grey Squirrel', fact: '树林间的灵巧攀爬者。', img: '🐿️', color: '#D6E8B1', link: '#squirrel' },
      { name: 'Roe Deer', fact: '害羞的林间舞者。', img: '🦌', color: '#B4D3D8', link: '#deer' }
    ],
    鸟类: [
      { name: 'Skylark', fact: '草地上的歌唱家。', img: '🐦', color: '#B4D3D8', link: '#skylark' },
      { name: 'Sedge warbler', fact: '芦苇丛中的隐士。', img: '🐦', color: '#D6E8B1', link: '#warbler' },
      { name: 'Reed bunting', fact: '河道边的优雅守护者。', img: '🐦', color: '#F1F1E8', link: '#bunting' },
      { name: 'Kingfisher', fact: '水面上的蓝色闪电。', img: '🐦', color: '#E8714C', link: '#kingfisher' },
      { name: 'Grey Wagtail', fact: '溪流边的灵动精灵。', img: '🐦', color: '#F7C243', link: '#wagtail' },
      { name: 'Common Moorhen', fact: '水面上的黑羽探险家。', img: '🦆', color: '#D6E8B1', link: '#moorhen' }
    ],
    'Amphibians & Reptiles': [
      { name: 'Common Frog', fact: '夜晚的绿色歌手。', img: '🐸', color: '#B4D3D8', link: '#frog' },
      { name: 'Common Toad', fact: '草丛中的稳重行者。', img: '🐸', color: '#D6E8B1', link: '#toad' },
      { name: 'Smooth Newt', fact: '池塘里的优雅泳者。', img: '🦎', color: '#F1F1E8', link: '#s-newt' },
      { name: 'Great Crested Newt', fact: '身披“战甲”的珍稀精灵。', img: '🦎', color: '#E8714C', link: '#g-newt' },
      { name: 'Grass Snake', fact: '水边的绿色潜伏者。', img: '🐍', color: '#F7C243', link: '#snake' },
      { name: 'Red-eared Slider', fact: '坚硬外壳下的探险家。', img: '🐢', color: '#D6E8B1', link: '#turtle' }
    ],
    昆虫类: [
      { name: 'Peacock Butterfly', fact: '翅膀上有“眼睛”的舞者。', img: '🦋', color: '#F7C243', link: '#peacock' },
      { name: 'Red Admiral', fact: '花丛中的红色统帅。', img: '🦋', color: '#D6E8B1', link: '#admiral' },
      { name: 'Common Blue', fact: '草地上的蓝色精灵。', img: '🦋', color: '#B4D3D8', link: '#blue' },
      { name: 'Small Tortoiseshell', fact: '花园里的橙色精灵。', img: '🦋', color: '#F1F1E8', link: '#tortoise' },
      { name: 'Comma Butterfly', fact: '翅膀边缘像锯齿的蝴蝶。', img: '🦋', color: '#E8714C', link: '#comma' },
      { name: 'Green-veined White', fact: '轻盈的白色飞行者。', img: '🦋', color: '#D6E8B1', link: '#white' }
    ]
  };

  const cardsToShow = 6;

  const activeData = [
    ...speciesData[activeTab],
    {
      isMore: true,
      name: '发现更多',
      img: '🔍',
      color: '#E8714C',
      link: '#education'
    }
  ];

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

          <h2>🌿 拉夫堡全景物种图鉴</h2>

          <p>
            探索拉夫堡周边最具代表性的野生动物，了解它们的习性、栖息地与生态价值。
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
                    <span className="species-icon">{item.img}</span>

                    <strong>{item.name}</strong>

                    {!item.isMore && <p>{item.fact}</p>}

                    <span className="species-card-action">
                      {item.isMore ? 'Discover More' : 'View Detail'}
                    </span>
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