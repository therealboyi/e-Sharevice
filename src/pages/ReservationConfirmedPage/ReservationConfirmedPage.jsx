// src/pages/ReservationConfirmedPage/ReservationConfirmedPage.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/Buttons/Buttons';
import './ReservationConfirmedPage.scss';

const ReservationConfirmedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { reservationDetails } = location.state || {};

  if (!reservationDetails) {
    return <div>No reservation details available.</div>;
  }

  const exchangeType = reservationDetails.exchange.replace("Exchange Type: ", "").split(" - ")[0];
  const date = reservationDetails.date;

  const handleDoneClick = () => {
    window.location.replace('/');
  };

  return (
    <div className="reservation-confirmed">
      <h1 className="reservation-confirmed__title">Reservation Confirmed!</h1>
      <div className="reservation-confirmed__details">
        <p><strong>Exchange:</strong> {reservationDetails.provider}</p>
        <p><strong>Type:</strong> {reservationDetails.service}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Exchange Type:</strong> {exchangeType}</p>
        <p><strong>Description:</strong> {reservationDetails.description}</p>
      </div>
      <div className="reservation-confirmed__button-container">
        <Button 
          variant="confirm" 
          text="Done" 
          onClick={handleDoneClick} 
        />
      </div>
    </div>
  );
};

export default ReservationConfirmedPage;
