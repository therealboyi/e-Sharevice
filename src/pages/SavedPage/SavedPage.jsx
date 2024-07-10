// src/pages/SavedPage/SavedPage.jsx
import React from "react";
import Header from "../../components/Header/Header";
import "./SavedPage.scss";

const savedItems = [
  {
    city: "Edmonton",
    host: "SWISH Rentals",
    dates: "May 3, 2024 – May 5, 2024",
    imgSrc: "/src/assets/images/messi.png",
  },
  {
    city: "Luton",
    host: "Kallum",
    dates: "Mar. 19, 2023 – Mar. 30, 2023",
    imgSrc: "/src/assets/images/ronaldo.png",
  },
  {
    city: "Vancouver",
    host: "May",
    dates: "May 21, 2021 – May 25, 2021",
    imgSrc: "/src/assets/images/mbappe.png",
  },
  {
    city: "Edmonton",
    host: "Janelle & AJ",
    dates: "May 12, 2021 – May 13, 2021",
    imgSrc: "/src/assets/images/durant.png",
  },
  {
    city: "Winnipeg",
    host: "E.Q",
    dates: "Jan. 15, 2021 – Jan. 17, 2021",
    imgSrc: "/src/assets/images/lebron.png",
  },
  {
    city: "Toronto",
    host: "Lyla",
    dates: "Mar. 16, 2020 – Mar. 20, 2020",
    imgSrc: "/src/assets/images/giannis.png",
  },
  {
    city: "Winnipeg",
    host: "Devin",
    dates: "Jun. 5, 2019 – Jun. 7, 2019",
    imgSrc: "/src/assets/images/curry.png",
  },
];

const SavedPage = () => {
  return (
    <div>
      <Header />
      <div className="saved-page">
        <div className="saved-page__content">
          <h1 className="saved-page__title">Saved+</h1>
          <ul className="saved-page__list">
            {savedItems.map((item, index) => (
              <li key={index} className="saved-page__item">
                <img
                  src={item.imgSrc}
                  alt={item.city}
                  className="saved-page__image"
                />
                <div className="saved-page__info">
                  <h2 className="saved-page__city">{item.city}</h2>
                  <p className="saved-page__host">Hosted by {item.host}</p>
                  <p className="saved-page__dates">{item.dates}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SavedPage;
