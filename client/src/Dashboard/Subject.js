import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import Spinner from "../shared/components/Spinner";
import { useParams } from "react-router-dom";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";
import { logout } from "../shared/utils/auth";
import "../shared/UI/css/SubjectPage.css";
import SideBar from "./Lecture/SideBar";
import MobileSidebar from "./Lecture/MobileSidebar";
import SubjectHeader from "../shared/components/SubjectHeader";

const Subject = ({ subjects, setUserDetails, room, socketOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const isUserInRoom = room.isUserInRoom;
  const [mobileSidebarWidth, setMobileSidebarWidth] = useState(0);

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

  if (!subjects.subjects.length) {
    return <Spinner />;
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <SubjectHeader
        isUserInRoom={isUserInRoom}
        subject={subject}
        setMobileSidebarWidth={setMobileSidebarWidth}
      />
      <div className="desktop-Sidebar">
        <SideBar isUserInRoom={isUserInRoom} subject={subject} />
      </div>
      <div className="mobile-Sidebar">
        <MobileSidebar
          isUserInRoom={isUserInRoom}
          subject={subject}
          width={mobileSidebarWidth}
        />
      </div>
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
