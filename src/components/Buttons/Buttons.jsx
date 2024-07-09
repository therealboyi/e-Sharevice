// Buttons.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.scss';

const Button = ({
  variant,
  svgIconPath,
  text,
  onClick,
  color,
  hoverColor,
  borderRadius,
  padding,
  fullWidth
}) => {
  const buttonClass = `button button--${variant}`;

  const style = {
    ...(color && { backgroundColor: color }),
    ...(hoverColor && { '--hover-color': hoverColor }),
    ...(borderRadius && { borderRadius: borderRadius }),
    ...(padding && { padding: padding }),
    ...(fullWidth && { width: '100%' })
  };

  return (
    <button className={buttonClass} onClick={onClick} style={style}>
      {svgIconPath && (
        <span className="button__icon">
          <img src={svgIconPath} alt={`${variant} icon`} />
        </span>
      )}
      {text && <span className="button__text">{text}</span>}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  svgIconPath: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  fullWidth: PropTypes.bool
};

export default Button;
