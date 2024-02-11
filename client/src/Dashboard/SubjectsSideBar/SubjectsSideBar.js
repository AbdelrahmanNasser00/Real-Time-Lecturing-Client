import React from "react";
import { styled } from "@mui/system";
import SubjectsList from "./subjectsList/SubjectsList";
import Title from "../../shared/components/Title";
import "../../shared/UI/css/SubjectsSideBar.css";
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
    <div className="SubjectsSideBar-container">
      <h1 className="subject-h1">Your Subjects</h1>
      <SubjectsList />
    </div>
  );
};

export default SubjectsSideBar;
