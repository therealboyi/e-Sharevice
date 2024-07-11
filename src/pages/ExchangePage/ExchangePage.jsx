// src/pages/ExchangePage/ExchangePage.jsx
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ExchangesModal from "../../components/ExchangesModal/ExchangesModal";
import "./ExchangePage.scss";

const initialExchanges = [
  {
    provider: "Fit4Less",
    service: "Personal Trainer",
    date: "Mar. 19, 2023",
    location: "Vancouver, Canada",
    imgSrc: "/src/assets/images/avatar.png",
  },
  {
    provider: "Mandy's Pawradise",
    service: "Dog Walker",
    date: "Jun. 07, 2023",
    location: "Burnaby, Canada",
    imgSrc: "/src/assets/images/avatar.png",
  },
];

const ExchangePage = () => {
  const [exchanges, setExchanges] = useState(initialExchanges);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setIsEditing(false);
    setCurrentItem(null);
  };

  const handleItemClick = (index) => {
    setCurrentItem({ ...exchanges[index], index });
    setIsEditing(true);
    openModal();
  };

  const addExchange = (newItem) => {
    const formattedDate = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
    const updatedItem = {
      provider: newItem.title,
      service: newItem.itemType,
      date: formattedDate,
      location: `Exchange Type: ${newItem.exchangeDetail} - ${formattedDate}`,
      imgSrc: newItem.images[0],
    };

    if (isEditing && currentItem) {
      const updatedExchanges = [...exchanges];
      updatedExchanges[currentItem.index] = updatedItem;
      setExchanges(updatedExchanges);
    } else {
      setExchanges([...exchanges, updatedItem]);
    }

    closeModal();
  };

  return (
    <div>
      <Header />
      <div className="exchange-page">
        <div className="exchange-page__content">
          <h1 className="exchange-page__title">Exchanges</h1>
          <button className="exchange-page__add-button" onClick={openModal}>
            + Add New Exchange Item
          </button>
          <ul className="exchange-page__list">
            {exchanges.map((exchange, index) => (
              <li
                key={index}
                className="exchange-page__item"
                onClick={() => handleItemClick(index)}
              >
                <img
                  src={exchange.imgSrc}
                  alt={exchange.provider}
                  className="exchange-page__avatar"
                />
                <div className="exchange-page__info">
                  <h2 className="exchange-page__provider">
                    {exchange.provider}
                  </h2>
                  <p className="exchange-page__service">{exchange.service}</p>
                  <p className="exchange-page__location">{exchange.location}</p>
                </div>
                <span className="exchange-page__arrow">&gt;</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {modalIsOpen && (
        <ExchangesModal
          onClose={closeModal}
          onAddExchange={addExchange}
          currentItem={currentItem}
        />
      )}
    </div>
  );
};

export default ExchangePage;
