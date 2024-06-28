import React from "react";
import SubjectsList from "./subjectsList/SubjectsList";
import "../../shared/UI/css/SubjectsContainer.css";

const SubjectsContainer = () => {
  return (
    <div className="SubjectsSideBar-container">
      <h1 className="subject-h1">Your Subjects</h1>
      <SubjectsList />
    </div>
  );
};

export default SubjectsContainer;
