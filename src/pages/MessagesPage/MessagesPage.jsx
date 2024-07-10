// src/pages/MessagesPage/MessagesPage.jsx
import React from "react";
import Header from "../../components/Header/Header";
import "./MessagesPage.scss";

const messages = [
  {
    sender: "Fit4Less",
    message:
      "I can also make a 4 Months customized workout plan for you if you want.",
    imgSrc: "/src/assets/images/avatar.png",
  },
  {
    sender: "Gym Jam",
    message:
      "Are you able to help me get started on a plan to gain more weight? Would that include supplements?",
    imgSrc: "/src/assets/images/avatar.png",
  },
  {
    sender: "Mandy's Pawradise",
    message: "Will you be available to pick them up at 5:00 PM?",
    imgSrc: "/src/assets/images/avatar.png",
  },
];

const MessagesPage = () => {
  return (
    <div>
      <Header />
      <div className="messages-page">
        <div className="messages-page__content">
          <h1 className="messages-page__title">Messages</h1>
          <ul className="messages-page__list">
            {messages.map((msg, index) => (
              <li key={index} className="messages-page__item">
                <img
                  src={msg.imgSrc}
                  alt={msg.sender}
                  className="messages-page__avatar"
                />
                <div className="messages-page__info">
                  <h2 className="messages-page__sender">{msg.sender}</h2>
                  <p className="messages-page__text">{msg.message}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
