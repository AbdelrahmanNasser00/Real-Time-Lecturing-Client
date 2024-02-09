import React, { useEffect, useState } from "react";
import SideBar from "./SideBar/SideBar";
import AppBar from "./AppBar/AppBar";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import Room from "./Room/Room";
import useUserDetails from "../shared/utils/useUserDetails";
import Wrapper from "../shared/components/Wrapper";
import Spinner from "../shared/components/Spinner";
import { useParams } from "react-router-dom";
import Files from "./SubjectBar/Files";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";
import { logout } from "../shared/utils/auth";

const Subject = ({ subjects, setUserDetails, isUserInRoom, socketOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(subjects.subjects);
  
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
    <Wrapper>
      <SideBar subjectId={subject.id} />
      <Files />
      <AppBar />
      <h1>{subject.code}</h1>
      {isUserInRoom && <Room />}
    </Wrapper>
  );
};

const mapStoreStateToProps = ({ room, subjects, socket }) => { // Assuming the socket state is under 'socket' key
  return {
    subjects,
    room,
    socketOpen: socket.socketOpen // Pass socketOpen state from Redux store to props
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(Subject);
