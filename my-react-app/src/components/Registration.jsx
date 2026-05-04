import React from 'react';

const Registration = () => {
  return (
    <footer className="registration-section">
      <div className="newsletter-box">
        <h2>Be the first to know</h2>
        <p>Get the latest animal news and Loughborough updates straight to your inbox.</p>
        <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <button type="submit" className="btn-yellow">SIGN UP</button>
        </form>
      </div>
      <div className="footer-links">
        <p>© 2026 Loughborough Eco Project. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Registration;