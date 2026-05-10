import React, { useState } from 'react';

const QuizGame = ({ onCorrect }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [explanation, setExplanation] = useState('');
  const [answered, setAnswered] = useState(false);

  const questions = [
    {
      q: 'Which animal in Loughborough is often seen as a “water quality indicator”?',
      options: ['Red Fox', 'Mallard Duck', 'Grey Squirrel'],
      correct: 'Mallard Duck',
      reward: 20,
      explanation:
        'Mallard ducks usually live near rivers and ponds, so their presence can help indicate whether local water environments are healthy.'
    },
    {
      q: 'Where do Great Crested Newts prefer to live?',
      options: ['Libraries', 'Train stations', 'Clean ponds'],
      correct: 'Clean ponds',
      reward: 20,
      explanation:
        'Great Crested Newts rely on clean ponds for breeding and survival, making healthy wetland ecosystems very important.'
    },
    {
      q: 'What should we do to protect biodiversity?',
      options: ['Litter in public spaces', 'Protect habitats', 'Pick wildflowers'],
      correct: 'Protect habitats',
      reward: 30,
      explanation:
        'Protecting habitats gives animals food, water and safe living spaces, making it one of the most important ways to support ecosystems.'
    },
    {
      q: 'Which animal is known for climbing quickly through trees?',
      options: ['Grey Squirrel', 'Beaver', 'Hedgehog'],
      correct: 'Grey Squirrel',
      reward: 20,
      explanation:
        'Grey squirrels use their sharp claws and long tails to move quickly between trees.'
    },
    {
      q: 'Why should people avoid throwing rubbish into rivers?',
      options: [
        'It harms wildlife',
        'It makes the sky bluer',
        'It increases tree growth'
      ],
      correct: 'It harms wildlife',
      reward: 30,
      explanation:
        'Rubbish pollutes water and can seriously affect fish, birds and other animals that depend on river ecosystems.'
    },
    {
      q: 'Which animal is usually active at night?',
      options: ['Red Fox', 'Butterfly', 'Duck'],
      correct: 'Red Fox',
      reward: 20,
      explanation:
        'Red foxes often search for food during the evening and nighttime, making them nocturnal animals.'
    },
    {
      q: 'Why do cities need more green spaces?',
      options: [
        'To support ecosystems and public health',
        'To create more traffic',
        'To reduce wildlife populations'
      ],
      correct: 'To support ecosystems and public health',
      reward: 30,
      explanation:
        'Parks and green spaces help wildlife survive while also improving air quality and people’s wellbeing.'
    },
    {
      q: 'What role do butterflies play in ecosystems?',
      options: ['Pollinating plants', 'Polluting the air', 'Destroying forests'],
      correct: 'Pollinating plants',
      reward: 20,
      explanation:
        'Butterflies help spread pollen while feeding on flowers, supporting plant reproduction.'
    },
    {
      q: 'What is the best thing to do if you find an injured wild animal?',
      options: [
        'Contact a wildlife rescue organisation',
        'Take it home as a pet',
        'Stand around watching'
      ],
      correct: 'Contact a wildlife rescue organisation',
      reward: 30,
      explanation:
        'Professional rescue organisations have the equipment and experience needed to safely help injured wildlife.'
    },
    {
      q: 'What is the main goal of building a “green city”?',
      options: [
        'Balance ecology, economy and happiness',
        'Only develop industry',
        'Completely remove parks'
      ],
      correct: 'Balance ecology, economy and happiness',
      reward: 50,
      explanation:
        'A truly sustainable city must balance environmental protection, economic development and quality of life.'
    }
  ];

  const handleAnswer = (ans) => {
    if (answered) return;

    setAnswered(true);

    const question = questions[currentQuestion];

    if (ans === question.correct) {
      const reward = question.reward;

      setFeedback(`✅ Correct! You earned $${reward} eco coins.`);

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
          setFeedback(
            '🎊 You completed all the challenges and became an Eco Knowledge Guardian!'
          );
        }
      }, 3500);
    } else {
      setFeedback(
        '❌ Not quite. Try again and think carefully about protecting the environment!'
      );

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

          <h2>💡 Eco Knowledge Challenge</h2>

          <p>
            Answer questions correctly to earn funding for your green city!
          </p>
        </div>

        <div className="quiz-question-card">
          <span className="quiz-question-count">
            Question {currentQuestion + 1} / {questions.length}
          </span>

          <h3>
            Question {currentQuestion + 1}: {questions[currentQuestion].q}
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
              <strong>Did You Know?</strong>

              <p>{explanation}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizGame;