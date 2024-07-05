// Avatar.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';

const Avatar = ({ src, alt, size }) => {
  return (
    <div className={`avatar avatar--${size}`}>
      <img src={src} alt={alt} className="avatar__image" />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Avatar.defaultProps = {
  size: 'medium',
};

export default Avatar;