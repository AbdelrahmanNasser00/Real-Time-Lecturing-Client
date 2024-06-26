import React from "react";
import moment from "moment";
import "../../shared/UI/css/chat.css";

const Message = ({ message, username }) => {
  return (
    <div
      className={`message ${message.username === username ? "mine" : "other"}`}>
      <p>
        {message.username}: {message.message}
      </p>
      <span>{moment(message.timestamp).format("MMMM Do, h:mm:ss a")}</span>
    </div>
  );
};

export default Message;
