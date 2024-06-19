import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../shared/components/Spinner";
import { useParams } from "react-router-dom";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";
import { logout } from "../shared/utils/auth";
import "../shared/UI/css/SubjectPage.css";
import SubjectHeader from "../shared/components/SubjectHeader";
import MobileSidebar from "./Sidebars/MobileSidebar";
import SideBar from "./Sidebars/SideBar";
import Room from "../Dashboard/Room/Room";
import { setUserDetails } from "../store/authSlice";

const Subject = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mobileSidebarWidth, setMobileSidebarWidth] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const dispatch = useDispatch();
  const isUserInRoom = useSelector((state) => state.room.isUserInRoom);
  const subjects = useSelector((state) => state.subjects.subjects);
  const socketOpen = useSelector((state) => state.socket.socketOpen);

  useEffect(() => {
    const userDetails = localStorage.getItem("user");

    if (!userDetails) {
      logout();
    } else {
      const parsedUserDetails = JSON.parse(userDetails);
      dispatch(setUserDetails(parsedUserDetails));
      if (!socketOpen && !subjects.length) {
        connectWithSocketServer(parsedUserDetails, dispatch);
      }
      setIsLoading(false);
    }
  }, [socketOpen, subjects.length, dispatch]);

  const { id } = useParams();
  const subject = subjects.find((subject) => subject.code === id);
  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  if (!subjects.length) {
    return <Spinner />;
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {!isFullScreen && (
        <>
          <SubjectHeader
            isUserInRoom={isUserInRoom}
            subject={subject}
            setMobileSidebarWidth={setMobileSidebarWidth}
          />
          <div className="desktop-Sidebar">
            <SideBar
              isUserInRoom={isUserInRoom}
              subject={subject}
              handleFullScreen={handleFullScreen}
              isFullScreen={isFullScreen}
            />
          </div>
          <div className="mobile-Sidebar">
            <MobileSidebar
              isUserInRoom={isUserInRoom}
              subject={subject}
              handleFullScreen={handleFullScreen}
              width={mobileSidebarWidth}
            />
          </div>
        </>
      )}
      {isFullScreen && (
        <Room handleFullScreen={handleFullScreen} isFullScreen={isFullScreen} />
      )}
    </>
  );
};

export default Subject;
