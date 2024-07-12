// src/components/ExchangesModal/ExchangesModal.jsx
import React, { useState, useEffect } from "react";
import Button from "../../components/Buttons/Buttons";
import "./ExchangesModal.scss";

const ExchangesModal = ({ onClose, onAddExchange, currentItem }) => {
  const [title, setTitle] = useState("");
  const [exchangeType, setExchangeType] = useState("");
  const [exchangeDetail, setExchangeDetail] = useState("");
  const [rateType, setRateType] = useState("flat");
  const [images, setImages] = useState([]);
  const [itemType, setItemType] = useState("");
  const [description, setDescription] = useState("");
  const [exchange, setExchange] = useState("");

  useEffect(() => {
    if (currentItem) {
      setTitle(currentItem.provider);
      setExchangeType(currentItem.service.split(" ")[0]);
      const [amount, date] = currentItem.exchange
        .split("Exchange Type: ")[1]
        .split(" - ");
      setExchangeDetail(amount);
      setRateType(currentItem.rateType || "flat");
      setImages([currentItem.imgSrc]);
      setItemType(currentItem.service);
      setDescription(currentItem.description || "");
      setExchange(currentItem.exchange || "");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedExchangeDetail = `${exchangeDetail}${
      rateType === "hourly" ? "/hr" : ""
    }`;
    const formData = new FormData();
    formData.append("provider", title);
    formData.append("service", itemType);
    formData.append("date", new Date().toISOString());
    formData.append(
      "exchange",
      `Exchange Type: ${formattedExchangeDetail} - ${new Date().toLocaleDateString(
        "en-US",
        { month: "short", day: "2-digit", year: "numeric" }
      )}`
    );
    formData.append("description", description);
    formData.append("rateType", rateType);
    formData.append("created_at", new Date().toISOString());
    if (images.length > 0) {
      formData.append("image", images[0]);
    }

    if (currentItem) {
      onAddExchange(formData, currentItem.id);
    } else {
      onAddExchange(formData);
    }
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
            <label className="exchanges-modal__form-label">Description:</label>
            <textarea
              className="exchanges-modal__form-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
            <>
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
              {(itemType === "Service" || itemType === "Tool") && (
                <div className="exchanges-modal__form-group">
                  <label className="exchanges-modal__form-label">
                    Rate Type:
                  </label>
                  <div className="exchanges-modal__form-radio-group">
                    <label className="exchanges-modal__form-radio">
                      <input
                        type="radio"
                        name="rateType"
                        value="flat"
                        checked={rateType === "flat"}
                        onChange={(e) => setRateType(e.target.value)}
                      />
                      Flat Rate
                    </label>
                    <label className="exchanges-modal__form-radio">
                      <input
                        type="radio"
                        name="rateType"
                        value="hourly"
                        checked={rateType === "hourly"}
                        onChange={(e) => setRateType(e.target.value)}
                      />
                      Per Hour Rate
                    </label>
                  </div>
                </div>
              )}
            </>
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
          <Button
            variant="submit"
            text={currentItem ? "Update Item" : "Add Item"}
            onClick={handleSubmit}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ExchangesModal;
