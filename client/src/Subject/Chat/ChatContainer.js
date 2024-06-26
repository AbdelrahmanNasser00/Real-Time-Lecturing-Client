import React, { useEffect, useRef } from "react";
import Message from "./Message";
import { useSelector } from "react-redux";
import "../../shared/UI/css/chat.css";

const ChatContainer = () => {
  const messages = useSelector((state) => state.chat.messages);

  const userDetailsString = localStorage.getItem("user");
  const userDetails = JSON.parse(userDetailsString);
  const username = userDetails.username;

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container" ref={chatContainerRef}>
      {messages.map((message, index) => (
        <Message key={index} message={message} username={username} />
      ))}
    </div>
  );
};

export default ChatContainer;
