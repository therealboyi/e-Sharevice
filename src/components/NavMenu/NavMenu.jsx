// NavMenu.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './NavMenu.scss';

const NavMenu = ({ isVisible }) => {
  return (
    <nav className={`nav-menu ${isVisible ? 'nav-menu--visible' : 'nav-menu--hidden'}`}>
      <ul className="nav-menu__list">
        <li className="nav-menu__item">
          <a href="#explore" className="nav-menu__link">
            <span className="nav-menu__icon nav-menu__icon--explore"></span>
            <span className="nav-menu__text">Explore</span>
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#wishlists" className="nav-menu__link">
            <span className="nav-menu__icon nav-menu__icon--wishlists"></span>
            <span className="nav-menu__text">Wishlists</span>
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#trips" className="nav-menu__link">
            <span className="nav-menu__icon nav-menu__icon--trips"></span>
            <span className="nav-menu__text">Trips</span>
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#messages" className="nav-menu__link">
            <span className="nav-menu__icon nav-menu__icon--messages"></span>
            <span className="nav-menu__text">Messages</span>
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#profile" className="nav-menu__link">
            <span className="nav-menu__icon nav-menu__icon--profile"></span>
            <span className="nav-menu__text">Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

NavMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default NavMenu;

