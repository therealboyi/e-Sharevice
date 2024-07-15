// src/components/CompletedExchangeModal/CompletedExchangeModal.jsx
import React from "react";
import PropTypes from "prop-types";
import Button from "../Buttons/Buttons";
import "./CompletedExchangeModal.scss";

const CompletedExchangeModal = ({ isOpen, onClose, exchangeDetails }) => {
  if (!isOpen) return null;

  const exchangeType = exchangeDetails.exchange
    .replace("Exchange Type: ", "")
    .split(" - ")[0];
  const date = exchangeDetails.date;

  return (
    <div className="completed-exchange-modal">
      <div
        className="completed-exchange-modal__overlay"
        onClick={onClose}
      ></div>
      <div className="completed-exchange-modal__content">
        <h2 className="completed-exchange-modal__title">Exchange Completed</h2>
        <div className="completed-exchange-modal__details">
          <img
            src={exchangeDetails.imgSrc}
            alt={exchangeDetails.provider}
            className="completed-exchange-modal__image"
          />
          <div className="completed-exchange-modal__info">
            <p>
              <strong>Exchange:</strong> {exchangeDetails.provider}
            </p>
            <p>
              <strong>Type:</strong> {exchangeDetails.service}
            </p>
            <p>
              <strong>Date:</strong> {date}
            </p>
            <p>
              <strong>Exchange Type:</strong> {exchangeType}
            </p>
            <p>
              <strong>Description:</strong> {exchangeDetails.description}
            </p>
          </div>
        </div>
        <div className="completed-exchange-modal__button-container">
          <Button variant="confirm" text="Close" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

CompletedExchangeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  exchangeDetails: PropTypes.object.isRequired,
};

export default CompletedExchangeModal;
