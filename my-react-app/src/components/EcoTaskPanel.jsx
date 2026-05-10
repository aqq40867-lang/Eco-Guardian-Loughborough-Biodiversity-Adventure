import React from 'react';

const EcoTaskPanel = ({ tasks }) => {
  const taskList = [
    {
      key: 'quiz',
      label: 'Answer 3 quiz questions',
      icon: '💡',
      done: tasks.quizAnswered >= 3,
      progress: `${Math.min(tasks.quizAnswered, 3)}/3`
    },
    {
      key: 'gallery',
      label: 'View 2 wildlife cards',
      icon: '🦊',
      done: tasks.galleryViewed >= 2,
      progress: `${Math.min(tasks.galleryViewed, 2)}/2`
    },
    {
      key: 'policy',
      label: 'Make 1 city policy decision',
      icon: '🏛️',
      done: tasks.policyMade >= 1,
      progress: `${Math.min(tasks.policyMade, 1)}/1`
    }
  ];

  const allDone = taskList.every(task => task.done);

  return (
    <aside className="eco-task-panel">
      <div className="eco-task-header">
        <span>🌱 Daily Eco Tasks</span>
        {allDone && <strong>Completed!</strong>}
      </div>

      <div className="eco-task-list">
        {taskList.map(task => (
          <div
            key={task.key}
            className={`eco-task-item ${task.done ? 'done' : ''}`}
          >
            <span className="eco-task-icon">{task.icon}</span>

            <div>
              <p>{task.label}</p>
              <small>{task.progress}</small>
            </div>

            <span className="eco-task-check">
              {task.done ? '✅' : '○'}
            </span>
          </div>
        ))}
      </div>

      {allDone && (
        <div className="eco-task-reward">
          🎉 Eco Badge Unlocked: Eco Hero
        </div>
      )}
    </aside>
  );
};

export default EcoTaskPanel;