// src/pages/SavedPage/SavedPage.jsx
import React from 'react';
import './SavedPage.scss';

const savedItems = [
    {
        city: 'Edmonton',
        host: 'SWISH Rentals',
        dates: 'May 3, 2024 – May 5, 2024',
        imgSrc: 'path/to/image1.jpg',
    },
    {
        city: 'Luton',
        host: 'Kallum',
        dates: 'Mar. 19, 2023 – Mar. 30, 2023',
        imgSrc: 'path/to/image2.jpg',
    },
    {
        city: 'Vancouver',
        host: 'May',
        dates: 'May 21, 2021 – May 25, 2021',
        imgSrc: 'path/to/image3.jpg',
    },
    {
        city: 'Edmonton',
        host: 'Janelle & AJ',
        dates: 'May 12, 2021 – May 13, 2021',
        imgSrc: 'path/to/image4.jpg',
    },
    {
        city: 'Winnipeg',
        host: 'E.Q',
        dates: 'Jan. 15, 2021 – Jan. 17, 2021',
        imgSrc: 'path/to/image5.jpg',
    },
    {
        city: 'Toronto',
        host: 'Lyla',
        dates: 'Mar. 16, 2020 – Mar. 20, 2020',
        imgSrc: 'path/to/image6.jpg',
    },
    {
        city: 'Winnipeg',
        host: 'Devin',
        dates: 'Jun. 5, 2019 – Jun. 7, 2019',
        imgSrc: 'path/to/image7.jpg',
    },
];

const SavedPage = () => {
    return (
        <div className="saved-page">
            <h1 className="saved-page__title">Saved+</h1>
            <ul className="saved-page__list">
                {savedItems.map((item, index) => (
                    <li key={index} className="saved-page__item">
                        <img src={item.imgSrc} alt={item.city} className="saved-page__image" />
                        <div className="saved-page__info">
                            <h2 className="saved-page__city">{item.city}</h2>
                            <p className="saved-page__host">Hosted by {item.host}</p>
                            <p className="saved-page__dates">{item.dates}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SavedPage;
