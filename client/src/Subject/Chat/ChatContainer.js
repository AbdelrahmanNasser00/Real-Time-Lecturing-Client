import React from "react";
import Message from "./Message";
import { useSelector } from "react-redux";
import "../../shared/UI/css/chat.css";

const ChatContainer = () => {
  const messages = useSelector((state) => state.chat.messages);

  // const userDetailsString = localStorage.getItem("user");
  // const userDetails = JSON.parse(userDetailsString);
  // const username = userDetails.username;

  return (
    <div className="messages-container">
      {messages.map((message, index) => (
        <Message
          key={message.id}
          message={message.message}
          username={message.username}
          timestamp={message.timestamp}
        />
      ))}
    </div>
  );
};

export default ChatContainer;
