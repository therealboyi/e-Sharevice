// src/components/NavMenu/NavMenu.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import "./NavMenu.scss";
import { useAuth } from "../../contexts/AuthContext.jsx";

const NavMenu = () => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getActiveClass = (path) =>
    location.pathname === path ? "nav-menu__item--active" : "";

  return (
    <nav
      className={`nav-menu ${
        isVisible ? "nav-menu--visible" : "nav-menu--hidden"
      }`}
    >
      <ul className="nav-menu__list">
        <li className={`nav-menu__item ${getActiveClass("/")}`}>
          <Link to="/" className="nav-menu__link">
            <span className="nav-menu__icon nav-menu__icon--explore"></span>
            <span className="nav-menu__text">Explore</span>
          </Link>
        </li>
        {user && (
          <li className={`nav-menu__item ${getActiveClass("/exchanges")}`}>
            <Link to="/exchanges" className="nav-menu__link">
              <span className="nav-menu__icon nav-menu__icon--exchanges"></span>
              <span className="nav-menu__text">Exchanges</span>
            </Link>
          </li>
        )}
        <li className={`nav-menu__item ${getActiveClass("/saved")}`}>
          <Link to="/saved" className="nav-menu__link">
            <span className="nav-menu__icon nav-menu__icon--saved"></span>
            <span className="nav-menu__text">Saved</span>
          </Link>
        </li>
        {user && (
          <li className={`nav-menu__item ${getActiveClass("/messages")}`}>
            <Link to="/messages" className="nav-menu__link">
              <span className="nav-menu__icon nav-menu__icon--messages"></span>
              <span className="nav-menu__text">Messages</span>
            </Link>
          </li>
        )}
        {user ? (
          <li className={`nav-menu__item ${getActiveClass("/profile")}`}>
            <Link to="/profile" className="nav-menu__link">
              <span className="nav-menu__icon nav-menu__icon--profile"></span>
              <span className="nav-menu__text">Profile</span>
            </Link>
          </li>
        ) : (
          <li className={`nav-menu__item ${getActiveClass("/login")}`}>
            <Link to="/login" className="nav-menu__link">
              <span className="nav-menu__icon nav-menu__icon--login"></span>
              <span className="nav-menu__text">Login</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

NavMenu.propTypes = {
  activeItem: PropTypes.string,
  onItemClick: PropTypes.func,
};

export default NavMenu;
