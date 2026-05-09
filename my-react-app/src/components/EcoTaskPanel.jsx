import React from 'react';

const EcoTaskPanel = ({ tasks }) => {
  const taskList = [
    {
      key: 'quiz',
      label: '回答 3 道题',
      icon: '💡',
      done: tasks.quizAnswered >= 3,
      progress: `${Math.min(tasks.quizAnswered, 3)}/3`
    },
    {
      key: 'gallery',
      label: '查看 2 个动物图鉴',
      icon: '🦊',
      done: tasks.galleryViewed >= 2,
      progress: `${Math.min(tasks.galleryViewed, 2)}/2`
    },
    {
      key: 'policy',
      label: '做出 1 个城市政策决策',
      icon: '🏛️',
      done: tasks.policyMade >= 1,
      progress: `${Math.min(tasks.policyMade, 1)}/1`
    }
  ];

  const allDone = taskList.every(task => task.done);

  return (
    <aside className="eco-task-panel">
      <div className="eco-task-header">
        <span>🌱 今日环保任务</span>
        {allDone && <strong>完成！</strong>}
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
          🎉 获得环保徽章：Eco Hero
        </div>
      )}
    </aside>
  );
};

export default EcoTaskPanel;