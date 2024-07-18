// src/components/ReserveBar/ReserveBar.jsx

import React from "react";
import PropTypes from "prop-types";
import Button from "../Buttons/Buttons";
import "./ReserveBar.scss";

const ReserveBar = ({ exchangeType, onReserve }) => {
  return (
    <div className="reserve-bar">
      <div className="reserve-bar__details">
        <span className="reserve-bar__exchange-type">
          Exchange: {exchangeType}
        </span>
      </div>
      <Button
        variant="confirm"
        text="Reserve"
        onClick={onReserve}
        fullWidth={true}
      />
    </div>
  );
};

ReserveBar.propTypes = {
  exchangeType: PropTypes.string.isRequired,
  onReserve: PropTypes.func.isRequired,
};

export default ReserveBar;
