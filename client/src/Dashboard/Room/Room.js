import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import VideosContainer from "./VideosContainer";
import RoomButtons from "./RoomButtons/RoomButtons";
import "../../shared/UI/css/Room.css";
const MainContainer = styled("div")({
  position: "relative",
  borderRadius: "0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const fullScreenRoomStyle = {
  width: "100%",
  height: "100vh",
};

const minimizedRoomStyle = {
  width: "100%",
  height: "100vh",
};

const Room = ({ handleFullScreen, isFullScreen }) => {
  const [isRoomMinimized, setIsRoomMinimized] = useState(true);

  useEffect(() => {
    setIsRoomMinimized(!isFullScreen);
  }, [isFullScreen]);

  return (
    <MainContainer
      className="room-container"
      style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}>
      <VideosContainer />
      <RoomButtons
        isRoomMinimized={isRoomMinimized}
        handleFullScreen={handleFullScreen}
      />
    </MainContainer>
  );
};

export default Room;
