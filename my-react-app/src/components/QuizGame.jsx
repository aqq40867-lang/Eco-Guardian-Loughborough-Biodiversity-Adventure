import React, { useState } from 'react';

const QuizGame = ({ onCorrect }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [explanation, setExplanation] = useState('');
  const [answered, setAnswered] = useState(false);

  const questions = [
    {
      q: '拉夫堡哪种动物被称为“水质监测员”？',
      options: ['红狐狸', '绿头鸭', '灰松鼠'],
      correct: '绿头鸭',
      reward: 20,
      explanation:
        '绿头鸭通常生活在河流、池塘等水域附近，它们的活动情况能帮助人们观察水环境是否健康。'
    },
    {
      q: '大冠蝾螈最喜欢住在拉夫堡的哪里？',
      options: ['图书馆', '火车站', '干净的池塘'],
      correct: '干净的池塘',
      reward: 20,
      explanation:
        '大冠蝾螈依赖干净的池塘繁殖和生活，因此池塘生态环境非常重要。'
    },
    {
      q: '为了保护生物多样性，我们应该怎么做？',
      options: ['乱扔垃圾', '保护栖息地', '采摘野花'],
      correct: '保护栖息地',
      reward: 30,
      explanation:
        '保护栖息地能为动物提供食物、水源和安全空间，是保护生态系统最重要的方法之一。'
    },
    {
      q: '哪种动物擅长在树林中快速攀爬？',
      options: ['灰松鼠', '河狸', '刺猬'],
      correct: '灰松鼠',
      reward: 20,
      explanation:
        '灰松鼠拥有灵活的爪子和长尾巴，可以在树木之间迅速移动。'
    },
    {
      q: '为什么不应该随意向河流丢弃垃圾？',
      options: ['会影响动物生存', '会让天空变蓝', '会增加树木数量'],
      correct: '会影响动物生存',
      reward: 30,
      explanation:
        '垃圾会污染水源，影响鱼类、鸟类和其他依赖水环境生存的动物。'
    },
    {
      q: '哪种动物通常在夜晚活动？',
      options: ['红狐狸', '蝴蝶', '鸭子'],
      correct: '红狐狸',
      reward: 20,
      explanation:
        '红狐狸通常在黄昏和夜晚寻找食物，因此被称为夜行性动物。'
    },
    {
      q: '为什么城市需要更多绿色空间？',
      options: ['帮助生态和居民健康', '让交通更拥堵', '减少动物数量'],
      correct: '帮助生态和居民健康',
      reward: 30,
      explanation:
        '公园和绿色空间不仅能帮助动物生存，还能改善空气质量和居民心理健康。'
    },
    {
      q: '蝴蝶在生态系统中有什么作用？',
      options: ['传播花粉', '污染空气', '破坏森林'],
      correct: '传播花粉',
      reward: 20,
      explanation:
        '蝴蝶在采蜜时会帮助植物传播花粉，对植物繁殖非常重要。'
    },
    {
      q: '如果发现野生动物受伤，最好的做法是什么？',
      options: ['联系专业救助机构', '把它带回家养', '继续围观'],
      correct: '联系专业救助机构',
      reward: 30,
      explanation:
        '专业动物救助机构拥有合适的设备和知识，可以更安全地帮助野生动物。'
    },
    {
      q: '建设“绿色城市”最重要的目标是什么？',
      options: ['平衡生态、经济与居民幸福', '只发展工业', '完全禁止公园'],
      correct: '平衡生态、经济与居民幸福',
      reward: 50,
      explanation:
        '真正的绿色城市需要同时考虑生态保护、经济发展和居民生活质量。'
    }
  ];

  const handleAnswer = (ans) => {
    if (answered) return;

    setAnswered(true);

    const question = questions[currentQuestion];

    if (ans === question.correct) {
      const reward = question.reward;

      setFeedback(`✅ 太棒了！答对了。获得奖励金币：$${reward}`);

      setExplanation(question.explanation);

      if (onCorrect) {
        onCorrect(reward);
      }

      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
          setFeedback('');
          setExplanation('');
          setAnswered(false);
        } else {
          setFeedback('🎊 你完成了所有挑战，成为了博学守卫者！');
        }
      }, 3500);
    } else {
      setFeedback('❌ 哎呀，再想一想？保护环境需要更准确的知识哦。');

      setExplanation(question.explanation);

      setAnswered(false);
    }
  };

  const isCorrectFeedback =
    feedback.includes('✅') || feedback.includes('🎊');

  return (
    <section className="quiz-section" id="quiz">
      <div className="quiz-showcase-frame">
        <div className="quiz-header">
          <span className="quiz-badge">ECO CHALLENGE</span>

          <h2>💡 科普知识挑战赛</h2>

          <p>
            答对问题，为你的“绿色城市”赚取建设基金！
          </p>
        </div>

        <div className="quiz-question-card">
          <span className="quiz-question-count">
            Question {currentQuestion + 1} / {questions.length}
          </span>

          <h3>
            问题 {currentQuestion + 1}：
            {questions[currentQuestion].q}
          </h3>

          <div className="quiz-options">
            {questions[currentQuestion].options.map(opt => (
              <button
                key={opt}
                className="quiz-option-btn"
                onClick={() => handleAnswer(opt)}
                disabled={answered}
              >
                {opt}
              </button>
            ))}
          </div>

          <div
            className={`quiz-feedback ${
              isCorrectFeedback ? 'success' : 'error'
            }`}
          >
            {feedback}
          </div>

          {explanation && (
            <div className="quiz-explanation">
              <strong>知识解释：</strong>

              <p>{explanation}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizGame;