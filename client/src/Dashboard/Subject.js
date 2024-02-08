import React, { useState } from "react";
import SideBar from "./SideBar/SideBar";
import AppBar from "./AppBar/AppBar";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import Room from "./Room/Room";
import useUserDetails from "../shared/utils/useUserDetails";
import Wrapper from "../shared/components/Wrapper";
import Spinner from "../shared/components/Spinner";
import Files from "./SubjectBar/Files";

const Subject = ({ setUserDetails, isUserInRoom }) => {
  const [isLoading, setIsLoading] = useState(true);

  useUserDetails(setUserDetails, setIsLoading);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <SideBar />
      <Files />
      <AppBar />
      {isUserInRoom && <Room />}
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

export default connect(mapStoreStateToProps, mapActionsToProps)(Subject);
