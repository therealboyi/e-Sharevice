// src/components/ProtectedComponent.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";
import Button from "./Buttons/Buttons";
import Modal from "./Modal/Modal";
import LoginPage from "../pages/LoginPage/LoginPage";
import "./ProtectedComponent.scss";

const ProtectedComponent = ({ children }) => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [intendedDestination, setIntendedDestination] = useState("/");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginClick = () => {
    setIntendedDestination(location.pathname); 
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!user) {
    return (
      <div className="login-prompt">
        <div className="login-prompt__content">
          <h1 className="login-prompt__title">Log in Required</h1>
          <h2 className="login-prompt__subtitle">Log in to access this page</h2>
          <p className="login-prompt__info-text">
            You can view, or edit your profile once you’ve logged in.
          </p>{" "}
          <Button
            variant="submit"
            text="Log in"
            onClick={handleLoginClick}
            color="#00bfff" // Sky blue
            hoverColor="#87ceeb"
            borderRadius="4px"
            padding="12px"
            fullWidth
          />
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <LoginPage
            onClose={handleCloseModal}
            intendedDestination={intendedDestination}
          />
        </Modal>
      </div>
    );
  }

  return children;
};

export default ProtectedComponent;
