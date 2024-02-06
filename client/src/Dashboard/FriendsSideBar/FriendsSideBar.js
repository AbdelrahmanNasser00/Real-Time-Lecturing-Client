import React from "react";
import { styled } from "@mui/system";
import SendInvitationButton from "./SendInvitationButton";
import Title from "./Title";
import FriendsList from "./FriendsList/FriendsList";
import PendingInvitationsList from "./PendingInvitationsList/PendingInvitationsList";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const FriendsSideBar = () => {
  return (
    <MainContainer>
      <SendInvitationButton />
      <Title title="Enrolled Students" />
      <FriendsList />
      <Title title="Invitations" />
      <PendingInvitationsList />
    </MainContainer>
  );
};

export default FriendsSideBar;
