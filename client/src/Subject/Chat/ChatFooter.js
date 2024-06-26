import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../shared/UI/css/chat.css";
import * as socketConnection from "../../realtimeCommunication/socketConnection";
import moment from "moment";
import { useDropzone } from "react-dropzone";
import FileUpload from "./FileUpload";

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
      timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    socketConnection.sendMessage(fullMessage);
    setMessage("");
  };

  return (
    <div className="chat-footer">
      <input
        type="text"
        placeholder="Send a message"
        value={message}
        onChange={handleMessageChange}
      />
      <FileUpload />
      <button className="send-btn" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatFooter;
