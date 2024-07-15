import React from "react";
import Header from "../../components/Header/Header";
import "./SavedPage.scss";

const savedItems = [
  {
    title: "SWISH Rentals",
    type: "Service",
    dates: "May 3, 2024 – May 5, 2024",
    imgSrc: "/src/assets/images/messi.png",
  },
  {
    title: "Barber",
    type: "Service",
    dates: "Mar. 19, 2023 – Mar. 30, 2023",
    imgSrc: "/src/assets/images/ronaldo.png",
  },
  {
    title: "Book",
    type: "Item",
    dates: "May 21, 2021 – May 25, 2021",
    imgSrc: "/src/assets/images/mbappe.png",
  },
  {
    title: "Basketball",
    type: "Tool",
    dates: "May 12, 2021 – May 13, 2021",
    imgSrc: "/src/assets/images/durant.png",
  },
  {
    title: "Cleaning",
    type: "Service",
    dates: "Jan. 15, 2021 – Jan. 17, 2021",
    imgSrc: "/src/assets/images/lebron.png",
  },
  {
    title: "Mouse",
    type: "Tool",
    dates: "Mar. 16, 2020 – Mar. 20, 2020",
    imgSrc: "/src/assets/images/giannis.png",
  },
  {
    title: "Chef",
    type: "Service",
    dates: "Jun. 5, 2019 – Jun. 7, 2019",
    imgSrc: "/src/assets/images/curry.png",
  },
];

const SavedPage = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="saved-page">
          <div className="saved-page__content">
            <h1 className="saved-page__title">Saved Items</h1>
            <ul className="saved-page__list">
              {savedItems.map((item, index) => (
                <li key={index} className="saved-page__item">
                  <div className="saved-page__image-wrapper">
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="saved-page__avatar"
                    />
                  </div>
                  <div className="saved-page__info">
                    <h2 className="saved-page__provider">{item.title}</h2>
                    <p className="saved-page__service">{item.type}</p>
                    <p className="saved-page__exchange">{item.dates}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SavedPage;
