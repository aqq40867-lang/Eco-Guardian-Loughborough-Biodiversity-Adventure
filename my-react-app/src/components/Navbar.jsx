import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar-pill">
      <div className="nav-container">

        {/* Navigation */}
        <ul className="nav-links">
          <li><Link to="/">首页</Link></li>

          <li><Link to="/biodiversity">生物图鉴</Link></li>

          <li><a href="#map">Map</a></li>
          <li><a href="#quiz">Quiz</a></li>
          <li><a href="#BudgetGame">拉夫堡市长</a></li>
          

          <li><a href="#message">留言板</a></li>
        </ul>

        {/* Register Button */}
        <a href="#footer" className="nav-register">
          REGISTER
        </a>

      </div>
    </nav>
  );
};

export default Navbar;