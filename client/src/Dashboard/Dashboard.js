import React, { useState, useEffect } from "react";
import Spinner from "../shared/components/Spinner";
import SubjectSideBar from "./SubjectsContainer/SubjectsContainer";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";
import { logout } from "../shared/utils/auth";
import "../shared/UI/css/dashboard.css";
import DashboardHeader from "../shared/components/DashboardHeader";

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
    <>
      <div className="header-container">
        <DashboardHeader />
      </div>
      <div className="dashboard-container">
        <SubjectSideBar />
      </div>
    </>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

const mapStoreStateToProps = ({ socket }) => {
  return {
    socketOpen: socket.socketOpen,
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(Dashboard);
