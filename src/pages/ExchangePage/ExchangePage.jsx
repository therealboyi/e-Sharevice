// src/pages/ExchangePage/ExchangePage.jsx
import React from 'react';
import './ExchangePage.scss';

const exchanges = [
    {
        provider: 'Fit4Less',
        service: 'Personal Trainer',
        date: 'Mar. 19, 2023',
        location: 'Vancouver, Canada',
        imgSrc: 'path/to/avatar1.jpg',
    },
    {
        provider: "Mandy's Pawradise",
        service: 'Dog Walker',
        date: 'Jun. 07, 2023',
        location: 'Burnaby, Canada',
        imgSrc: 'path/to/avatar2.jpg',
    },
];

const ExchangePage = () => {
    return (
        <div className="exchange-page">
            <h1 className="exchange-page__title">Completed services</h1>
            <ul className="exchange-page__list">
                {exchanges.map((exchange, index) => (
                    <li key={index} className="exchange-page__item">
                        <img src={exchange.imgSrc} alt={exchange.provider} className="exchange-page__avatar" />
                        <div className="exchange-page__info">
                            <h2 className="exchange-page__provider">{exchange.provider}</h2>
                            <p className="exchange-page__service">{exchange.service} - {exchange.date}</p>
                            <p className="exchange-page__location">{exchange.location}</p>
                        </div>
                        <span className="exchange-page__arrow">&gt;</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExchangePage;
