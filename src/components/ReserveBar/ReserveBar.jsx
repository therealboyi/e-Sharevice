// src/components/ReserveBar/ReserveBar.jsx
import React from "react";
import PropTypes from "prop-types";
import Button from "../Buttons/Buttons";
import "./ReserveBar.scss";

const ReserveBar = ({ price, currency, dates }) => {
  return (
    <div className="reserve-bar">
      <div className="reserve-bar__details">
        <span className="reserve-bar__price">
          {price} {currency}
        </span>
        <span className="reserve-bar__dates">{dates}</span>
      </div>
      <Button
        variant="confirm"
        text="Reserve"
        onClick={() => alert("Reservation made!")}
        fullWidth={true}
      />
    </div>
  );
};

ReserveBar.propTypes = {
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
};

export default ReserveBar;