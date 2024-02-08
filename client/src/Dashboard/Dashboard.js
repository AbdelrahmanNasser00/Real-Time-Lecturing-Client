import React, { useState } from "react";
import { styled } from "@mui/system";
import Spinner from "../shared/components/Spinner";
import useUserDetails from "../shared/utils/useUserDetails";
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import SubjectSideBar from "./SubjectsSideBar/SubjectsSideBar";
import AppBar from "./AppBar/AppBar";
import Room from "./Room/Room";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  backgroundColor: "#36393f",
});

const Dashboard = ({ setUserDetails, isUserInRoom }) => {
  const [isLoading, setIsLoading] = useState(true);

  useUserDetails(setUserDetails, setIsLoading);

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

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(Dashboard);
