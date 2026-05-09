import React, { useState, useEffect } from 'react';

const BudgetGame = ({ stats, setStats }) => {
  const [currentOptions, setCurrentOptions] = useState([]);
  const [round, setRound] = useState(1);
  const [lastAction, setLastAction] = useState('市长，请做出您的首个决策。');

  const policyPool = [
    { title: '建设M1高速绿色隔音带', icon: '🌲', money: -30, eco: 20, happy: 10, desc: '减少交通噪音，种植本地树种。' },
    { title: '在大学城推行共享单车', icon: '🚲', money: -15, eco: 15, happy: 20, desc: '减少私家车排放，提高出行快乐度。' },
    { title: '索尔河畔新建工业码头', icon: '🏗️', money: 50, eco: -25, happy: -10, desc: '增加就业，但会破坏河流生态。' },
    { title: '建立社区屋顶菜园', icon: '🥕', money: -10, eco: 10, happy: 25, desc: '增强居民凝聚力，提供新鲜有机食物。' },
    { title: '引进大型自动化仓储中心', icon: '📦', money: 70, eco: -30, happy: 5, desc: '巨大的经济收益，但带来光污染和噪音。' },
    { title: "翻修女王公园 (Queen's Park)", icon: '⛲', money: -25, eco: 15, happy: 30, desc: '提升城市形象，为动物提供栖息地。' },
    { title: '举办拉夫堡国际灯光节', icon: '✨', money: 40, eco: -15, happy: 25, desc: '吸引游客消费，但增加电力消耗和垃圾。' },
    { title: '实施全城无人机垃圾巡检', icon: '🛸', money: -35, eco: 30, happy: 5, desc: '高科技环保，但维护成本极其昂贵。' },
    {title: '建设城市太阳能屋顶计划',
    icon: '☀️',
    money: -40,
    eco: 35,
    happy: 15,
    desc: '推广绿色能源，降低长期碳排放。'
  },
  {
    title: '扩大停车场建设',
    icon: '🅿️',
    money: 35,
    eco: -20,
    happy: 5,
    desc: '方便交通，但减少绿地面积。'
  },
  {
    title: '建立野生动物保护区',
    icon: '🦌',
    money: -30,
    eco: 40,
    happy: 10,
    desc: '保护本地生物多样性。'
  },
  {
    title: '举办大型商业购物节',
    icon: '🛍️',
    money: 60,
    eco: -15,
    happy: 20,
    desc: '带动消费，但增加垃圾与交通压力。'
  },
  {
    title: '修建生态步行绿道',
    icon: '🌳',
    money: -20,
    eco: 25,
    happy: 30,
    desc: '鼓励居民步行与户外活动。'
  },
  {
    title: '开放夜间娱乐商业区',
    icon: '🎉',
    money: 45,
    eco: -10,
    happy: 25,
    desc: '刺激夜间经济，但增加噪音。'
  },
  {
    title: '升级城市污水处理系统',
    icon: '💧',
    money: -45,
    eco: 40,
    happy: 15,
    desc: '改善河流水质与生态环境。'
  },
  {
    title: '扩建高速公路出口',
    icon: '🛣️',
    money: 50,
    eco: -20,
    happy: 10,
    desc: '改善物流效率，但增加空气污染。'
  },
  {
    title: '建设城市共享花园',
    icon: '🌼',
    money: -15,
    eco: 15,
    happy: 35,
    desc: '提升社区互动与绿色空间。'
  },
  {
    title: '引进国际科技企业总部',
    icon: '💻',
    money: 80,
    eco: -10,
    happy: 15,
    desc: '创造就业机会并提高财政收入。'
  },
  {
    title: '恢复湿地生态工程',
    icon: '🦆',
    money: -35,
    eco: 45,
    happy: 10,
    desc: '为水鸟和两栖动物提供安全栖息地。'
  },
  {
    title: '举办河畔音乐嘉年华',
    icon: '🎵',
    money: 30,
    eco: -10,
    happy: 35,
    desc: '吸引游客，但可能影响河流生态。'
  },
  {
    title: '建立校园环保教育中心',
    icon: '📚',
    money: -20,
    eco: 20,
    happy: 25,
    desc: '提高居民环保意识和社区参与度。'
  },
  {
    title: '建设智能垃圾分类系统',
    icon: '♻️',
    money: -25,
    eco: 30,
    happy: 15,
    desc: '提高垃圾回收效率，减少污染。'
  }
  ];

  const refreshOptions = () => {
    const shuffled = [...policyPool].sort(() => 0.5 - Math.random());
    setCurrentOptions(shuffled.slice(0, 3));
  };

  useEffect(() => {
    refreshOptions();
  }, [round]);

  const getCityEnding = () => {
    if (stats.money <= 0) {
      return {
        title: '财政破产',
        icon: '💸',
        type: 'danger',
        text: '城市资金耗尽，许多环保计划无法继续推进。你需要通过知识挑战赚取更多建设基金。'
      };
    }

    if (stats.eco <= 25) {
      return {
        title: '污染危机',
        icon: '🏭',
        type: 'danger',
        text: '生态指数过低，河流、绿地和野生动物都面临严重压力。'
      };
    }

    if (stats.eco >= 80 && stats.happy >= 70) {
      return {
        title: '生态城市',
        icon: '🌿',
        type: 'success',
        text: '城市在生态保护和居民生活之间找到了优秀平衡。'
      };
    }

    if (stats.money >= 180 && stats.eco < 60) {
      return {
        title: '经济城市',
        icon: '🏙️',
        type: 'warning',
        text: '城市经济增长很快，但生态保护仍需要更多投入。'
      };
    }

    if (stats.happy >= 85) {
      return {
        title: '高幸福社区',
        icon: '😊',
        type: 'success',
        text: '居民生活满意度很高，社区凝聚力正在增强。'
      };
    }

    return {
      title: '平衡发展中',
      icon: '⚖️',
      type: 'normal',
      text: '城市仍在探索财政、生态和幸福感之间的最佳平衡。'
    };
  };

  const handleDecision = (policy) => {
    if (stats.money + policy.money < 0) {
      alert('资金不足！我们需要先通过问答游戏赢取建设经费。');
      return;
    }

    setStats(prev => ({
      money: prev.money + policy.money,
      eco: Math.max(0, Math.min(100, prev.eco + policy.eco)),
      happy: Math.max(0, Math.min(100, prev.happy + policy.happy))
    }));

    setLastAction(`第${round}轮决策：执行了“${policy.title}”。影响力已更新。`);
    setRound(prev => prev + 1);
  };

  const cityEnding = getCityEnding();

  return (
    <section className="budget-game-section">
      <div className="budget-game-card">
        <div className="budget-game-header">
          <div>
            <span className="budget-game-badge">LOUGHBOROUGH 2026</span>
            <h2>🏛️ 拉夫堡市长：战略仪表盘</h2>
            <p>第 {round} 轮：在不确定性中寻找城市平衡点</p>
          </div>
        </div>

        <div className="budget-game-layout">
          <div className="budget-kpi-panel">
            <h3>📊 城市关键绩效指标</h3>

            <div className="budget-bars">
              <div className="bar-group">
                <div className="bar-label">
                  <span>💰 财政预算</span>
                  <strong>${stats.money}</strong>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill money-bar"
                    style={{ width: `${Math.min(100, stats.money / 2)}%` }}
                  />
                </div>
              </div>

              <div className="bar-group">
                <div className="bar-label">
                  <span>🌿 生态指数</span>
                  <strong>{stats.eco}/100</strong>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill eco-bar"
                    style={{ width: `${stats.eco}%` }}
                  />
                </div>
              </div>

              <div className="bar-group">
                <div className="bar-label">
                  <span>😊 居民福祉</span>
                  <strong>{stats.happy}/100</strong>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill happy-bar"
                    style={{ width: `${stats.happy}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="budget-system-brief">
              💬 系统简报：{lastAction}
            </div>

            <div className={`city-ending-card ${cityEnding.type}`}>
              <div className="city-ending-icon">
                {cityEnding.icon}
              </div>

              <div>
                <span>当前城市结局</span>
                <h4>{cityEnding.title}</h4>
                <p>{cityEnding.text}</p>
              </div>
            </div>
          </div>

          <div className="budget-policy-panel">
            <h3>🏢 政策办公室</h3>
            <p>
              选择一个政策并观察它对城市财政、生态和居民幸福感的影响。
            </p>

            <div className="budget-policy-list">
              {currentOptions.map((option, index) => (
                <button
                  key={index}
                  className="budget-policy-card"
                  onClick={() => handleDecision(option)}
                >
                  <span className="budget-policy-icon">{option.icon}</span>

                  <span className="budget-policy-content">
                    <strong>{option.title}</strong>
                    <small>{option.desc}</small>
                    <em>
                      {option.money < 0 ? '需要预算投入' : '可带来财政收益'}
                    </em>
                  </span>

                  <span className="budget-policy-arrow">➜</span>
                </button>
              ))}
            </div>

            <button className="budget-refresh-button" onClick={refreshOptions}>
              🔄 换一批政策顾问
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetGame;