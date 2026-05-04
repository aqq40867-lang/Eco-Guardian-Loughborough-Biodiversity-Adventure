import React, { useState } from 'react';

const QuizGame = ({ onCorrect }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [feedback, setFeedback] = useState("");

  const questions = [
    {
      q: "拉夫堡哪种动物被称为‘水质监测员’？",
      options: ["红狐狸", "绿头鸭", "灰松鼠"],
      correct: "绿头鸭",
      reward: 20
    },
    {
      q: "大冠蝾螈最喜欢住在拉夫堡的哪里？",
      options: ["图书馆", "火车站", "干净的池塘"],
      correct: "干净的池塘",
      reward: 20
    },
    {
      q: "为了保护生物多样性，我们应该怎么做？",
      options: ["乱扔垃圾", "保护栖息地", "采摘野花"],
      correct: "保护栖息地",
      reward: 30
    }
  ];

  const handleAnswer = (ans) => {
    if (ans === questions[currentQuestion].correct) {
      const reward = questions[currentQuestion].reward;
      setFeedback(`✅ 太棒了！答对了。获得奖励金币：$${reward}`);
      onCorrect(reward); // 调用父组件函数加钱
      
      // 2秒后进入下一题
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setFeedback("");
        } else {
          setFeedback("🎊 你完成了所有挑战，成为了博学守卫者！");
        }
      }, 2000);
    } else {
      setFeedback("❌ 哎呀，再想一想？保护环境需要更准确的知识哦。");
    }
  };

  return (
    <section className="card-style" style={{ margin: '40px 0', padding: '30px', backgroundColor: '#FFF9E5' }}>
      <h2 style={{ color: 'var(--lboro-green)', textAlign: 'center' }}>💡 科普知识挑战赛</h2>
      <p style={{ textAlign: 'center' }}>答对问题，为你的“绿色城市”赚取建设基金！</p>
      
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <h3 style={{ fontSize: '1.4rem', color: 'var(--lboro-earth)' }}>
          问题 {currentQuestion + 1}: {questions[currentQuestion].q}
        </h3>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
          {questions[currentQuestion].options.map(opt => (
            <button 
              key={opt} 
              className="btn-kid" 
              onClick={() => handleAnswer(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        
        <div style={{ marginTop: '20px', fontWeight: 'bold', height: '30px', color: feedback.includes('✅') ? '#059669' : '#DC2626' }}>
          {feedback}
        </div>
      </div>
    </section>
  );
};

export default QuizGame;