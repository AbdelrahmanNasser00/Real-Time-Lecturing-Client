import React from "react";
import { styled } from "@mui/system";
import Title from "../../shared/components/Title";
import FileList from "./FilesList/FilesList";

const MainContainer = styled("div")({
  width: "165px",
  height: "calc(100vh - 64px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "40px",
  boxShadow: "0px 0px 4px gray",
  margin: "6px",
});

const Files = () => {
  return (
    <MainContainer>
      <Title title="Files" />
      <FileList />
    </MainContainer>
  );
};

export default Files;
