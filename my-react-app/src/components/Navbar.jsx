import React from 'react';

import {
  NavLink
} from 'react-router-dom';

const Navbar = () => {

  const activeStyle = ({ isActive }) =>
    isActive ? 'nav-active' : '';

  return (
    <nav className="navbar-pill">

      <div className="nav-container">

        <ul className="nav-links">

          <li>
            <NavLink
              to="/"
              className={activeStyle}
            >
              Home Page
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/biodiversity"
              className={activeStyle}
            >
              Biodiversity Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/education"
              className={activeStyle}
            >
              Eco Tips
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/quiz"
              className={activeStyle}
            >
              Quiz
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/game"
              className={activeStyle}
            >
              Game
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/message"
              className={activeStyle}
            >
              Community
            </NavLink>
          </li>

        </ul>

      </div>

    </nav>
  );
};

export default Navbar;