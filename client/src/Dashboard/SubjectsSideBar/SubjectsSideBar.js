import React from "react";
import { styled } from "@mui/system";
import SubjectsList from "./subjectsList/SubjectsList";
import Title from "../FriendsSideBar/Title";
const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const SubjectsSideBar = () => {
  return (
    <MainContainer>
      <Title title="Your Subjects" />

      <SubjectsList />
    </MainContainer>
  );
};

export default SubjectsSideBar;
