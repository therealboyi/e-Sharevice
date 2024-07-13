// src/components/ConfirmationModal/ConfirmationModal.jsx
import React from "react";
import "./ConfirmationModal.scss";
import axiosInstance from "../../utils/axios";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, itemId }) => {
  if (!isOpen) return null;

  const handleConfirm = async () => {
    try {
      await axiosInstance.put(`/exchange-items/${itemId}/reserve`);
      console.log("Reservation confirmed"); 
      onConfirm(); 
    } catch (error) {
      console.error("Failed to reserve item:", error);
    }
  };

  return (
    <div className="confirmation-modal">
      <div className="confirmation-modal__overlay" onClick={onClose}></div>
      <div className="confirmation-modal__content">
        <h2 className="confirmation-modal__title">Confirm Reservation</h2>
        <p className="confirmation-modal__message">
          Are you sure you want to confirm this reservation?
        </p>
        <div className="confirmation-modal__actions">
          <button
            className="confirmation-modal__button confirmation-modal__button--confirm"
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button
            className="confirmation-modal__button confirmation-modal__button--cancel"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
