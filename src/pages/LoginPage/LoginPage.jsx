// LoginPage.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Buttons/Buttons";
import "./LoginPage.scss";
import backIcon from "../../assets/icons/back.png";

const API_URL = import.meta.env.VITE_API_URL;

const LoginPage = ({ onLogin }) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isLogin, setIsLogin] = useState(true);
const [isPasswordPage, setIsPasswordPage] = useState(false);
const [birthDate, setBirthDate] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const navigate = useNavigate();

const handleInputChange = (e) => {
setEmail(e.target.value);
};

const handlePasswordChange = (e) => {
setPassword(e.target.value);
};

const handleDateChange = (e) => {
setBirthDate(e.target.value);
};

const handleFirstNameChange = (e) => {
setFirstName(e.target.value);
};

const handleLastNameChange = (e) => {
setLastName(e.target.value);
};

  const handleContinue = async () => {
    console.log("API URL:", API_URL);
    console.log("Email:", email);

    try {
      const response = await axios.post(
        `${API_URL}/check-email`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      if (response.data.message === "Email exists") {
        console.log("Email exists:", email);
        setIsPasswordPage(true);
      } else {
        console.log("Email not found, switching to signup:", email);
        setIsLogin(false);
      }
    } catch (error) {
      console.error(
        "Error checking email:",
        error.response ? error.response.data : error.message
      );
    }
  };

const handleBackClick = () => {
if (isPasswordPage) {
setIsPasswordPage(false);
} else {
setIsLogin(true);
}
};

  const handleLogin = async () => {
    console.log("API URL:", API_URL);
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await axios.post(
        `${API_URL}/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      if (response.data.message === "Login successful") {
        console.log("Login successful");
        navigate("/"); // Redirect to the homepage
      } else {
        console.log("Incorrect password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleSignup = async () => {
    console.log("API URL:", API_URL);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await axios.post(
        `${API_URL}/signup`,
        {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      if (response.data.message === "User registered successfully") {
        console.log("User registered successfully");
        setIsPasswordPage(true);
      } else {
        console.log("Error registering user");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

const handleKeyDown = (e) => {
if (e.key === "Enter") {
if (isPasswordPage) {
handleLogin();
} else {
handleContinue();
}
}
};

return (
<div className="login-page">
<div className="login-page__content">
{!isLogin && !isPasswordPage && (
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
{isLogin && !isPasswordPage ? (
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
) : isPasswordPage ? (
<>
<div className="signup-page__header">
<img
src={backIcon}
alt="Back"
className="signup-page__back-icon"
onClick={handleBackClick}
/>
<h2 className="signup-page__title">Enter your password</h2>
</div>
<div className="signup-page__form">
<div className="signup-page__field">
<label className="signup-page__label">Password</label>
<input
type="password"
className="signup-page__input"
placeholder="Password"
value={password}
onChange={handlePasswordChange}
onKeyDown={handleKeyDown}
/>
</div>
<Button
variant="submit"
text="Log in"
onClick={handleLogin}
color="#00bfff" // Sky blue
hoverColor="#87ceeb"
borderRadius="4px"
padding="12px"
fullWidth
/>
</div>
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
value={firstName}
onChange={handleFirstNameChange}
/>
<input
type="text"
className="signup-page__input"
placeholder="Last name on ID"
value={lastName}
onChange={handleLastNameChange}
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
onKeyDown={handleKeyDown}
/>
</div>
<div className="signup-page__field">
<label className="signup-page__label">Password</label>
<input
type="password"
className="signup-page__input"
placeholder="Password"
value={password}
onChange={handlePasswordChange}
/>
</div>
<Button
variant="submit"
text="Agree and continue"
onClick={handleSignup}
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

