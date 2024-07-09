// LoginPage.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../components/Buttons/Buttons";
import "./LoginPage.scss";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContinue = () => {
    console.log("Email submitted:", email);
  };

  return (
    <div className="login-page">
      <div className="login-page__content">
        <h2 className="login-page__title">Log in or sign up</h2>{" "}
        <hr className="login-page__divider-top" />
        <h3 className="login-page__subtitle">Welcome to e-Sharevice</h3>
        <div className="login-page__form">
          <input
            type="email"
            className="login-page__input"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
          />
          <Button
            variant="submit"
            text="Continue"
            onClick={handleContinue}
            color="#00bfff" // Sky blue
            hoverColor="#87ceeb"
            borderRadius="4px"
            padding="12px"
            fullWidth
          />
        </div>
        <div className="login-page__divider-container">
          <hr className="login-page__divider" />
          <span className="login-page__divider-text">or</span>
          <hr className="login-page__divider" />
        </div>
        <Button
          variant="facebook"
          svgIconPath="/src/assets/icons/meta.svg"
          text="Continue with Meta"
          onClick={() => {}}
          color="#fff"
          hoverColor="#f0f0f0"
          borderRadius="4px"
          padding="12px"
          fullWidth
        />
        <Button
          variant="google"
          svgIconPath="/src/assets/icons/google2.svg"
          text="Continue with Google"
          onClick={() => {}}
          color="#fff"
          hoverColor="#f0f0f0"
          borderRadius="4px"
          padding="12px"
          fullWidth
        />
        <Button
          variant="apple"
          svgIconPath="/src/assets/icons/apple2.svg"
          text="Continue with Apple"
          onClick={() => {}}
          color="#fff"
          hoverColor="#f0f0f0"
          borderRadius="4px"
          padding="12px"
          fullWidth
        />
        <Button
          variant="phone"
          svgIconPath="/src/assets/icons/phone2.svg"
          text="Continue with Phone"
          onClick={() => {}}
          color="#fff"
          hoverColor="#f0f0f0"
          borderRadius="4px"
          padding="12px"
          fullWidth
        />
        <p className="login-page__help">
          <a href="#" className="login-page__help-link">
            Need help?
          </a>
        </p>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  onLogin: PropTypes.func,
};

export default LoginPage;
