// AvatarMenu.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AvatarMenu.scss";
import { useAuth } from "../../contexts/AuthContext";

const AvatarMenu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    window.location.reload(); // Reload the page after logging out
  };

  return (
    <div className="avatar-menu">
      <ul className="avatar-menu__list">
        {user ? (
          <>
            <li className="avatar-menu__item">
              <Link to="/messages" className="avatar-menu__link">
                Messages
              </Link>
            </li>
            <li className="avatar-menu__item">
              <Link to="/exchanges" className="avatar-menu__link">
                Exchanges
              </Link>
            </li>
            <li className="avatar-menu__item">
              <Link to="/saved" className="avatar-menu__link">
                Saved+
              </Link>
            </li>
            <li className="avatar-menu__divider"></li>
            <li className="avatar-menu__item">
              <Link to="/profile" className="avatar-menu__link">
                Portfolio Dashboard
              </Link>
            </li>
            <li className="avatar-menu__item">
              <Link to="/profile" className="avatar-menu__link">
                Account
              </Link>
            </li>
            <li className="avatar-menu__divider"></li>
            <li className="avatar-menu__item">
              <Link to="/refer-a-friend" className="avatar-menu__link">
                Refer a friend
              </Link>
            </li>
            <li className="avatar-menu__item">
              <Link to="/support-hub" className="avatar-menu__link">
                Support Hub
              </Link>
            </li>
            <li className="avatar-menu__divider"></li>
            <li className="avatar-menu__item" onClick={handleLogout}>
              <span className="avatar-menu__link">Log out</span>
            </li>
          </>
        ) : (
          <>
            <li className="avatar-menu__item">
              <Link to="/login" className="avatar-menu__link">
                Log in / Sign up
              </Link>
            </li>
            <li className="avatar-menu__divider"></li>
            <li className="avatar-menu__item">
              <Link to="/refer-a-friend" className="avatar-menu__link">
                Refer a friend
              </Link>
            </li>
            <li className="avatar-menu__item">
              <Link to="/support-hub" className="avatar-menu__link">
                Support Hub
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default AvatarMenu;
