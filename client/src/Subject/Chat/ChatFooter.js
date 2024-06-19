import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../shared/UI/css/chat.css";
import * as socketConnection from "../../realtimeCommunication/socketConnection";

const ChatFooter = () => {
  const [message, setMessage] = useState("");
  const userDetailsString = localStorage.getItem("user");
  const userDetails = JSON.parse(userDetailsString);
  const username = userDetails.username;

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    const fullMessage = {
      id: uuidv4(),
      username: username,
      message: message,
      timestamp: new Date().toISOString(),
    };

    if (message.trim() !== "") {
      socketConnection.sendMessage(fullMessage);
      setMessage("");
    }
  };

  return (
    <div className="chat-footer">
      <input
        type="text"
        placeholder="Send a message"
        value={message}
        onChange={handleMessageChange}
      />
      <button className="send-btn" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatFooter;
