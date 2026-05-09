import React, { useEffect, useState } from 'react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('eco-cookie-consent');

    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('eco-cookie-consent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('eco-cookie-consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <div>
          <span className="cookie-badge">🍪 COOKIE NOTICE</span>

          <h3>We use cookies</h3>

          <p>
            This educational website uses cookies to improve your experience,
            remember your progress, and analyse site performance.
          </p>
        </div>

        <div className="cookie-actions">
          <button
            className="cookie-btn secondary"
            onClick={handleReject}
          >
            Reject
          </button>

          <button
            className="cookie-btn primary"
            onClick={handleAccept}
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;