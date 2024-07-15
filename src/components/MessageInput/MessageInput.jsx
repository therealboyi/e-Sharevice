// MessageInput.jsx

import React from "react";
import "./MessageInput.scss";
import Button from "../Buttons/Buttons";

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
      <Button variant="submit" text="Send" onClick={handleSendMessage} />
    </div>
  );
};

export default MessageInput;
