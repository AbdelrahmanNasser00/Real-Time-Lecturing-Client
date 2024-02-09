import React, { useState } from "react";
import Spinner from "../shared/components/Spinner";
import useUserDetails from "../shared/utils/useUserDetails";
import SubjectSideBar from "./SubjectsSideBar/SubjectsSideBar";
import AppBar from "./AppBar/AppBar";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import Wrapper from "../shared/components/Wrapper";

const Dashboard = ({ setUserDetails }) => {
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

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Dashboard);
