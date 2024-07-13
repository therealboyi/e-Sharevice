// src/components/PhotoCard/PhotoCard.jsx
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./PhotoCard.scss";

const PhotoCard = ({
  id,
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigating to card id:", id);
    navigate(`/photo/${id}`);
  };

  return (
    <div className="photo-card" onClick={handleClick}>
      <div className="photo-card__image-wrapper">
        <img src={imageSrc} alt={imageAlt} className="photo-card__image" />
        <div className="photo-card__share-icon">
          <i className="fas fa-share-alt"></i>
        </div>
      </div>
      <div className="photo-card__content">
        <h3 className="photo-card__title">{title}</h3>
        <p className="photo-card__subtitle">{subtitle}</p>
        <p className="photo-card__description">{description}</p>
      </div>
    </div>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PhotoCard;
