import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import Spinner from "../shared/components/Spinner";
import { useParams } from "react-router-dom";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";
import { logout } from "../shared/utils/auth";
import "../shared/UI/css/SubjectPage.css";
import RegularHeaderAndSidebar from "./Lecture/RegularHeaderAndSidebar";

const Subject = ({ subjects, setUserDetails, room, socketOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(subjects.subjects);
  const isUserInRoom = room.isUserInRoom;

  useEffect(() => {
    const userDetails = localStorage.getItem("user");

    if (!userDetails) {
      logout();
    } else {
      const parsedUserDetails = JSON.parse(userDetails);
      setUserDetails(parsedUserDetails);
      if (!socketOpen && !subjects.subjects.length) {
        connectWithSocketServer(parsedUserDetails);
      }
      setIsLoading(false);
    }
  }, [setUserDetails, socketOpen, subjects.subjects.length]);

  const { id } = useParams();

  const subject = subjects.subjects.find((subject) => subject.code === id);
  console.log("subject ", subject);
  if (!subjects.subjects.length) {
    return <Spinner />;
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <RegularHeaderAndSidebar isUserInRoom={isUserInRoom} subject={subject} />
  );
};

const mapStoreStateToProps = ({ room, subjects, socket }) => {
  return {
    subjects,
    room,
    socketOpen: socket.socketOpen,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(Subject);
