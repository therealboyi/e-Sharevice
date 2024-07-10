// LoginPage.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Buttons/Buttons';
import './LoginPage.scss';
import backIcon from '../../assets/icons/back.png';
import { useAuth } from '../../contexts/AuthContext.jsx';

const API_URL = import.meta.env.VITE_API_URL;
console.log('API_URL:', API_URL);

const LoginPage = ({ onClose, intendedDestination = '/' }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [isPasswordPage, setIsPasswordPage] = useState(false);
    const [birthDate, setBirthDate] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

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

    const handleContinue = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            console.log('Checking email'); 
            const response = await axios.post(
                `${API_URL}/check-email`,
                { email },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log('Check email response:', response.data); 
            if (response.data.message === 'Email exists') {
                setIsPasswordPage(true);
            } else {
                setIsLogin(false);
            }
        } catch (error) {
            console.error('Error checking email:', error); 
            setErrorMessage('Error checking email. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleBackClick = () => {
        if (isPasswordPage) {
            setIsPasswordPage(false);
        } else {
            setIsLogin(true);
        }
    };

    const handleLogin = async (e) => {
        if (e) e.preventDefault();
        setIsSubmitting(true);

        try {
            console.log('Attempting to log in'); 
            const response = await axios.post(
                `${API_URL}/login`,
                { email, password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log('Login response'); 
            if (response.data.message === 'Login successful') {
                login({ email, token: response.data.token });
                if (onClose) {
                    onClose();
                }
                navigate(intendedDestination, { replace: true });
            } else {
                setErrorMessage('Incorrect password. Please try again.');
            }
        } catch (error) {
            console.error('Error logging in:', error); 
            setErrorMessage('Error logging in. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            console.log('Attempting to sign up with email'); 
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
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log('Signup response:', response.data); 
            if (response.data.message === 'User registered successfully') {
                const loginResponse = await axios.post(
                    `${API_URL}/login`,
                    { email, password },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log('Post-signup login response'); 
                if (loginResponse.data.message === 'Login successful') {
                    login({ email, token: loginResponse.data.token });
                    if (onClose) {
                        onClose();
                    }
                    navigate('/', { replace: true });
                } else {
                    setErrorMessage('Error logging in after signup. Please try again.');
                }
            } else {
                setErrorMessage('Error registering user. Please try again.');
            }
        } catch (error) {
            if (error.response) {
                console.error('Error registering user:', error.response.data); 
                if (error.response.status === 409) {
                    setErrorMessage('Email already in use. Please use a different email.');
                } else {
                    setErrorMessage('Error registering user. Please try again.');
                }
            } else {
                console.error('Error registering user:', error.message); 
                setErrorMessage('Error registering user. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (isPasswordPage) {
                handleLogin(e);
            } else {
                handleContinue(e);
            }
        }
    };

    return (
        <div className="login-page">
            <div className="login-page__content">
                {errorMessage && <p className="login-page__error">{errorMessage}</p>}
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
                        <form className="login-page__form" onSubmit={handleContinue}>
                            <input
                                type="email"
                                className="login-page__input"
                                placeholder="Email"
                                value={email}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                autoComplete="email"
                                disabled={isSubmitting}
                            />
                            <input
                                type="text"
                                name="username"
                                className="login-page__input"
                                value={email}
                                autoComplete="username"
                                style={{ display: 'none' }}
                                readOnly
                            />
                            <Button
                                variant="submit"
                                text="Continue"
                                onClick={handleContinue}
                                color="#00bfff"
                                hoverColor="#87ceeb"
                                borderRadius="4px"
                                padding="12px"
                                fullWidth
                                disabled={isSubmitting}
                            />
                        </form>
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
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
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
                        <form className="signup-page__form" onSubmit={handleLogin}>
                            <input
                                type="text"
                                name="username"
                                className="signup-page__input"
                                value={email}
                                autoComplete="username"
                                style={{ display: 'none' }}
                                readOnly
                            />
                            <div className="signup-page__field">
                                <label className="signup-page__label">Password</label>
                                <input
                                    type="password"
                                    className="signup-page__input"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    onKeyDown={handleKeyDown}
                                    autoComplete="current-password"
                                    disabled={isSubmitting}
                                />
                            </div>
                            <Button
                                variant="submit"
                                text="Log in"
                                onClick={handleLogin}
                                color="#00bfff"
                                hoverColor="#87ceeb"
                                borderRadius="4px"
                                padding="12px"
                                fullWidth
                                disabled={isSubmitting}
                            />
                        </form>
                    </>
                ) : (
                    <>
                        <hr className="signup-page__divider-top" />
                        <form className="signup-page__form" onSubmit={handleSignup}>
                            <div className="signup-page__field">
                                <label className="signup-page__label">Legal name</label>
                                <div className="signup-page__input-group">
                                    <input
                                        type="text"
                                        className="signup-page__input"
                                        placeholder="First name on ID"
                                        value={firstName}
                                        onChange={handleFirstNameChange}
                                        disabled={isSubmitting}
                                    />
                                    <input
                                        type="text"
                                        className="signup-page__input"
                                        placeholder="Last name on ID"
                                        value={lastName}
                                        onChange={handleLastNameChange}
                                        disabled={isSubmitting}
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
                                    autoComplete="bday"
                                    disabled={isSubmitting}
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
                                    autoComplete="email"
                                    disabled={isSubmitting}
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
                                    autoComplete="new-password"
                                    disabled={isSubmitting}
                                />
                            </div>
                            <Button
                                variant="submit"
                                text="Agree and continue"
                                onClick={handleSignup}
                                color="#00bfff"
                                hoverColor="#87ceeb"
                                borderRadius="4px"
                                padding="12px"
                                fullWidth
                                disabled={isSubmitting}
                            />
                        </form>
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
    onClose: PropTypes.func,
    intendedDestination: PropTypes.string,
};

export default LoginPage;
