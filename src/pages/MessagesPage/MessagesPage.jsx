// MessagesPage.jsx

import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import MessageInput from "../../components/MessageInput/MessageInput";
import "./MessagesPage.scss";

const messages = [
  {
    sender: "Fit4Less",
    message:
      "I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want. workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want. workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want. workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.I can also make a 4 Months customized workout plan for you if you want.",
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
  ,
  {
    sender: "Mandy's Pawradise",
    message: "Will you be available to pick them up at 5:00 PM?",
    imgSrc: "/src/assets/images/avatar.png",
  },
  ,
  {
    sender: "Mandy's Pawradise",
    message: "Will you be available to pick them up at 5:00 PM?",
    imgSrc: "/src/assets/images/avatar.png",
  },
  ,
  {
    sender: "Mandy's Pawradise",
    message: "Will you be available to pick them up at 5:00 PM?",
    imgSrc: "/src/assets/images/avatar.png",
  },
  ,
  {
    sender: "Mandy's Pawradise",
    message: "Will you be available to pick them up at 5:00 PM?",
    imgSrc: "/src/assets/images/avatar.png",
  },
  ,
  {
    sender: "Mandy's Pawradise",
    message: "Will you be available to pick them up at 5:00 PM?",
    imgSrc: "/src/assets/images/avatar.png",
  },
  ,
  {
    sender: "Mandy's Pawradise",
    message: "Will you be available to pick them up at 5:00 PM?",
    imgSrc: "/src/assets/images/avatar.png",
  },
  ,
  {
    sender: "Mandy's Pawradise",
    message: "Will you be available to pick them up at 5:00 PM?",
    imgSrc: "/src/assets/images/avatar.png",
  },
  ,
  {
    sender: "Mandy's Pawradise",
    message: "Will you be available to pick them up at 5:00 PM?",
    imgSrc: "/src/assets/images/avatar.png",
  },
  ,
  {
    sender: "Mandy's Pawradise",
    message: "Will you be available to pick them up at 5:00 PM?",
    imgSrc: "/src/assets/images/avatar.png",
  },
  ,
  {
    sender: "Mandy's Pawradise",
    message: "Will you be available to pick them up at 5:00 PM?",
    imgSrc: "/src/assets/images/avatar.png",
  },
  ,
  {
    sender: "Mandy's Pawradise",
    message: "Will you be available to pick them up at 5:00 PM?",
    imgSrc: "/src/assets/images/avatar.png",
  },
  ,
  {
    sender: "Mandy's Pawradise",
    message: "Will you be available to pick them up at 5:00 PM?",
    imgSrc: "/src/assets/images/avatar.png",
  },
];

const MessagesPage = ({ setIsMessageSelected }) => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSelectMessage = (message) => {
    console.log("Message selected:", message);
    setSelectedMessage(message);
    setIsMessageSelected(true);
  };

  const handleBackToList = () => {
    console.log("Back to list");
    setSelectedMessage(null);
    setIsMessageSelected(false);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        sender: "You",
        message: newMessage,
        imgSrc: "/src/assets/images/avatar.png",
      };
      messages.push(newMsg);
      setNewMessage("");
    }
  };

  useEffect(() => {
    console.log("isMobile:", isMobile);
    console.log("selectedMessage:", selectedMessage);
  }, [isMobile, selectedMessage]);

  return (
    <div
      className={`messages-page ${
        selectedMessage && isMobile ? "messages-page--message-selected" : ""
      }`}
    >
      <Header />
      <div className="messages-page__content">
        <h1 className="messages-page__title">Messages</h1>
        {isMobile && selectedMessage ? (
          <div className="messages-page__details">
            <button
              className="messages-page__back-button"
              onClick={handleBackToList}
            >
              Back
            </button>
            <h2 className="messages-page__details-sender">
              {selectedMessage.sender}
            </h2>
            <p className="messages-page__details-text">
              {selectedMessage.message}
            </p>
          </div>
        ) : (
          <div className="messages-page__main">
            <ul className="messages-page__list">
              {messages.map((msg, index) => (
                <li
                  key={index}
                  className="messages-page__item"
                  onClick={() => handleSelectMessage(msg)}
                >
                  <img
                    src={msg.imgSrc}
                    alt={msg.sender}
                    className="messages-page__avatar"
                  />
                  <div className="messages-page__info">
                    <h2 className="messages-page__sender">{msg.sender}</h2>
                    <p className="messages-page__text">
                      {msg.message.length > 50
                        ? `${msg.message.substring(0, 50)}...`
                        : msg.message}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            {selectedMessage && !isMobile && (
              <div className="messages-page__details-container">
                <div className="messages-page__details">
                  <h2 className="messages-page__details-sender">
                    {selectedMessage.sender}
                  </h2>
                  <p className="messages-page__details-text">
                    {selectedMessage.message}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <MessageInput
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default MessagesPage;
