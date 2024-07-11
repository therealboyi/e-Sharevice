// src/components/ConfirmDeleteModal/ConfirmDeleteModal.jsx
import React from "react";
import Button from "../../components/Buttons/Buttons";
import "./ConfirmDeleteModal.scss";

const ConfirmDeleteModal = ({ onClose, onConfirm }) => {
  return (
    <div className="confirm-delete-modal">
      <div className="confirm-delete-modal__overlay" onClick={onClose}></div>
      <div className="confirm-delete-modal__content">
        <h2 className="confirm-delete-modal__title">Confirm Delete</h2>
        <p>Are you sure you want to delete this item?</p>
        <div className="confirm-delete-modal__buttons">
          <Button
            variant="confirm"
            text="Yes"
            onClick={onConfirm}
            color="red"
            hoverColor="darkred"
          />
          <Button
            variant="cancel"
            text="No"
            onClick={onClose}
            color="grey"
            hoverColor="darkgrey"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
