import React, { useState } from 'react';

const AuthPanel = ({ onLogin }) => {
  const [mode, setMode] = useState('login');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleRegister = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert('请填写完整信息');
      return;
    }

    const users = JSON.parse(localStorage.getItem('eco-users')) || [];

    const exists = users.find(user => user.email === formData.email);

    if (exists) {
      alert('该邮箱已经注册，请直接登录');
      return;
    }

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    };

    localStorage.setItem('eco-users', JSON.stringify([...users, newUser]));

    alert('注册成功，请登录');
    setMode('login');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('eco-users')) || [];

    const user = users.find(
      user =>
        user.email === formData.email &&
        user.password === formData.password
    );

    if (!user) {
      alert('邮箱或密码错误');
      return;
    }

    const loginUser = {
      name: user.name,
      email: user.email
    };

    localStorage.setItem('eco-current-user', JSON.stringify(loginUser));

    if (onLogin) {
      onLogin(loginUser);
    }

    alert(`欢迎回来，${user.name}！`);
  };

  return (
    <section className="auth-card">
      <span className="auth-badge">
        ECO GUARDIAN ACCOUNT
      </span>

      <h3>
        {mode === 'login' ? '守护者登录' : '注册生态守护者'}
      </h3>

      <form
        className="auth-form"
        onSubmit={mode === 'login' ? handleLogin : handleRegister}
      >
        {mode === 'register' && (
          <input
            type="text"
            placeholder="你的名字"
            className="input-style"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value
              })
            }
          />
        )}

        <input
          type="email"
          placeholder="邮箱地址"
          className="input-style"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value
            })
          }
        />

        <input
          type="password"
          placeholder="密码"
          className="input-style"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value
            })
          }
        />

        <button type="submit" className="btn-kid">
          {mode === 'login' ? '登录' : '注册'}
        </button>
      </form>

      <button
        type="button"
        className="auth-switch-btn"
        onClick={() =>
          setMode(mode === 'login' ? 'register' : 'login')
        }
      >
        {mode === 'login'
          ? '还没有账号？立即注册'
          : '已有账号？返回登录'}
      </button>
    </section>
  );
};

export default AuthPanel;