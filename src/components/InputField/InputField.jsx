// InputField.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './InputField.scss';

const InputField = ({ type, placeholder, icon, value, onChange }) => {
  return (
    <div className="input-field">
      {icon && <span className="input-field__icon">{icon}</span>}
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        className="input-field__input" 
      />
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  type: 'text',
  placeholder: '',
  icon: null,
};

export default InputField;

