import React from "react";
import moment from "moment";
import "../../shared/UI/css/chat.css";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

const Message = ({ message, username }) => {
  console.log(message, username);

  return (
    <div
      className={`fullMessage ${
        message.username === username ? "mine" : "other"
      }`}>
      <AccountCircleSharpIcon sx={{ color: "#3d8bfd" }} />
      <div
        className={`message ${
          message.username === username ? "mine2" : "other2"
        }`}>
        {message.username !== username && (
          <div className="message-sender">{message.username}</div>
        )}{" "}
        <div className="message-content">
          <p>{message.message}</p>
          <span>{moment(message.timestamp).format("MMMM Do, h:mm:ss a")}</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
