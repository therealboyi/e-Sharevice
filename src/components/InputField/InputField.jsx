// InputField.jsx

import React from "react";
import PropTypes from "prop-types";
import "./InputField.scss";

const InputField = ({ type = "text", placeholder = "", value, onChange }) => {
  return (
    <div className="input-field">
      <span className="input-field__icon input-field__icon--search"></span>
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
