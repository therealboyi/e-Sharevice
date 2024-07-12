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

  const fetchExchangeItems = async () => {
    try {
      const response = await axiosInstance.get("/exchange-items");
      console.log("Response:", response);
      if (Array.isArray(response.data)) {
        setExchanges(
          response.data.sort((a, b) => new Date(b.date) - new Date(a.date))
        );
      } else {
        console.error("Response data is not an array:", response.data);
        setExchanges([]);
      }
    } catch (error) {
      console.error("Error fetching exchange items:", error);
      setExchanges([]);
    }
  };

  useEffect(() => {
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

  const addExchange = async (formData) => {
    try {
      formData.append("created_at", new Date().toISOString());
      const response = await axiosInstance.post("/exchange-items", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data) {
        fetchExchangeItems();
      }
      closeModal();
    } catch (error) {
      console.error("Error adding exchange item:", error);
    }
  };

  const updateExchange = async (formData, id) => {
    try {
      const response = await axiosInstance.put(
        `/exchange-items/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data) {
        fetchExchangeItems();
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
      fetchExchangeItems();
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
            {exchanges.map((exchange, index) => {
              const [exchangeType, date] = exchange.exchange.split(" - ");
              return (
                <li key={index} className="exchange-page__item">
                  <img
                    src={exchange.imgSrc}
                    alt={exchange.provider}
                    className="exchange-page__avatar"
                    onError={() =>
                      console.error(`Image not found: ${exchange.imgSrc}`)
                    }
                  />
                  <div
                    className="exchange-page__info"
                    onClick={() => handleItemClick(index)}
                  >
                    <h2 className="exchange-page__provider">
                      {exchange.provider}
                    </h2>
                    <p className="exchange-page__service">{exchange.service}</p>
                    <p className="exchange-page__exchange">{exchangeType}</p>
                    <p className="exchange-page__date">{date}</p>
                  </div>
                  <Button
                    variant="delete"
                    text="Delete"
                    onClick={() => confirmDelete(index)}
                    color="red"
                    hoverColor="darkred"
                  />
                </li>
              );
            })}
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
