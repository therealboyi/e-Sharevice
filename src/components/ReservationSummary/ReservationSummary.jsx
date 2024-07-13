// src/components/ReservationSummary/ReservationSummary.jsx
import React from "react";
import PropTypes from "prop-types";
import Button from "../Buttons/Buttons";
import "./ReservationSummary.scss";

const ReservationSummary = ({
  pricePerNight,
  currency,
  nights,
  serviceFee,
  taxes,
  onReserve,
}) => {
  const isMobile = window.innerWidth <= 767;

  return (
    <div className="reservation-summary">
      <Button
        variant="confirm"
        text="Reserve"
        onClick={onReserve}
        fullWidth={true}
      />
      {isMobile && (
        <>
          <p>You won't be charged yet</p>
          <div className="reservation-summary__breakdown">
            <div className="reservation-summary__line-item">
              <span>
                {pricePerNight} {currency} x {nights} nights
              </span>
              <span>
                {pricePerNight * nights} {currency}
              </span>
            </div>
            <div className="reservation-summary__line-item">
              <span>Service Fee</span>
              <span>
                {serviceFee} {currency}
              </span>
            </div>
            <div className="reservation-summary__line-item">
              <span>Taxes</span>
              <span>
                {taxes} {currency}
              </span>
            </div>
          </div>
        </>
      )}
      <div className="reservation-summary__total">
        <span>Confirm Exchange</span>
      </div>
    </div>
  );
};

ReservationSummary.propTypes = {
  pricePerNight: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  nights: PropTypes.number.isRequired,
  serviceFee: PropTypes.number.isRequired,
  taxes: PropTypes.number.isRequired,
  onReserve: PropTypes.func.isRequired,
};

export default ReservationSummary;
