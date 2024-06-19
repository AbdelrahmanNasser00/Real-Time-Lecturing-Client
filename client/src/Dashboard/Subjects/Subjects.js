import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
  height: "calc(100vh - 107px)",
  position: "relative",
  borderRadius: "40px",
  padding: "20px",
  margin: "5px",
  boxShadow: "0px 0px 5px #999999",
});

const Subjects = () => {
  return (
    <Wrapper>
      <h2 styled={{ padding: "5px", margin: "10px" }}>Subjects</h2>
    </Wrapper>
  );
};

export default Subjects;
