import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import ChatContainer from "./ChatContainer";
import ChatFooter from "./ChatFooter";
import "../../shared/UI/css/chat.css";
import { loadMessages } from "../../realtimeCommunication/socketConnection";
import {
  setMessagesLoaded,
  setSubjectId,
} from "../../store/actions/chatActions";
import store from "../../store/store";

const Chat = ({ subjectId, chat }) => {
  // const messagesLoaded = useSelector((state) => state.chat.messagesLoaded);
  const messagesLoaded = chat.messagesLoaded;
  useEffect(() => {
    if (!messagesLoaded) {
      store.dispatch(setSubjectId(subjectId));
      loadMessages(subjectId);
      store.dispatch(setMessagesLoaded(true));
    }
  }, [messagesLoaded, subjectId]);

  useEffect(() => {
    store.dispatch(setSubjectId(subjectId));
  }, [subjectId]);

  return (
    <div className="chat">
      <ChatContainer subjectId={subjectId} />
      <ChatFooter subjectId={subjectId} />
    </div>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    chat,
  };
};
export default connect(mapStoreStateToProps)(Chat);
