// ProfileAvatar.jsx

import React from "react";
import PropTypes from "prop-types";
import "./ProfileAvatar.scss";

const ProfileAvatar = ({ src, alt, size = "medium" }) => {
  return (
    <div className={`profile-avatar profile-avatar--${size}`}>
      <div className="profile-avatar__image-container">
        <img src={src} alt={alt} className="profile-avatar__image" />
      </div>
    </div>
  );
};

ProfileAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default ProfileAvatar;
