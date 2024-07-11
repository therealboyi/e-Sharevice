// MessageInput.jsx

import React from "react";
import "./MessageInput.scss";

const MessageInput = ({ newMessage, setNewMessage, handleSendMessage }) => {
  return (
    <div className="message-input">
      <input
        type="text"
        className="message-input__input"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button
        className="message-input__send-button"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
