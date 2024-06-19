import React, { useState, useEffect } from "react";
import Spinner from "../shared/components/Spinner";
import Lectures from "./Lectures/Lectures";
import Organizations from "./Organizations/Organizations";
import Subjects from "./Subjects/Subjects";
import { useDispatch, useSelector } from "react-redux";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";
import { setUserDetails } from "../store/authSlice";
import { logout } from "../shared/utils/auth";
import "../shared/UI/css/dashboard.css";
import DashboardHeader from "../shared/components/DashboardHeader";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  height: "100vh",
});

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const socketOpen = useSelector((state) => state.socket.socketOpen);
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      logout();
    } else {
      const parsedUserDetails = JSON.parse(userDetails);
      dispatch(setUserDetails(parsedUserDetails));
      if (!socketOpen) {
        connectWithSocketServer(parsedUserDetails, dispatch);
      }
      setIsLoading(false);
    }
  }, [dispatch, socketOpen]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <DashboardHeader />
      <Wrapper>
        <Subjects />
        <Lectures />
        <Organizations />
      </Wrapper>
    </>
  );
};

export default Dashboard;
