import React, { useEffect, useState } from "react";
import SideBar from "./SideBar/SideBar";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import Room from "./Room/Room";
import Wrapper from "../shared/components/Wrapper";
import Spinner from "../shared/components/Spinner";
import { useParams } from "react-router-dom";
import Files from "./SubjectBar/Files";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";
import { logout } from "../shared/utils/auth";
import DashboardHeader from "../shared/components/dashboardHeader";

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
    <>
      <div className="header-container">
        <DashboardHeader />
      </div>
      <Wrapper>
        <SideBar subjectId={subject.id} />
        <Files />

        {isUserInRoom && <Room />}
      </Wrapper>
    </>
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
