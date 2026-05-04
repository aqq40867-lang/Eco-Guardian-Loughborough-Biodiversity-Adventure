import React, { useState } from 'react';

/**
 * EcoStory 剧情组件
 * @param onFinish - 可选的回调函数。如果存在，点击最后一页会触发跳转。
 */
const EcoStory = ({ onFinish }) => {
  const [step, setStep] = useState(0);

  // 5个阶段的剧情数据
  const storyPages = [
    {
      title: "第一章：沉睡的灰暗小镇",
      text: "这是拉夫堡的索尔河畔。看，到处都是乱扔的塑料瓶，水面也变得灰蒙蒙的...",
      img: "🌫️",
      action: "点击卡片内部，开始清理！",
      color: "#D1D5DB"
    },
    {
      title: "第二章：弯下腰的魔法",
      text: "你捡起了最后一个瓶子。奇迹发生了！水流变清澈了，河底的鹅卵石露了出来。",
      img: "✨",
      action: "点击继续，撒下种子...",
      color: "#A7F3D0"
    },
    {
      title: "第三章：生命的萌芽",
      text: "在你的努力下，第一片本地野花在岸边绽放。快看，谁被花香吸引过来了？",
      img: "🌱",
      action: "点击寻找小生命...",
      color: "#6EE7B7"
    },
    {
      title: "第四章：老朋友回归",
      text: "一只绿头鸭落在了水面！接着是翠鸟、水獭... 它们终于回家了。",
      img: "🦆",
      action: "迎接拉夫堡的英雄！",
      color: "#34D399"
    },
    {
      title: "最终章：拉夫堡的守护者",
      text: "现在的拉夫堡生机勃勃。但这只是个开始，每一个环保小动作都在改变世界！",
      img: "🌍",
      action: onFinish ? "✨ 准备好了，进入城市中心！ ✨" : "重新体验这段旅程",
      color: "#059669"
    }
  ];

  const handleInteraction = (e) => {
    e.stopPropagation();
    
    // 如果还没到最后一页，继续下一页
    if (step < storyPages.length - 1) {
      setStep(step + 1);
    } 
    // 如果是最后一页
    else {
      if (onFinish) {
        // 执行 App.jsx 传来的跳转逻辑
        onFinish();
      } else {
        // 如果是在主页回顾，则回到第一页
        setStep(0);
      }
    }
  };

  return (
    <section 
      onClick={handleInteraction} 
      style={{ 
        margin: '0 auto', 
        padding: '50px', 
        backgroundColor: storyPages[step].color,
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        height: '480px', // 固定模块高度
        width: '95%',
        maxWidth: '850px',
        borderRadius: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.2)',
        userSelect: 'none'
      }}
    >
      {/* 视觉提示：巨大的背景符号 */}
      <div style={{ 
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        fontSize: '15rem', opacity: 0.1, pointerEvents: 'none'
      }}>
        {storyPages[step].img}
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <h4 style={{ color: '#064E3B', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '20px' }}>
          {storyPages[step].title}
        </h4>
        
        <div style={{ fontSize: '90px', marginBottom: '20px' }}>
          {storyPages[step].img}
        </div>
        
        <p style={{ 
          fontSize: '1.4rem', lineHeight: '1.6', color: '#064E3B', 
          fontWeight: '600', maxWidth: '650px', margin: '0 auto'
        }}>
          {storyPages[step].text}
        </p>

        <div style={{ 
          marginTop: '40px', fontSize: '0.9rem', color: '#064E3B', 
          fontWeight: 'bold', background: 'rgba(255,255,255,0.4)',
          display: 'inline-block', padding: '10px 30px', borderRadius: '30px'
        }}>
          {storyPages[step].action}
        </div>
      </div>

      {/* 底部阅读进度指示 */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, height: '8px', width: '100%', background: 'rgba(0,0,0,0.05)' }}>
        <div style={{ 
          height: '100%', backgroundColor: '#064E3B', 
          width: `${((step + 1) / storyPages.length) * 100}%`,
          transition: 'width 0.4s ease'
        }}></div>
      </div>
    </section>
  );
};

export default EcoStory;