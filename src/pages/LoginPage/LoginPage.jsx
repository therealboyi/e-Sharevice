// LoginPage.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../components/Buttons/Buttons";
import "./LoginPage.scss";
import backIcon from "../../assets/icons/back.png";

// Hardcoded email for simulation
const existingEmails = ["existinguser@example.com"];

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [birthDate, setBirthDate] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleContinue = () => {
    if (existingEmails.includes(email)) {
      console.log("Email exists:", email);
      // Proceed with login
    } else {
      console.log("Email not found, switching to signup:", email);
      setIsLogin(false);
    }
  };

  const handleBackClick = () => {
    setIsLogin(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleContinue();
    }
  };

  return (
    <div className="login-page">
      <div className="login-page__content">
        {!isLogin && (
          <div className="signup-page__header">
            <img
              src={backIcon}
              alt="Back"
              className="signup-page__back-icon"
              onClick={handleBackClick}
            />
            <h2 className="signup-page__title">Finish signing up</h2>
          </div>
        )}
        {isLogin ? (
          <>
            <h2 className="login-page__title">Log in or sign up</h2>
            <hr className="login-page__divider-top" />
            <h3 className="login-page__subtitle">Welcome to e-Sharevice</h3>
            <div className="login-page__form">
              <input
                type="email"
                className="login-page__input"
                placeholder="Email"
                value={email}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
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
          </>
        ) : (
          <>
            <hr className="signup-page__divider-top" />
            <div className="signup-page__form">
              <div className="signup-page__field">
                <label className="signup-page__label">Legal name</label>
                <div className="signup-page__input-group">
                  <input
                    type="text"
                    className="signup-page__input"
                    placeholder="First name on ID"
                  />
                  <input
                    type="text"
                    className="signup-page__input"
                    placeholder="Last name on ID"
                  />
                </div>
              </div>
              <div className="signup-page__field">
                <label className="signup-page__label">Date of birth</label>
                <input
                  type="text"
                  className="signup-page__input"
                  placeholder="Birth date (e.g., MM/DD/YYYY)"
                  value={birthDate}
                  onChange={handleDateChange}
                />
              </div>
              <div className="signup-page__field">
                <label className="signup-page__label">Contact info</label>
                <input
                  type="email"
                  className="signup-page__input"
                  placeholder="Email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="signup-page__field">
                <label className="signup-page__label">Password</label>
                <input
                  type="password"
                  className="signup-page__input"
                  placeholder="Password"
                />
              </div>
              <Button
                variant="submit"
                text="Agree and continue"
                onClick={handleContinue}
                color="#00bfff" // Sky blue
                hoverColor="#87ceeb"
                borderRadius="4px"
                padding="12px"
                fullWidth
              />
            </div>
            <p className="login-page__help">
              <a href="#" className="login-page__help-link">
                Need help?
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  onLogin: PropTypes.func,
};

export default LoginPage;
