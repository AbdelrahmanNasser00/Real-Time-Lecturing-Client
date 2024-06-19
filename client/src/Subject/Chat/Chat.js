import React from "react";
import ChatContainer from "./ChatContainer";
import ChatFooter from "./ChatFooter";
import "../../shared/UI/css/chat.css";

const Chat = () => {
  return (
    <div className="chat">
      <ChatContainer />
      <ChatFooter />
    </div>
  );
};

export default Chat;
