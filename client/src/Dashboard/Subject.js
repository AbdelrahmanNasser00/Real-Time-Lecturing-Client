import React, { useState } from "react";
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

const Subject = ({ setUserDetails, room, subjects, socketOpen }) => {
  const isUserInRoom = room.isUserInRoom;
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const subject = subjects.subjects.find((subject) => subject.code === id);
  useUserDetails(setUserDetails, setIsLoading);
  if (isLoading || !subjects.subjects.length) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <SideBar />
      <Files />
      <AppBar subjectCode={subject.code} />
      <h1>{subject.code}</h1>
      {isUserInRoom && <Room />}
    </Wrapper>
  );
};

// const mapStoreStateToProps = ({ room, subjects }) => {
//   return {
//     ...room,
//     ...subjects,
//   };
// };

const mapStoreStateToProps = ({ room, subjects, socket }) => {
  // Assuming the socket state is under 'socket' key
  return {
    subjects,
    room,
    socketOpen: socket.socketOpen, // Pass socketOpen state from Redux store to props
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(Subject);
