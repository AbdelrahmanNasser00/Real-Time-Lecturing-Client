import React, { useEffect, useState } from "react";
import "../../shared/UI/css/chat.css";
import * as socketConnection from "../../realtimeCommunication/socketConnection";

const ChatFooter = ({ subjectId }) => {
  const [message, setMessage] = useState("");
  const userDetailsString = localStorage.getItem("user");
  const userDetails = JSON.parse(userDetailsString);
  const username = userDetails.username;

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (message.trim() !== "" && e.key === "Enter") {
        handleSendMessage();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [message]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() === "") {
      return;
    }
    const fullMessage = {
      username: username,
      message: message,
      subjectId: subjectId,
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
      <button className="send-btn" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatFooter;
