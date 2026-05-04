import React from 'react';

const Backpack = ({ badges }) => {
  const handleShare = () => {
    const text = `我在拉夫堡生态大冒险获得了 [${badges.join(', ') || '新手'}] 勋章！快来挑战吧！`;
    navigator.clipboard.writeText(text).then(() => alert("成就已复制，快去分享吧！🚀"));
  };

  return (
    <section id="backpack" style={{ 
      backgroundColor: '#f0fdf4', padding: '40px', textAlign: 'center', 
      borderRadius: '30px', margin: '40px 0', border: '2px dashed #0D4D4D' 
    }}>
      <h3 style={{ color: '#0D4D4D', fontSize: '1.8rem', marginBottom: '25px' }}>🏅 我的成就背包</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', minHeight: '80px', alignItems: 'center' }}>
        {badges.length === 0 ? (
          <p style={{ color: '#666' }}>完成挑战赢取勋章吧！</p>
        ) : (
          badges.map(b => (
            <div key={b} style={{ textAlign: 'center', transform: 'scale(1.2)' }}>
              <span style={{ fontSize: '3rem' }}>{b === '绿色巨人' ? '🌳' : '💎'}</span>
              <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 'bold' }}>{b}</p>
            </div>
          ))
        )}
      </div>
      {badges.length > 0 && (
        <button onClick={handleShare} className="btn-kid" style={{ marginTop: '25px', backgroundColor: '#0D4D4D', color: '#DEFF9A' }}>
          📤 分享我的成就
        </button>
      )}
    </section>
  );
};

export default Backpack;