import React, { useEffect, useRef } from "react";
import Message from "./Message";
import { connect } from "react-redux";
import "../../shared/UI/css/chat.css";

const ChatContainer = ({ messages, subjectId }) => {
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
      {messages.map(
        (message, index) =>
          message.subjectId === subjectId && (
            <Message key={index} message={message} username={username} />
          )
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
});

export default connect(mapStateToProps)(ChatContainer);
