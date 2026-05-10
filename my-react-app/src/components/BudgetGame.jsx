import React, { useState, useEffect } from 'react';

const BudgetGame = ({ stats, setStats, onPolicyMade }) => {
  const [currentOptions, setCurrentOptions] = useState([]);
  const [round, setRound] = useState(1);
  const [lastAction, setLastAction] = useState('Mayor, make your first city decision.');

  const policyPool = [
    {
      title: 'Build Green Noise Barriers along the M1',
      icon: '🌲',
      money: -30,
      eco: 20,
      happy: 5,
      desc: 'Reduces traffic noise and creates green corridors for wildlife.'
    },
    {
      title: 'Launch Shared Bikes near the University',
      icon: '🚲',
      money: -15,
      eco: 15,
      happy: 15,
      desc: 'Encourages low-carbon travel and makes short trips easier.'
    },
    {
      title: 'Build an Industrial Dock near River Soar',
      icon: '🏗️',
      money: 60,
      eco: -30,
      happy: -20,
      desc: 'Creates jobs but damages river habitats and increases pollution.'
    },
    {
      title: 'Create Community Rooftop Gardens',
      icon: '🥕',
      money: -15,
      eco: 15,
      happy: 20,
      desc: 'Provides local food and improves community wellbeing.'
    },
    {
      title: 'Open a Large Automated Warehouse',
      icon: '📦',
      money: 75,
      eco: -25,
      happy: -10,
      desc: 'Boosts the economy but increases traffic, noise and light pollution.'
    },
    {
      title: "Renovate Queen's Park",
      icon: '⛲',
      money: -25,
      eco: 20,
      happy: 25,
      desc: 'Improves public green space and supports local wildlife.'
    },
    {
      title: 'Host a Large International Light Festival',
      icon: '✨',
      money: 40,
      eco: -20,
      happy: 10,
      desc: 'Attracts visitors but increases electricity use and waste.'
    },
    {
      title: 'Use Drones for City Waste Monitoring',
      icon: '🛸',
      money: -35,
      eco: 25,
      happy: -5,
      desc: 'Improves waste control but raises cost and privacy concerns.'
    },
    {
      title: 'Install Solar Panels on Public Buildings',
      icon: '☀️',
      money: -40,
      eco: 35,
      happy: 5,
      desc: 'Cuts long-term carbon emissions but requires high upfront spending.'
    },
    {
      title: 'Expand Town Centre Car Parks',
      icon: '🅿️',
      money: 35,
      eco: -25,
      happy: -10,
      desc: 'Helps drivers but removes green space and encourages more cars.'
    },
    {
      title: 'Create a Wildlife Protection Zone',
      icon: '🦌',
      money: -30,
      eco: 40,
      happy: 5,
      desc: 'Protects biodiversity but limits some development opportunities.'
    },
    {
      title: 'Hold a Large Shopping Festival',
      icon: '🛍️',
      money: 60,
      eco: -20,
      happy: 5,
      desc: 'Increases spending but creates waste and transport pressure.'
    },
    {
      title: 'Build an Eco Walking Trail',
      icon: '🌳',
      money: -20,
      eco: 25,
      happy: 25,
      desc: 'Encourages walking, outdoor activity and nature learning.'
    },
    {
      title: 'Open a Night-time Entertainment District',
      icon: '🎉',
      money: 45,
      eco: -10,
      happy: -15,
      desc: 'Grows the night economy but causes noise and resident complaints.'
    },
    {
      title: 'Upgrade the Wastewater Treatment System',
      icon: '💧',
      money: -45,
      eco: 40,
      happy: 5,
      desc: 'Improves water quality and protects the River Soar ecosystem.'
    },
    {
      title: 'Expand a Major Road Junction',
      icon: '🛣️',
      money: 50,
      eco: -25,
      happy: -15,
      desc: 'Improves logistics but increases air pollution and congestion.'
    },
    {
      title: 'Build Community Flower Gardens',
      icon: '🌼',
      money: -15,
      eco: 15,
      happy: 30,
      desc: 'Improves neighbourhood pride and supports pollinators.'
    },
    {
      title: 'Attract an International Tech Headquarters',
      icon: '💻',
      money: 80,
      eco: -10,
      happy: -5,
      desc: 'Creates jobs but increases pressure on housing and transport.'
    },
    {
      title: 'Restore Wetland Habitats',
      icon: '🦆',
      money: -35,
      eco: 45,
      happy: 5,
      desc: 'Provides safe habitats for birds, frogs and aquatic wildlife.'
    },
    {
      title: 'Host a Riverside Music Carnival',
      icon: '🎵',
      money: 30,
      eco: -15,
      happy: -5,
      desc: 'Brings tourism income but may disturb river wildlife and residents.'
    },
    {
      title: 'Build an Eco Education Centre',
      icon: '📚',
      money: -20,
      eco: 20,
      happy: 15,
      desc: 'Teaches children and families how to make greener choices.'
    },
    {
      title: 'Install Smart Recycling Bins',
      icon: '♻️',
      money: -25,
      eco: 30,
      happy: 5,
      desc: 'Improves recycling efficiency and reduces street waste.'
    },
    {
      title: 'Raise Local Environmental Taxes',
      icon: '💷',
      money: 45,
      eco: 15,
      happy: -30,
      desc: 'Funds green projects but many residents dislike higher taxes.'
    },
    {
      title: 'Restrict Cars in the Town Centre',
      icon: '🚫',
      money: -10,
      eco: 30,
      happy: -20,
      desc: 'Improves air quality but frustrates drivers and some businesses.'
    },
    {
      title: 'Close a Polluting Factory',
      icon: '🏭',
      money: -35,
      eco: 35,
      happy: -25,
      desc: 'Reduces pollution but causes job losses in the short term.'
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
        title: 'Financial Crisis',
        icon: '💸',
        type: 'danger',
        text: 'The city has run out of money and cannot continue many public projects.'
      };
    }

    if (stats.eco <= 25) {
      return {
        title: 'Pollution Crisis',
        icon: '🏭',
        type: 'danger',
        text: 'The environment is under serious pressure, and wildlife habitats are at risk.'
      };
    }

    if (stats.eco >= 80 && stats.happy >= 70) {
      return {
        title: 'Eco City',
        icon: '🌿',
        type: 'success',
        text: 'The city has achieved a strong balance between nature and community wellbeing.'
      };
    }

    if (stats.money >= 180 && stats.eco < 60) {
      return {
        title: 'Economic City',
        icon: '🏙️',
        type: 'warning',
        text: 'The city is financially strong, but environmental protection needs more attention.'
      };
    }

    if (stats.happy >= 85) {
      return {
        title: 'High-Happiness Community',
        icon: '😊',
        type: 'success',
        text: 'Residents are very satisfied, but long-term sustainability still matters.'
      };
    }

    return {
      title: 'Balanced Development',
      icon: '⚖️',
      type: 'normal',
      text: 'The city is still trying to balance money, ecology and public happiness.'
    };
  };

  const handleDecision = (policy) => {
    if (stats.money + policy.money < 0) {
      alert('Not enough money. Try earning more funds through the quiz first.');
      return;
    }

    setStats(prev => ({
      money: prev.money + policy.money,
      eco: Math.max(0, Math.min(100, prev.eco + policy.eco)),
      happy: Math.max(0, Math.min(100, prev.happy + policy.happy))
    }));

    setLastAction(`Round ${round}: You selected "${policy.title}". City indicators have changed.`);
    setRound(prev => prev + 1);

    if (onPolicyMade) {
      onPolicyMade();
    }
  };

  const cityEnding = getCityEnding();

  return (
    <section className="budget-game-section">
      <div className="budget-game-card">
        <div className="budget-game-header">
          <span className="budget-game-badge">LOUGHBOROUGH 2026</span>
          <h2>🏛️ Loughborough Mayor Dashboard</h2>
          <p>Round {round}: Find balance in uncertain city decisions.</p>
        </div>

        <div className="budget-game-layout">
          <div className="budget-kpi-panel">
            <h3>📊 City Key Performance Indicators</h3>

            <div className="budget-bars">
              <div className="bar-group">
                <div className="bar-label">
                  <span>💰 City Budget</span>
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
                  <span>🌿 Ecology Score</span>
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
                  <span>😊 Public Happiness</span>
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
              💬 System Brief: {lastAction}
            </div>

            <div className={`city-ending-card ${cityEnding.type}`}>
              <div className="city-ending-icon">{cityEnding.icon}</div>

              <div>
                <span>Current City Ending</span>
                <h4>{cityEnding.title}</h4>
                <p>{cityEnding.text}</p>
              </div>
            </div>
          </div>

          <div className="budget-policy-panel">
            <h3>🏢 Policy Office</h3>
            <p>
              Choose one policy and observe how it changes the city budget,
              ecology and public happiness.
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
                      {option.money < 0 ? 'Requires investment' : 'Generates income'}
                    </em>
                  </span>

                  <span className="budget-policy-arrow">➜</span>
                </button>
              ))}
            </div>

            <button className="budget-refresh-button" onClick={refreshOptions}>
              🔄 Ask New Policy Advisors
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetGame;