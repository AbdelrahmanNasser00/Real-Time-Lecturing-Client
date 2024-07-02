import React from "react";
import SubjectsList from "./subjectsList/SubjectsList";
import "../../shared/UI/css/SubjectsContainer.css";

const SubjectsContainer = () => {
  return (
    <div className="Subjects-container">
      <div className="subject-h2">
        <h2>Your Subjects</h2>
      </div>
      <SubjectsList />
    </div>
  );
};

export default SubjectsContainer;
