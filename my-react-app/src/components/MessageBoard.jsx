import React, { useEffect, useState } from 'react';
import AuthPanel from './AuthPanel';

const API_BASE = 'http://dv0881.sci-project.lboro.ac.uk/eco-city/api';

const MessageBoard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('PROMPT');

  const [messages, setMessages] = useState([]);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [postText, setPostText] = useState('');
  const [loading, setLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('eco-current-user')) || null
  );

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${API_BASE}/get-messages.php`);
      const data = await response.json();

      if (data.success) {
        setMessages(data.messages);
      }
    } catch (error) {
      console.error('Failed to load messages:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      setIsLoggedIn(true);
      setView('BOARD');
      alert('Login successful! Welcome back, Eco Guardian.');
    }
  };

  const handlePost = async (e) => {
    e.preventDefault();

    if (!postText.trim()) return;

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/add-message.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: currentUser?.name || 'Anonymous',
          message: postText
        })
      });

      const data = await response.json();

      if (data.success) {
        setPostText('');
        await fetchMessages();
      } else {
        alert(data.error || 'Failed to post message');
      }
    } catch (error) {
      console.error('Failed to post message:', error);
      alert('Unable to connect to the server. Please check if the PHP API is available.');
    } finally {
      setLoading(false);
    }
  };

  if (view === 'PROMPT') {
    return (
      <section
        className="message-section card-style"
        id="message"
      >
        <p>
          Join the community to share your eco ideas and receive the latest updates from the Loughborough Eco Adventure!
        </p>

        <div className="message-actions">
          <button
            className="btn-kid"
            onClick={() => setView('LOGIN')}
          >
            Register / Login
          </button>

          <button
            className="btn-kid secondary"
            onClick={() => setView('BOARD')}
          >
            View Messages First
          </button>
        </div>
      </section>
    );
  }

  if (view === 'LOGIN') {
    return (
      <AuthPanel
        onLogin={(user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
          setView('BOARD');
        }}
      />
    );
  }

  return (
    <section className="message-board-section card-style" id="message">
      <h3>🌱 Eco Community Board</h3>

      {!isLoggedIn && (
        <p className="message-warning">
          You are currently in visitor mode. Log in to post messages.
        </p>
      )}

      <div className="message-list">
        {messages.length === 0 ? (
          <p>No messages yet. Become the first Eco Guardian!</p>
        ) : (
          messages.map((m) => (
            <div key={m.id} className="message-item">
              <strong>{m.name || 'Anonymous'}:</strong>
              <span>{m.message}</span>
              <small>{m.created_at}</small>
            </div>
          ))
        )}
      </div>

      {isLoggedIn ? (
        <form onSubmit={handlePost} className="message-post-form">
          <input
            type="text"
            placeholder="Share your green actions..."
            className="input-style"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />

          <button
            type="submit"
            className="btn-kid"
            disabled={loading}
          >
            {loading ? 'Posting...' : 'Post'}
          </button>
        </form>
      ) : (
        <button
          className="btn-kid"
          onClick={() => setView('LOGIN')}
        >
          Log in to Post a Message
        </button>
      )}
    </section>
  );
};

export default MessageBoard;