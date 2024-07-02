import React from "react";
import SubjectsListItem from "./SubjectsListItem";
import { connect } from "react-redux";
import "../../../shared/UI/css/SubjectsContainer.css";

const SubjectsList = ({ subjects }) => {
  return (
    <div className="subjectList-container">
      {subjects.map((subject) => (
        <SubjectsListItem
          key={subject.id}
          id={subject.id}
          name={subject.name}
          code={subject.code}
        />
      ))}
    </div>
  );
};

const mapStoreStateToProps = ({ subjects }) => {
  return {
    ...subjects,
  };
};

export default connect(mapStoreStateToProps)(SubjectsList);
