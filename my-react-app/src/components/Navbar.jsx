import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar-pill">
      <div className="nav-container">
        <div className="nav-logo">Logo</div>
        <ul className="nav-links">
          <li><a href="/">首页</a></li>
          <li><a href="#education">科普</a></li>
          <li><a href="#map">Map</a></li>
          <li><a href="/quiz">Quiz</a></li>
          <li><a href="#message">留言板</a></li>
        </ul>
        <a href="/register" className="nav-register">register</a>
      </div>
    </nav>
  );
};

export default Navbar;