import React from "react";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

const MainContainer = styled("div")({
  position: "absolute",
  bottom: "10px",
  right: "10px",
});

const ResizeRoomButton = ({ isRoomMinimized, handleFullScreen }) => {
  const handleClick = () => {
    handleFullScreen();
  };
  return (
    <MainContainer
      sx={{
        bottom: "17px",
        right: "18px",
      }}>
      <IconButton
        sx={{
          color: "white",
          width: "48px",
          height: "48px",
          backgroundColor: "rgb(255, 255, 255, 0.1)",
          borderRadius: "50%",
        }}
        onClick={handleClick}>
        {isRoomMinimized ? <OpenInFullIcon /> : <CloseFullscreenIcon />}
      </IconButton>
    </MainContainer>
  );
};

export default ResizeRoomButton;
