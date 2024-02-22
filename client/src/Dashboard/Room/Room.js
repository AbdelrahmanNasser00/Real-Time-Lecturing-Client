import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import ResizeRoomButton from "./ResizeRoomButton";
import VideosContainer from "./VideosContainer";
import RoomButtons from "./RoomButtons/RoomButtons";
const MainContainer = styled("div")({
  position: "relative",
  borderRadius: "0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#202225",
});

const fullScreenRoomStyle = {
  width: "100%",
  height: "100vh",
};

const minimizedRoomStyle = {
  width: "87%",
  height: "calc(100vh - 55px)",
};

const Room = () => {
  const [isRoomMinimized, setIsRoomMinimized] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const roomResizeHandler = () => {
    setIsRoomMinimized(!isRoomMinimized);
  };
  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <MainContainer
      className="room-container"
      style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}>
      <VideosContainer />
      <RoomButtons />
      <ResizeRoomButton
        isRoomMinimized={isRoomMinimized}
        handleRoomResize={roomResizeHandler}
        onclick={handleFullScreen}
      />
    </MainContainer>
  );
};

export default Room;
