// src/components/PhotoCardDetailPage/PhotoCardDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import ReserveBar from "../../components/ReserveBar/ReserveBar";
import ReservationSummary from "../../components/ReservationSummary/ReservationSummary";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import "./PhotoCardDetailPage.scss";

const PhotoCardDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await axiosInstance.get(`/exchange-items/${id}`);
        setCard(response.data);
      } catch (error) {
        console.error("Error fetching card details:", error);
      }
    };

    fetchCardDetails();
  }, [id]);

  const handleReserveClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmReservation = async () => {
    try {
      await axiosInstance.put(`/exchange-items/${id}/reserve`);
      setIsModalOpen(false);
      console.log("Reservation confirmed");
      navigate("/reservation-confirmed", { state: { exchangeDetails: card } });
    } catch (error) {
      console.error("Failed to reserve item:", error);
    }
  };

  if (!card) {
    return (
      <div className="photo-card-detail-page__skeleton">
        <div className="photo-card-detail-page__skeleton-image"></div>
        <div className="photo-card-detail-page__skeleton-content">
          <div className="photo-card-detail-page__skeleton-title"></div>
          <div className="photo-card-detail-page__skeleton-subtitle"></div>
          <div className="photo-card-detail-page__skeleton-description"></div>
        </div>
      </div>
    );
  }

  const exchangeType = card.exchange
    .replace("Exchange Type: ", "")
    .split(" - ")[0];

  return (
    <div className="photo-card-detail-page">
      <button
        className="photo-card-detail-page__back-button"
        onClick={() => navigate(-1)}
      >
        <img
          src="/src/assets/icons/back.png"
          alt="Back"
          className="photo-card-detail-page__back-icon"
        />{" "}
        Homes
      </button>
      <div className="photo-card-detail-page__container">
        <div className="photo-card-detail-page__content">
          <h1 className="photo-card-detail-page__title">{card.provider}</h1>
          <h2 className="photo-card-detail-page__subtitle">{card.service}</h2>
          <p className="photo-card-detail-page__description">
            Exchange Type: {exchangeType}
          </p>
          <div className="photo-card-detail-page__additional-description">
            <h3>Description</h3>
            <p>{card.description}</p>
          </div>
        </div>
        <div className="photo-card-detail-page__left">
          <img
            src={card.imgSrc}
            alt={card.provider}
            className="photo-card-detail-page__image"
          />
          <div className="photo-card-detail-page__reservation-summary">
            <ReservationSummary
              pricePerNight={337}
              currency="CAD"
              nights={5}
              serviceFee={269}
              taxes={310}
              onReserve={handleReserveClick}
            />
          </div>
        </div>
      </div>
      <ReserveBar
        price={337}
        currency="CAD"
        dates="Aug. 6 – 11"
        onReserve={handleReserveClick}
      />
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmReservation}
        itemId={id}
      />
    </div>
  );
};

export default PhotoCardDetailPage;
