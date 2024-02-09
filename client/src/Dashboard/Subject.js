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

const Subject = ({ setUserDetails, isUserInRoom, subjects }) => {
  const [isLoading, setIsLoading] = useState(true);
  // const { code } = useParams();
  const { id } = useParams();
  console.log("from subject componendt: subjects: ", subjects);

  // const subject = subjects.find((subject) => subject.code === parseInt(id));
  const subject = subjects.find((subject) => subject.code === id);
  useUserDetails(setUserDetails, setIsLoading);
  if (isLoading) {
    return <Spinner />;
  }
  console.log("from subject componendt: ", subject);
  return (
    <Wrapper>
      <SideBar />
      <AppBar />
      <h1>{subject.code}</h1>
      {isUserInRoom && <Room />}
    </Wrapper>
  );
};

// const mapStoreStateToProps = ({ subjects }) => {
//   return {
//     ...subjects,
//   };
// };

const mapStoreStateToProps = ({ room, subjects }) => {
  return {
    ...room,
    ...subjects,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

/*
const mapStateToProps = (state) => ({
  friends: state.friends,
});

export default connect(mapStateToProps)(FriendDetailPage);
*/
export default connect(mapStoreStateToProps, mapActionsToProps)(Subject);
