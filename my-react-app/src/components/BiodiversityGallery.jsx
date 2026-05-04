import React, { useState } from 'react';

/**
 * Loughborough Biodiversity Gallery Component
 * 功能：拉夫堡物种图鉴（支持分类切换、左右滑动、全卡片点击跳转）
 */
const BiodiversityGallery = () => {
  // ---------------------------------------------------------
  // 1. 【状态管理区】 - 控制当前的分类和滑动位置
  // ---------------------------------------------------------
  const [activeTab, setActiveTab] = useState('哺乳类'); // 当前选中的分类
  const [currentIndex, setCurrentIndex] = useState(0); // 当前滑动的起始索引

  // ---------------------------------------------------------
  // 2. 【核心数据区】 - 修改这里的文字、图标、颜色和链接
  // ---------------------------------------------------------
  const speciesData = {
    '哺乳类': [
      { name: 'Red Fox', fact: '深夜猎手，平衡生态。', img: '🦊', color: '#D6E8B1', link: '#fox' },
      { name: 'European Badger', fact: '森林里的地下建筑师。', img: '🦡', color: '#B4D3D8', link: '#badger' },
      { name: 'European Hedgehog', fact: '花园里的除虫小能手。', img: '🦔', color: '#F1F1E8', link: '#hedgehog' },
      { name: 'Water Vole', fact: '索尔河畔的游泳健将。', img: '🐭', color: '#F7C243', link: '#vole' },
      { name: 'Grey Squirrel', fact: '树林间的灵巧攀爬者。', img: '🐿️', color: '#D6E8B1', link: '#squirrel' },
      { name: 'Roe Deer', fact: '害羞的林间舞者。', img: '🦌', color: '#B4D3D8', link: '#deer' },
    ],
    '鸟类': [
      { name: 'Skylark', fact: '草地上的歌唱家。', img: '🐦', color: '#B4D3D8', link: '#skylark' },
      { name: 'Sedge warbler', fact: '芦苇丛中的隐士。', img: '🐦', color: '#D6E8B1', link: '#warbler' },
      { name: 'Reed bunting', fact: '河道边的优雅守护者。', img: '🐦', color: '#F1F1E8', link: '#bunting' },
      { name: 'Kingfisher', fact: '水面上的蓝色闪电。', img: '🐦', color: '#E8714C', link: '#kingfisher' },
      { name: 'Grey Wagtail', fact: '溪流边的灵动精灵。', img: '🐦', color: '#F7C243', link: '#wagtail' },
      { name: 'Common Moorhen', fact: '水面上的黑羽探险家。', img: '🦆', color: '#D6E8B1', link: '#moorhen' },
    ],
    'Amphibians & Reptiles': [
      { name: 'Common Frog', fact: '夜晚的绿色歌手。', img: '🐸', color: '#B4D3D8', link: '#frog' },
      { name: 'Common Toad', fact: '草丛中的稳重行者。', img: '🐸', color: '#D6E8B1', link: '#toad' }, 
      { name: 'Smooth Newt', fact: '池塘里的优雅泳者。', img: '🦎', color: '#F1F1E8', link: '#s-newt' },
      { name: 'Great Crested Newt', fact: '身披“战甲”的珍稀精灵。', img: '🦎', color: '#E8714C', link: '#g-newt' },
      { name: 'Grass Snake', fact: '水边的绿色潜伏者。', img: '🐍', color: '#F7C243', link: '#snake' },
      { name: 'Red-eared Slider', fact: '坚硬外壳下的探险家。', img: '🐢', color: '#D6E8B1', link: '#turtle' },
    ],
    '昆虫类': [
      { name: 'Peacock Butterfly', fact: '翅膀上有“眼睛”的舞者。', img: '🦋', color: '#F7C243', link: '#peacock' },
      { name: 'Red Admiral', fact: '花丛中的红色统帅。', img: '🦋', color: '#D6E8B1', link: '#admiral' },
      { name: 'Common Blue', fact: '草地上的蓝色精灵。', img: '🦋', color: '#B4D3D8', link: '#blue' },
      { name: 'Small Tortoiseshell', fact: '花园里的橙色精灵。', img: '🦋', color: '#F1F1E8', link: '#tortoise' },
      { name: 'Comma Butterfly', fact: '翅膀边缘像锯齿的蝴蝶。', img: '🦋', color: '#E8714C', link: '#comma' },
      { name: 'Green-veined White', fact: '轻盈的白色飞行者。', img: '🦋', color: '#D6E8B1', link: '#white' },
    ]
  };

  // ---------------------------------------------------------
  // 3. 【配置区】 - 控制展示参数
  // ---------------------------------------------------------
  const cardsToShow = 6; // 一行显示多少个卡片
  const activeData = [
    ...speciesData[activeTab],
    { isMore: true, name: `发现更多`, img: '🔍', color: '#E8714C', link: '#education' } // 最后的更多按钮
  ];

  // ---------------------------------------------------------
  // 4. 【逻辑处理区】 - 处理点击和滑动
  // ---------------------------------------------------------
  // 切换选项卡
  const handleTabChange = (cat) => {
    setActiveTab(cat);
    setCurrentIndex(0); // 切换分类时，滑动位置归零
  };

  // 全卡片点击跳转
  const handleCardClick = (link) => {
    if (link) {
      window.location.href = link; 
    }
  };

  return (
    <section style={{ 
      margin: '40px 0', 
      width: '100%', 
      backgroundColor: 'var(--lboro-green)', 
      padding: '50px 0',
      position: 'relative'
    }}>
      <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '35px', fontSize: '2.2rem' }}>
        🌿 拉夫堡全景物种图鉴
      </h2>
      
      {/* 5. 【选项卡渲染区】 */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
        {Object.keys(speciesData).map(cat => (
          <button 
            key={cat}
            onClick={() => handleTabChange(cat)}
            className="btn-kid"
            style={{ 
              backgroundColor: activeTab === cat ? 'var(--lboro-sun)' : 'white',
              border: 'none', padding: '12px 25px', fontSize: '1rem', cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ position: 'relative', width: '100%' }}>
        {/* 6. 【左右切换按钮区】 */}
        <button 
          onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
          style={{ 
            position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
            zIndex: 10, background: 'rgba(255,255,255,0.9)', borderRadius: '50%', 
            width: '45px', height: '45px', border: 'none', cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)', display: currentIndex === 0 ? 'none' : 'block'
          }}
        >
          ⬅️
        </button>

        {/* 7. 【视窗容器区】 - 控制卡片滑动的窗口 */}
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <div style={{ 
            display: 'flex', 
            transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)', 
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` 
          }}>
            {activeData.map((item, index) => (
              <div key={index} style={{ 
                minWidth: '16.6666%', // 修改这里改变一行显示个数 (100/6)
                padding: '0 2px', 
                boxSizing: 'border-box'
              }}>
                {/* 8. 【单张卡片模板区】 - 修改卡片样式（高度、内边距等） */}
                <div 
                  onClick={() => handleCardClick(item.link)}
                  style={{ 
                    backgroundColor: item.color || '#fff',
                    height: '350px', // 修改这里改变卡片高度
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '25px 15px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    textAlign: 'center',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                  // Hover 效果代码
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div style={{ fontSize: '60px', marginBottom: '15px' }}>{item.img}</div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--lboro-dark)', marginBottom: '10px' }}>{item.name}</h3>
                  
                  {/* 如果不是“更多”卡片，则渲染描述文字 */}
                  {!item.isMore && (
                    <p style={{ fontSize: '0.85rem', color: '#444', flexGrow: 1, lineHeight: '1.4' }}>
                      {item.fact}
                    </p>
                  )}
                  
                  {/* 提示文案（可选，模仿截图风格，但已经不再是独立按钮） */}
                  <div style={{ 
                    marginTop: 'auto', fontSize: '0.7rem', fontWeight: 'bold', 
                    textTransform: 'uppercase', color: 'var(--lboro-dark)' 
                  }}>
                    {item.isMore ? 'Discover More' : 'View Detail'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={() => currentIndex < activeData.length - cardsToShow && setCurrentIndex(currentIndex + 1)}
          style={{ 
            position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
            zIndex: 10, background: 'rgba(255,255,255,0.9)', borderRadius: '50%', 
            width: '45px', height: '45px', border: 'none', cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)', display: currentIndex >= activeData.length - cardsToShow ? 'none' : 'block'
          }}
        >
          ➡️
        </button>
      </div>
    </section>
  );
};

export default BiodiversityGallery;