// src/pages/MessagesPage/MessagesPage.jsx
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import MessageInput from "../../components/MessageInput/MessageInput";
import "./MessagesPage.scss";

const conversations = [
  {
    sender: "Fit4Less",
    messages: [
      {
        sender: "Fit4Less",
        message:
          "I can also make a 4 Months customized workout plan for you if you want.",
        imgSrc: "/src/assets/images/avatar.png",
      },
      {
        sender: "You",
        message:
          "That sounds great! Can you include exercises for both strength and cardio?",
        imgSrc: "/src/assets/images/avatar.png",
      },
      {
        sender: "Fit4Less",
        message:
          "Absolutely! I'll make sure to include a balanced mix of both.",
        imgSrc: "/src/assets/images/avatar.png",
      },
    ],
  },
  {
    sender: "Gym Jam",
    messages: [
      {
        sender: "Gym Jam",
        message:
          "Are you able to help me get started on a plan to gain more weight?",
        imgSrc: "/src/assets/images/avatar.png",
      },
      {
        sender: "You",
        message: "Sure, I can help with that. What are your goals?",
        imgSrc: "/src/assets/images/avatar.png",
      },
      {
        sender: "Gym Jam",
        message: "I want to gain muscle mass and improve my overall strength.",
        imgSrc: "/src/assets/images/avatar.png",
      },
      {
        sender: "You",
        message:
          "Great! We'll need to focus on a high-calorie diet and a consistent workout plan.",
        imgSrc: "/src/assets/images/avatar.png",
      },
      {
        sender: "Gym Jam",
        message: "I'm ready to get started!",
        imgSrc: "/src/assets/images/avatar.png",
      },
    ],
  },
  {
    sender: "Mandy's Pawradise",
    messages: [
      {
        sender: "Mandy's Pawradise",
        message: "Will you be available to pick them up at 5:00 PM?",
        imgSrc: "/src/assets/images/avatar.png",
      },
      {
        sender: "You",
        message: "Yes, I can be there by 5:00 PM. Thanks!",
        imgSrc: "/src/assets/images/avatar.png",
      },
      {
        sender: "Mandy's Pawradise",
        message: "Great! See you then.",
        imgSrc: "/src/assets/images/avatar.png",
      },
    ],
  },
];

const MessagesPage = ({ setIsMessageSelected }) => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [newMessage, setNewMessage] = useState("");

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    setIsMessageSelected(true);
  };

  const handleBackToList = () => {
    setSelectedConversation(null);
    setIsMessageSelected(false);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        sender: "You",
        message: newMessage,
        imgSrc: "/src/assets/images/avatar.png",
      };
      selectedConversation.messages.push(newMsg);
      setNewMessage("");
    }
  };

  return (
    <>
      <Header />
      <main>
        <div
          className={`messages-page ${
            selectedConversation && isMobile
              ? "messages-page--message-selected"
              : ""
          }`}
        >
          <div className="messages-page__content">
            {!selectedConversation && isMobile ? (
              <h1 className="messages-page__title">Messages</h1>
            ) : null}
            {isMobile && selectedConversation ? (
              <div className="messages-page__details">
                <div className="messages-page__details-header">
                  <button
                    className="messages-page__back-button"
                    onClick={handleBackToList}
                  >
                    Back
                  </button>
                  <h2 className="messages-page__details-sender">
                    {selectedConversation.sender}
                  </h2>
                </div>
                <div className="messages-page__details-texts">
                  {selectedConversation.messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`message ${
                        msg.sender === "You"
                          ? "message--sent"
                          : "message--received"
                      }`}
                    >
                      <p className="message__text">{msg.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="messages-page__main">
                <div className="messages-page__list-container">
                  {!isMobile && (
                    <h1 className="messages-page__title">Messages</h1>
                  )}
                  <ul className="messages-page__list">
                    {conversations.map((conv, index) => (
                      <li
                        key={index}
                        className="messages-page__item"
                        onClick={() => handleSelectConversation(conv)}
                      >
                        <img
                          src={conv.messages[0].imgSrc}
                          alt={conv.sender}
                          className="messages-page__avatar"
                        />
                        <div className="messages-page__info">
                          <h2 className="messages-page__sender">
                            {conv.sender}
                          </h2>
                          <p className="messages-page__text">
                            {conv.messages[0].message.length > 50
                              ? `${conv.messages[0].message.substring(
                                  0,
                                  50
                                )}...`
                              : conv.messages[0].message}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {selectedConversation && !isMobile && (
                  <div className="messages-page__details-container">
                    <div className="messages-page__details">
                      <h2 className="messages-page__details-sender">
                        {selectedConversation.sender}
                      </h2>
                      <div className="messages-page__details-texts">
                        {selectedConversation.messages.map((msg, index) => (
                          <div
                            key={index}
                            className={`message ${
                              msg.sender === "You"
                                ? "message--sent"
                                : "message--received"
                            }`}
                          >
                            <p className="message__text">{msg.message}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          {(selectedConversation || window.innerWidth < 768) && (
            <div className="messages-page__input-container">
              <MessageInput
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                handleSendMessage={handleSendMessage}
              />
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default MessagesPage;
