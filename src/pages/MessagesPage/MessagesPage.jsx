// src/pages/MessagesPage/MessagesPage.jsx
import React from 'react';
import './MessagesPage.scss';

const messages = [
    {
        sender: 'Fit4Less',
        message: 'I can also make a 4 Months customized workout plan for you if you want.',
        imgSrc: 'path/to/avatar1.jpg',
    },
    {
        sender: 'Gym Jam',
        message: 'Are you able to help me get started on a plan to gain more weight? Would that include supplements?',
        imgSrc: 'path/to/avatar2.jpg',
    },
    {
        sender: "Mandy's Pawradise",
        message: 'Will you be available to pick them up at 5:00 PM?',
        imgSrc: 'path/to/avatar3.jpg',
    },
];

const MessagesPage = () => {
    return (
        <div className="messages-page">
            <h1 className="messages-page__title">Chat</h1>
            <ul className="messages-page__list">
                {messages.map((msg, index) => (
                    <li key={index} className="messages-page__item">
                        <img src={msg.imgSrc} alt={msg.sender} className="messages-page__avatar" />
                        <div className="messages-page__info">
                            <h2 className="messages-page__sender">{msg.sender}</h2>
                            <p className="messages-page__text">{msg.message}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessagesPage;
