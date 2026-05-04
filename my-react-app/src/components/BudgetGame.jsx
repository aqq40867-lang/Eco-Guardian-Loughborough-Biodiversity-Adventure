import React, { useState, useEffect } from 'react';

const BudgetGame = ({ stats, setStats }) => {
  const [currentOptions, setCurrentOptions] = useState([]);
  const [round, setRound] = useState(1);
  const [lastAction, setLastAction] = useState("市长，请做出您的首个决策。");

  // 1. 扩大的政策选项池 (Task 1: 环境与经济深度内容)
  const policyPool = [
    { title: "建设M1高速绿色隔音带", icon: "🌲", money: -30, eco: 20, happy: 10, desc: "减少交通噪音，种植本地树种。" },
    { title: "在大学城推行共享单车", icon: "🚲", money: -15, eco: 15, happy: 20, desc: "减少私家车排放，提高出行快乐度。" },
    { title: "索尔河畔新建工业码头", icon: "🏗️", money: 50, eco: -25, happy: -10, desc: "增加就业，但会破坏河流生态。" },
    { title: "建立社区屋顶菜园", icon: "🥕", money: -10, eco: 10, happy: 25, desc: "增强居民凝聚力，提供新鲜有机食物。" },
    { title: "引进大型自动化仓储中心", icon: "📦", money: 70, eco: -30, happy: 5, desc: "巨大的经济收益，但带来光污染和噪音。" },
    { title: "翻修女王公园 (Queen's Park)", icon: "⛲", money: -25, eco: 15, happy: 30, desc: "提升城市形象，为动物提供栖息地。" },
    { title: "举办拉夫堡国际灯光节", icon: "✨", money: 40, eco: -15, happy: 25, desc: "吸引游客消费，但增加电力消耗和垃圾。" },
    { title: "实施全城无人机垃圾巡检", icon: "🛸", money: -35, eco: 30, happy: 5, desc: "高科技环保，但维护成本极其昂贵。" }
  ];

  // 2. 逻辑：每轮随机抽取三个选项
  const refreshOptions = () => {
    const shuffled = [...policyPool].sort(() => 0.5 - Math.random());
    setCurrentOptions(shuffled.slice(0, 3));
  };

  useEffect(() => {
    refreshOptions();
  }, [round]);

  // 3. 处理决策
  const handleDecision = (policy) => {
    if (stats.money + policy.money < 0) {
      alert("资金不足！我们需要先通过问答游戏赢取建设经费。");
      return;
    }

    setStats(prev => ({
      money: prev.money + policy.money,
      eco: Math.max(0, Math.min(100, prev.eco + policy.eco)),
      happy: Math.max(0, Math.min(100, prev.happy + policy.happy))
    }));

    setLastAction(`第${round}轮决策：执行了“${policy.title}”。影响力已更新。`);
    setRound(round + 1);
  };

  return (
    <section className="card-style" style={{ margin: '40px 0', padding: '40px', backgroundColor: '#000', color: '#fff', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
      <div style={{ borderBottom: '1px solid #333', paddingBottom: '20px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2 style={{ color: '#deff9a', margin: 0, fontSize: '2.4rem' }}>拉夫堡市长：<span>战略仪表盘</span></h2>
          <p style={{ color: '#daffde', opacity: 0.8, marginTop: '10px' }}>第 {round} 轮：在不确定性中寻找城市平衡点</p>
        </div>
        <div style={{ textAlign: 'right', color: '#deff9a', fontWeight: 'bold' }}>LOUGHBOROUGH 2026</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
        {/* 左侧：动态柱状图 (Professional Bar Chart) */}
        <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '20px', border: '1px solid #333' }}>
          <h3 style={{ marginBottom: '40px', color: '#fff' }}>📊 城市关键绩效指标 (KPI)</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
            {/* 经济柱 */}
            <div className="bar-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ color: '#fff' }}>💰 财政预算 (Money)</span>
                <span style={{ color: '#deff9a' }}>${stats.money}</span>
              </div>
              <div style={{ height: '12px', background: '#333', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min(100, stats.money / 2)}%`, height: '100%', background: 'linear-gradient(90deg, #deff9a, #a3cf3d)', transition: 'width 0.8s ease' }}></div>
              </div>
            </div>

            {/* 生态柱 */}
            <div className="bar-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ color: '#fff' }}>🌿 生态指数 (Ecology)</span>
                <span style={{ color: '#5eead4' }}>{stats.eco}/100</span>
              </div>
              <div style={{ height: '12px', background: '#333', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ width: `${stats.eco}%`, height: '100%', background: 'linear-gradient(90deg, #5eead4, #0d9488)', transition: 'width 0.8s ease' }}></div>
              </div>
            </div>

            {/* 快乐柱 */}
            <div className="bar-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ color: '#fff' }}>😊 居民福祉 (Happiness)</span>
                <span style={{ color: '#fbbf24' }}>{stats.happy}/100</span>
              </div>
              <div style={{ height: '12px', background: '#333', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ width: `${stats.happy}%`, height: '100%', background: 'linear-gradient(90deg, #fbbf24, #d97706)', transition: 'width 0.8s ease' }}></div>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '40px', padding: '15px', background: '#262626', borderRadius: '10px', fontSize: '0.85rem', color: '#deff9a', borderLeft: '4px solid #deff9a' }}>
            💬 系统简报：{lastAction}
          </div>
        </div>

        {/* 右侧：决策选项卡 (Blind Choices) */}
        <div>
          <h3 style={{ marginBottom: '25px' }}>🏛️ 政策办公桌</h3>
          <p style={{ fontSize: '0.9rem', color: '#daffde', marginBottom: '20px' }}>选择一个政策并观察其对城市 KPI 的长远影响。请注意：有些选择的代价是隐形的。</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {currentOptions.map((option, index) => (
              <div 
                key={index} 
                onClick={() => handleDecision(option)}
                style={{ 
                  background: '#262626', padding: '20px', borderRadius: '15px', cursor: 'pointer',
                  border: '1px solid #333', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '20px'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#deff9a'; e.currentTarget.style.background = '#323232'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.background = '#262626'; }}
              >
                <div style={{ fontSize: '2.5rem', background: '#000', borderRadius: '12px', width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {option.icon}
                </div>
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ margin: 0, color: '#deff9a' }}>{option.title}</h4>
                  <p style={{ margin: '5px 0 0', fontSize: '0.8rem', color: '#999' }}>耗资评估：{option.money < 0 ? '高预算' : '产生收益'}</p>
                </div>
                <div style={{ color: '#deff9a' }}>➡️</div>
              </div>
            ))}
          </div>
          <button className="btn-kid" style={{ marginTop: '20px', width: '100%', background: '#333', border: 'none', color: '#fff' }} onClick={refreshOptions}>
            🔄 换一批政策顾问
          </button>
        </div>
      </div>
    </section>
  );
};

export default BudgetGame;