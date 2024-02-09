import React from "react";
import { styled } from "@mui/system";
import SubjectsListItem from "./SubjectsListItem";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});
// console.log()
const SubjectsList = ({ subjects }) => {
  const x = [
    {
      id: "65c2cfb3c48176810e7f783c",
      code: "CS361",
      name: "Artificial Intelligence",
    },
    {
      id: "65c2d08e7b2f40a04cfce1b5",
      code: "CS351",
      name: "Computer Graphics",
    },
  ];
  console.log("sub", subjects);
  console.log("x", x);
  return (
    <MainContainer>
      {x.map((subject) => (
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
