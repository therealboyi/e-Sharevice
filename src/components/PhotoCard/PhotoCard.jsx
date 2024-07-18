// src/components/PhotoCard/PhotoCard.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Skeleton from "../Skeleton/Skeleton";
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
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleClick = () => {
    navigate(`/photo/${id}`);
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="photo-card" onClick={handleClick}>
      <div className="photo-card__image-wrapper">
        {!isImageLoaded && <Skeleton />}
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`photo-card__image ${
            isImageLoaded ? "loaded" : "loading"
          }`}
          onLoad={handleImageLoad}
        />
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
