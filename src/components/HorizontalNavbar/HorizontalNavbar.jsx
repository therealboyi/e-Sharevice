// HorizontalNavbar.jsx

import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './HorizontalNavbar.scss';

const HorizontalNavbar = ({ items }) => {
  const navRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
  };

  const scrollLeft = () => {
    navRef.current.scrollBy({ left: -600, behavior: 'smooth' }); 
  };

  const scrollRight = () => {
    navRef.current.scrollBy({ left: 600, behavior: 'smooth' }); 
  };

  useEffect(() => {
    const navElement = navRef.current;
    handleScroll();
    navElement.addEventListener('scroll', handleScroll);
    return () => {
      navElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="horizontal-navbar-wrapper">
      {showLeftArrow && (
        <button className="horizontal-navbar__arrow horizontal-navbar__arrow--left" onClick={scrollLeft}></button>
      )}
      <nav className="horizontal-navbar" ref={navRef}>
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
      {showRightArrow && (
        <button className="horizontal-navbar__arrow horizontal-navbar__arrow--right" onClick={scrollRight}></button>
      )}
    </div>
  );
};

HorizontalNavbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HorizontalNavbar;
