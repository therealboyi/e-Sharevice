// Buttons.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.scss';

const Button = ({
  variant,
  svgIconPath,
  text,
  onClick,
  color = '#007bff', // Default color
  hoverColor = '#ffffff', // Default hover color
  borderRadius = '4px', // Default border radius
  padding = '10px 20px' // Default padding
}) => {
  const buttonClass = `button button--${variant}`;

  const style = {
    backgroundColor: color,
    borderRadius: borderRadius,
    padding: padding,
    '--hover-color': hoverColor
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
  padding: PropTypes.string
};

export default Button;
