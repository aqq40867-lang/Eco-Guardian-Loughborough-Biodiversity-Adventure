import React, { useState } from 'react';

const EcoTaskPanel = ({ tasks = {} }) => {
  const [collapsed, setCollapsed] = useState(false);

  const taskList = [
    {
      title: 'Answer 3 quiz questions',
      reward: `${Math.min(tasks.quizAnswered || 0, 3)}/3`,
      done: (tasks.quizAnswered || 0) >= 3,
      icon: '💡'
    },
    {
      title: 'View 2 wildlife cards',
      reward: `${Math.min(tasks.galleryViewed || 0, 2)}/2`,
      done: (tasks.galleryViewed || 0) >= 2,
      icon: '🦊'
    },
    {
      title: 'Make 1 city policy decision',
      reward: `${Math.min(tasks.policyMade || 0, 1)}/1`,
      done: (tasks.policyMade || 0) >= 1,
      icon: '🏛️'
    }
  ];

  const allDone = taskList.every(task => task.done);

  return (
    <div className={`eco-task-panel ${collapsed ? 'collapsed' : ''}`}>
      <div className="eco-task-header">
        <span className="eco-task-title">🌿 Daily Tasks</span>

        <button
          className="eco-task-toggle"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? '＋' : '－'}
        </button>
      </div>

      {!collapsed && (
        <>
          <div className="eco-task-list">
            {taskList.map((task, index) => (
              <div
                key={index}
                className={`eco-task-item ${task.done ? 'done' : ''}`}
              >
                <span className="eco-task-icon">{task.icon}</span>

                <div>
                  <p>{task.title}</p>
                  <small>{task.reward}</small>
                </div>

                <span className="eco-task-check">
                  {task.done ? '✅' : '⬜'}
                </span>
              </div>
            ))}
          </div>

          <div className="eco-task-reward">
            {allDone
              ? '🎉 All tasks completed!'
              : '🎁 Complete all tasks for bonus rewards!'}
          </div>
        </>
      )}
    </div>
  );
};

export default EcoTaskPanel;