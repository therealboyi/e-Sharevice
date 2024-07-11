// src/components/ExchangesModal/ExchangesModal.jsx
import React, { useState, useEffect } from "react";
import "./ExchangesModal.scss";

const ExchangesModal = ({ onClose, onAddExchange, currentItem }) => {
  const [title, setTitle] = useState("");
  const [exchangeType, setExchangeType] = useState("");
  const [exchangeDetail, setExchangeDetail] = useState("");
  const [images, setImages] = useState([]);
  const [itemType, setItemType] = useState("");

  useEffect(() => {
    if (currentItem) {
      setTitle(currentItem.provider);
      setExchangeType(currentItem.service.split(" ")[0]);
      setExchangeDetail(
        currentItem.location.split("Exchange Type: ")[1].split(" - ")[0]
      );
      setImages([currentItem.imgSrc]);
      setItemType(currentItem.service);
    }
  }, [currentItem]);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (!value.startsWith("$")) {
      setExchangeDetail(`$${value}`);
    } else {
      setExchangeDetail(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      title,
      itemType,
      exchangeType,
      exchangeDetail,
      images: Array.from(images).map((file) => URL.createObjectURL(file)),
    };
    onAddExchange(newItem);
    onClose();
  };

  return (
    <div className="exchanges-modal">
      <div className="exchanges-modal__overlay" onClick={onClose}></div>
      <div className="exchanges-modal__content">
        <button className="exchanges-modal__close" onClick={onClose}>
          &times;
        </button>
        <h2 className="exchanges-modal__title">
          {currentItem ? "Edit Exchange Item" : "Add New Exchange Item"}
        </h2>
        <form className="exchanges-modal__form" onSubmit={handleSubmit}>
          <div className="exchanges-modal__form-group">
            <label className="exchanges-modal__form-label">Title:</label>
            <input
              type="text"
              className="exchanges-modal__form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="exchanges-modal__form-group">
            <label className="exchanges-modal__form-label">Item Type:</label>
            <div className="exchanges-modal__form-radio-group">
              <label className="exchanges-modal__form-radio">
                <input
                  type="radio"
                  name="itemType"
                  value="Service"
                  checked={itemType === "Service"}
                  onChange={(e) => setItemType(e.target.value)}
                />
                Service
              </label>
              <label className="exchanges-modal__form-radio">
                <input
                  type="radio"
                  name="itemType"
                  value="Item"
                  checked={itemType === "Item"}
                  onChange={(e) => setItemType(e.target.value)}
                />
                Item
              </label>
              <label className="exchanges-modal__form-radio">
                <input
                  type="radio"
                  name="itemType"
                  value="Tool"
                  checked={itemType === "Tool"}
                  onChange={(e) => setItemType(e.target.value)}
                />
                Tool
              </label>
            </div>
          </div>
          <div className="exchanges-modal__form-group">
            <label className="exchanges-modal__form-label">
              Exchange Type:
            </label>
            <select
              className="exchanges-modal__form-select"
              value={exchangeType}
              onChange={(e) => setExchangeType(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Amount">$ Amount</option>
              <option value="Service">Service</option>
              <option value="Item">Item</option>
              <option value="Tool">Tool</option>
            </select>
          </div>
          {exchangeType && exchangeType !== "Amount" && (
            <div className="exchanges-modal__form-group">
              <label className="exchanges-modal__form-label">{`Specify ${exchangeType}:`}</label>
              <input
                type="text"
                className="exchanges-modal__form-input"
                value={exchangeDetail}
                onChange={(e) => setExchangeDetail(e.target.value)}
                required
              />
            </div>
          )}
          {exchangeType === "Amount" && (
            <div className="exchanges-modal__form-group">
              <label className="exchanges-modal__form-label">
                Specify Amount:
              </label>
              <input
                type="text"
                className="exchanges-modal__form-input"
                value={exchangeDetail}
                onChange={handleAmountChange}
                required
              />
            </div>
          )}
          <div className="exchanges-modal__form-group">
            <label className="exchanges-modal__form-label">Images:</label>
            <input
              type="file"
              className="exchanges-modal__form-input"
              multiple
              onChange={handleImageChange}
            />
          </div>
          <button type="submit" className="exchanges-modal__form-submit">
            {currentItem ? "Update Item" : "Add Item"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExchangesModal;
