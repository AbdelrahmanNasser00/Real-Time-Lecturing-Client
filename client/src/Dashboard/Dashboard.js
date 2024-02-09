import React, { useState, useEffect } from "react";
import Spinner from "../shared/components/Spinner";
import useUserDetails from "../shared/utils/useUserDetails";
import SubjectSideBar from "./SubjectsSideBar/SubjectsSideBar";
import AppBar from "./AppBar/AppBar";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import Wrapper from "../shared/components/Wrapper";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";
import { logout } from "../shared/utils/auth";

const Dashboard = ({ setUserDetails, socketOpen }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      logout();
    } else {
      const parsedUserDetails = JSON.parse(userDetails);
      setUserDetails(parsedUserDetails);
      if (!socketOpen) {
        connectWithSocketServer(parsedUserDetails);
      }
      setIsLoading(false);
    }
  }, [setUserDetails, socketOpen]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Wrapper>
      <SubjectSideBar />
      <AppBar />
    </Wrapper>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

const mapStoreStateToProps = ({ socket }) => {
  return {
    socketOpen: socket.socketOpen
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(Dashboard);
