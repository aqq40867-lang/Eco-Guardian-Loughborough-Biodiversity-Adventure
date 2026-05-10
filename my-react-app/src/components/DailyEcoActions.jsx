import React from 'react';
import BottleImg from '../assets/Actions/bottle.jpg';
import PlantImg from '../assets/Actions/plant.jpg';
import RiverImg from '../assets/Actions/river.jpg';

const DailyEcoActions = () => {
  // 环保行为数据
  const ecoActions = [
  {
    title: "Protect the River Soar: Pick Up Plastic",
    desc: "While walking along the River Soar in Loughborough, pick up plastic bottles and litter. This helps protect fish and other wildlife from pollution.",
    img: RiverImg,
    tag: "River Protection"
  },

  {
    title: "Be a Campus Gardener: Plant Wildflowers",
    desc: "Plant native wildflowers in a garden or balcony. They provide food for bees and butterflies and help support biodiversity in spring.",
    img: PlantImg,
    tag: "Biodiversity"
  },

  {
    title: "Bring Your Own Bottle: Reduce Waste",
    desc: "Use a reusable water bottle instead of disposable plastic ones. Loughborough campus has many free refill stations to help reduce plastic waste.",
    img: BottleImg,
    tag: "Reduce Plastic"
  }
  ];

  return (
    <section style={{ margin: '60px 0', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: '#0D4D4D', fontSize: '2.2rem', marginBottom: '10px' }}>🌿 Daily Eco Tips</h2>
        <p style={{ color: '#0D4D4D', opacity: 0.8 }}>Simple actions that can make a big difference to Loughborough's natural environment.</p>
      </div>

      {/* 网格布局展示 */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px' 
      }}>
        {ecoActions.map((action, index) => (
          <div key={index} className="eco-card daily-eco-card" style={{
            backgroundColor: '#B2D1D6',
            borderRadius: '25px',
            overflow: 'hidden',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
            border: '2px solid rgba(13, 77, 77, 0.1)',
            transition: 'transform 0.3s'
          }}>

            <div className="daily-eco-image-box">
              <img
                src={action.img}
                alt={action.title}
                className="daily-eco-image"
              />
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