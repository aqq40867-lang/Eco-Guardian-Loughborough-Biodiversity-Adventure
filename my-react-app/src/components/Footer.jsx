import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-card">

        {/* ==========================================================
            Brand Section
           ========================================================== */}
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
            © 2026 Loughborough Eco Learning Project
            <br />
            Biodiversity · Sustainability · Community
          </p>
        </div>

        {/* ==========================================================
            Explore Links
           ========================================================== */}
        <div className="footer-column">
          <h4>Explore</h4>

          <a href="/biodiversity">
            Wildlife Gallery
          </a>

          <a href="/education">
            Eco Learning
          </a>

          <a href="/quiz">
            Eco Quiz
          </a>

          <a href="/game">
            Eco City Game
          </a>

          <a href="/message">
            Community Board
          </a>

          <a href="/">
            Eco Map
          </a>
        </div>

        {/* ==========================================================
            Resources Links
           ========================================================== */}
        <div className="footer-column">
          <h4>Resources</h4>

          <a
            href="https://www.lboro.ac.uk/"
            target="_blank"
            rel="noreferrer"
          >
            Loughborough University
          </a>

          <a
            href="https://www.naturespot.org/"
            target="_blank"
            rel="noreferrer"
          >
            NatureSpot UK
          </a>

          <a
            href="https://www.wwf.org.uk/"
            target="_blank"
            rel="noreferrer"
          >
            WWF UK
          </a>

          <a href="#wildlife">
            Local Wildlife
          </a>

          <a href="#students">
            Student Learning
          </a>

          <a href="#sustainability">
            Sustainability
          </a>

          <a href="#contact">
            Contact
          </a>
        </div>

        {/* ==========================================================
            Eco Badges
           ========================================================== */}
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

        {/* ==========================================================
            Footer Bottom
           ========================================================== */}
        <div className="footer-bottom">

          <a href="#privacy">
            Privacy Policy
          </a>

          <a href="#terms">
            Terms & Conditions
          </a>

          <a href="#accessibility">
            Accessibility
          </a>

          <a href="#cookies">
            Cookie Settings
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;