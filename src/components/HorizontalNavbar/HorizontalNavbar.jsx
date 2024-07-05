// HorizontalNavbar.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './HorizontalNavbar.scss';

const HorizontalNavbar = ({ items }) => {
  return (
    <nav className="horizontal-navbar">
      <ul className="horizontal-navbar__list">
        {items.map((item, index) => (
          <li key={index} className="horizontal-navbar__item">
            <a href={item.link} className="horizontal-navbar__link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

HorizontalNavbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
};

export default HorizontalNavbar;