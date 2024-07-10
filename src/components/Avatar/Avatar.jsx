// Avatar.jsx

import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./Avatar.scss";
import AvatarMenu from "../AvatarMenu/AvatarMenu";

const Avatar = ({ src, alt, size = "medium" }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const avatarRef = useRef(null);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleClickOutside = (event) => {
    if (avatarRef.current && !avatarRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    if (menuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuVisible]);

  return (
    <div className={`avatar avatar--${size}`} ref={avatarRef}>
      <div
        className="avatar__icon avatar__icon--custom"
        onClick={toggleMenu}
      ></div>
      <div className="avatar__image-container" onClick={toggleMenu}>
        <img src={src} alt={alt} className="avatar__image" />
      </div>
      {menuVisible && <AvatarMenu />}
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Avatar;
