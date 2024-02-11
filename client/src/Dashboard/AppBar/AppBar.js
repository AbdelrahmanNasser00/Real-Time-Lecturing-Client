import React from "react";
import { styled } from "@mui/system";
import DropdownMenu from "./DropdownMenu";
// import ChosenOptionLabel from "./ChosenOptionLabel";

const MainContainer = styled("div")({
  position: "absolute",
  right: "0",
  top: "0",
  height: "48px",
  backgroundColor: "white",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  padding: "0 15px",
  color: "black",
});

const AppBar = () => {
  return (
    <MainContainer>
      {/* <ChosenOptionLabel /> */}
      <DropdownMenu />
    </MainContainer>
  );
};

export default AppBar;
