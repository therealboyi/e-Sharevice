// NavMenu.jsx

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './NavMenu.scss';

const NavMenu = ({ activeItem, onItemClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav-menu ${isVisible ? 'nav-menu--visible' : 'nav-menu--hidden'}`}>
      <ul className="nav-menu__list">
        <li className={`nav-menu__item ${activeItem === 'explore' ? 'nav-menu__item--active' : ''}`}>
          <a href="#explore" className="nav-menu__link" onClick={() => onItemClick('explore')}>
            <span className="nav-menu__icon nav-menu__icon--explore"></span>
            <span className="nav-menu__text">Explore</span>
          </a>
        </li>
        <li className={`nav-menu__item ${activeItem === 'exchange' ? 'nav-menu__item--active' : ''}`}>
          <a href="#exchange" className="nav-menu__link" onClick={() => onItemClick('exchange')}>
            <span className="nav-menu__icon nav-menu__icon--exchange"></span>
            <span className="nav-menu__text">Exchange</span>
          </a>
        </li>
        <li className={`nav-menu__item ${activeItem === 'saved' ? 'nav-menu__item--active' : ''}`}>
          <a href="#saved" className="nav-menu__link" onClick={() => onItemClick('saved')}>
            <span className="nav-menu__icon nav-menu__icon--saved"></span>
            <span className="nav-menu__text">Saved</span>
          </a>
        </li>
        <li className={`nav-menu__item ${activeItem === 'messages' ? 'nav-menu__item--active' : ''}`}>
          <a href="#messages" className="nav-menu__link" onClick={() => onItemClick('messages')}>
            <span className="nav-menu__icon nav-menu__icon--messages"></span>
            <span className="nav-menu__text">Messages</span>
          </a>
        </li>
        <li className={`nav-menu__item ${activeItem === 'profile' ? 'nav-menu__item--active' : ''}`}>
          <a href="#profile" className="nav-menu__link" onClick={() => onItemClick('profile')}>
            <span className="nav-menu__icon nav-menu__icon--profile"></span>
            <span className="nav-menu__text">Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

NavMenu.propTypes = {
  activeItem: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default NavMenu;
