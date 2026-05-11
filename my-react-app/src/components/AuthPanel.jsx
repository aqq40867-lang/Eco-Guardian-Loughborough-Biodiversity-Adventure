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
      alert('Please fill in all fields');
      return;
    }

    const users = JSON.parse(localStorage.getItem('eco-users')) || [];

    const exists = users.find(user => user.email === formData.email);

    if (exists) {
      alert('This email is already registered. Please log in.');
      return;
    }

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    };

    localStorage.setItem('eco-users', JSON.stringify([...users, newUser]));

    alert('Registration successful. Please log in.');
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
      alert('Incorrect email or password');
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

    alert(`Welcome back, ${user.name}!`);
  };

  return (
    <section className="auth-card">
      <span className="auth-badge">
        ECO GUARDIAN ACCOUNT
      </span>

      <h3>
        {mode === 'login'
          ? 'Guardian Login'
          : 'Register as an Eco Guardian'}
      </h3>

      <form
        className="auth-form"
        onSubmit={mode === 'login' ? handleLogin : handleRegister}
      >
        {mode === 'register' && (
          <input
            type="text"
            placeholder="Your Name"
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
          placeholder="Email Address"
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
          placeholder="Password"
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
          {mode === 'login' ? 'Login' : 'Register'}
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
          ? "Don't have an account? Register now"
          : 'Already have an account? Back to login'}
      </button>
    </section>
  );
};

export default AuthPanel;