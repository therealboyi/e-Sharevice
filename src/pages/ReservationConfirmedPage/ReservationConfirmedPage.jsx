// src/pages/ReservationConfirmedPage/ReservationConfirmedPage.jsx
import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/Buttons/Buttons";
import "./ReservationConfirmedPage.scss";

const ReservationConfirmedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const exchangeDetails = state ? state.exchangeDetails : {};

  const handleDoneClick = () => {
    window.location.href = "/";
  };

  const exchangeType = exchangeDetails.exchange
    ?.replace("Exchange Type: ", "")
    .split(" - ")[0];
  const date = exchangeDetails.date;

  return (
    <div className="reservation-confirmed-page">
      <h1 className="reservation-confirmed-page__title">
        Reservation Confirmed!
      </h1>
      <div className="reservation-confirmed-page__details">
        <img
          src={exchangeDetails.imgSrc}
          alt={exchangeDetails.provider}
          className="reservation-confirmed-page__image"
        />
        <div className="reservation-confirmed-page__info">
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
      <div className="reservation-confirmed-page__button-container">
        <Button variant="confirm" text="Done" onClick={handleDoneClick} />
      </div>
    </div>
  );
};

ReservationConfirmedPage.propTypes = {
  exchangeDetails: PropTypes.object,
};

export default ReservationConfirmedPage;
