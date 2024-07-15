// src/components/ConfirmationModal/ConfirmationModal.jsx
import React from "react";
import "./ConfirmationModal.scss";
import Button from "../Buttons/Buttons";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="confirmation-modal">
      <div className="confirmation-modal__overlay" onClick={onClose}></div>
      <div className="confirmation-modal__content">
        <h2 className="confirmation-modal__title">Confirm Reservation</h2>
        <p className="confirmation-modal__message">
          Are you sure you want to confirm this reservation?
        </p>
        <div className="confirmation-modal__actions">
          <Button variant="confirm" text="Confirm" onClick={onConfirm} />
          <Button variant="cancel" text="Cancel" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
