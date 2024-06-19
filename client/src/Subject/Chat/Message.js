import React from "react";
import "../../shared/UI/css/chat.css";

const Message = ({ message, username, timestamp }) => {
  return (
    <div className="message">
      <span className="sender-name">{username}: </span>
      <span className="message-text">{message}</span>
      <span>{timestamp}</span>
    </div>
  );
};

export default Message;
