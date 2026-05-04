import React from 'react';

const DailyEcoActions = () => {
  // 环保行为数据
  const ecoActions = [
    {
      title: "守护索尔河：清理塑料",
      desc: "在拉夫堡的索尔河边漫步时，随手捡起塑料瓶。这能防止它们流入大海，保护河里的水獭和鱼类。",
      img: "https://images.unsplash.com/photo-1618477461853-cf6ed80fbe5e?auto=format&fit=crop&q=80&w=400", // 环保清理照片
      tag: "河流保护"
    },
    {
      title: "校园小园丁：种植野花",
      desc: "在花园或阳台种下本地野花。它们是蜜蜂和蝴蝶最爱的‘加油站’，能让拉夫堡的春天更有生机。",
      img: "https://images.unsplash.com/photo-1591857172899-ad0543dd81ef?auto=format&fit=crop&q=80&w=400", // 种花照片
      tag: "生物多样性"
    },
    {
      title: "自带水壶：减少浪费",
      desc: "使用可重复使用的水壶。拉夫堡校园里有很多免费饮水机，每装满一次，就少用一个塑料瓶！",
      img: "https://images.unsplash.com/photo-1602143307185-8a4c9c0c9780?auto=format&fit=crop&q=80&w=400", // 水壶照片
      tag: "减塑行动"
    }
  ];

  return (
    <section style={{ margin: '60px 0', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: '#0D4D4D', fontSize: '2.2rem', marginBottom: '10px' }}>🌿 日常环保小百科</h2>
        <p style={{ color: '#0D4D4D', opacity: 0.8 }}>简单的行动，就能给拉夫堡的自然环境带来巨大改变。</p>
      </div>

      {/* 网格布局展示 */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px' 
      }}>
        {ecoActions.map((action, index) => (
          <div key={index} className="eco-card" style={{
            backgroundColor: '#B2D1D6', // 你喜欢的蓝色背景
            borderRadius: '25px',
            overflow: 'hidden',
            boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
            border: '2px solid rgba(13, 77, 77, 0.1)',
            transition: 'transform 0.3s'
          }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src={action.img} alt={action.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '25px' }}>
              <span style={{ 
                fontSize: '0.75rem', 
                backgroundColor: '#0D4D4D', 
                color: '#DEFF9A', 
                padding: '4px 12px', 
                borderRadius: '10px',
                fontWeight: 'bold'
              }}>
                {action.tag}
              </span>
              <h3 style={{ color: '#0D4D4D', marginTop: '15px', fontSize: '1.4rem' }}>{action.title}</h3>
              <p style={{ color: '#0D4D4D', fontSize: '1rem', lineHeight: '1.6', marginTop: '10px' }}>
                {action.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailyEcoActions;