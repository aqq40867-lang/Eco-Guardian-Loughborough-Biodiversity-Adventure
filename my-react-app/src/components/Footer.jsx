import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-card">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-mark">🌿</span>
            <div>
              <h2>Loughborough</h2>
              <h2>Eco City</h2>
            </div>
          </div>

          <div className="footer-socials">
            <span>𝕏</span>
            <span>◎</span>
            <span>f</span>
            <span>in</span>
            <span>▶</span>
          </div>

          <p className="footer-address">
            © 2026 Loughborough Eco Learning Project<br />
            Biodiversity · Sustainability · Community
          </p>
        </div>

        <div className="footer-column">
          <h4>Useful Links</h4>
          <a href="#biodiversity">Biodiversity Gallery</a>
          <a href="#map">Interactive Map</a>
          <a href="#quiz">Eco Quiz</a>
          <a href="#budget">Mayor Dashboard</a>
          <a href="#actions">Daily Actions</a>
          <a href="#message">Message Board</a>
        </div>

        <div className="footer-column">
          <h4>Information</h4>
          <a href="#education">Eco Education</a>
          <a href="#wildlife">Local Wildlife</a>
          <a href="#community">For Students</a>
          <a href="#sustainability">Sustainability</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-awards">
          <h4>Eco Learning Badges</h4>

          <div className="footer-badge-row">
            <div className="footer-award-card">
              <span>🌱</span>
              <strong>Eco</strong>
              <small>Hero</small>
            </div>

            <div className="footer-award-card gold">
              <span>🏆</span>
              <strong>Green</strong>
              <small>2026</small>
            </div>

            <div className="footer-award-card">
              <span>🦊</span>
              <strong>Wildlife</strong>
              <small>Explorer</small>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <a href="#privacy">Privacy policy</a>
          <a href="#terms">Terms & conditions</a>
          <a href="#accessibility">Accessibility</a>
          <a href="#cookies">Cookie settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;