// src/pages/ExchangePage/ExchangePage.jsx
import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axios";
import Header from "../../components/Header/Header";
import ExchangesModal from "../../components/ExchangesModal/ExchangesModal";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal/ConfirmDeleteModal";
import Button from "../../components/Buttons/Buttons";
import "./ExchangePage.scss";

const ExchangePage = () => {
  const [exchanges, setExchanges] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  useEffect(() => {
    const fetchExchangeItems = async () => {
      try {
        const response = await axiosInstance.get("/exchange-items");
        console.log("Response:", response);
        if (Array.isArray(response.data)) {
          setExchanges(response.data);
        } else {
          console.error("Response data is not an array:", response.data);
          setExchanges([]);
        }
      } catch (error) {
        console.error("Error fetching exchange items:", error);
        setExchanges([]);
      }
    };

    fetchExchangeItems();
  }, []);

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

  const addExchange = async (newItem) => {
    try {
      const response = await axiosInstance.post("/exchange-items", newItem, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data) {
        setExchanges([...exchanges, response.data]);
      }
      closeModal();
    } catch (error) {
      console.error("Error adding exchange item:", error);
    }
  };

  const updateExchange = async (updatedItem) => {
    try {
      const response = await axiosInstance.put(
        `/exchange-items/${updatedItem.id}`,
        updatedItem
      );
      if (response.data) {
        const updatedExchanges = exchanges.map((item) =>
          item.id === updatedItem.id ? response.data : item
        );
        setExchanges(updatedExchanges);
      }
      closeModal();
    } catch (error) {
      console.error("Error updating exchange item:", error);
    }
  };

  const confirmDelete = (index) => {
    setDeleteIndex(index);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(
        `/exchange-items/${exchanges[deleteIndex].id}`
      );
      const updatedExchanges = exchanges.filter((_, i) => i !== deleteIndex);
      setExchanges(updatedExchanges);
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting exchange item:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="exchange-page">
        <div className="exchange-page__content">
          <h1 className="exchange-page__title">Exchanges</h1>
          <Button
            variant="submit"
            text="+ Add New Exchange Item"
            onClick={openModal}
          />
          <ul className="exchange-page__list">
            {exchanges.map((exchange, index) => (
              <li key={index} className="exchange-page__item">
                <img
                  src={exchange.imgSrc}
                  alt={exchange.provider}
                  className="exchange-page__avatar"
                  onError={(e) => {
                    console.log("Image not found:", e.target.src);
                  }} // Log image load errors
                />
                <div
                  className="exchange-page__info"
                  onClick={() => handleItemClick(index)}
                >
                  <h2 className="exchange-page__provider">
                    {exchange.provider}
                  </h2>
                  <p className="exchange-page__service">{exchange.service}</p>
                  <p className="exchange-page__exchange">{exchange.exchange}</p>
                </div>
                <Button
                  variant="delete"
                  text="Delete"
                  onClick={() => confirmDelete(index)}
                  color="red"
                  hoverColor="darkred"
                />
                <span className="exchange-page__arrow">&gt;</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {modalIsOpen && (
        <ExchangesModal
          onClose={closeModal}
          onAddExchange={isEditing ? updateExchange : addExchange}
          currentItem={currentItem}
        />
      )}
      {isDeleteModalOpen && (
        <ConfirmDeleteModal
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
};

export default ExchangePage;
