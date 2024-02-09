import React from "react";
import { styled } from "@mui/system";
import SubjectsListItem from "./SubjectsListItem";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const SubjectsList = ({ subjects }) => {

  return (
    <MainContainer>
      {subjects.map((subject) => (
        <SubjectsListItem
          key={subject.id}
          name={subject.name}
          code={subject.code}
        />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ subjects }) => {
  return {
    ...subjects,
  };
};

export default connect(mapStoreStateToProps)(SubjectsList);
