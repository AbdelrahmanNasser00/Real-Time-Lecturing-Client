import React from "react";
import { styled } from "@mui/system";
import CameraButton from "./CameraButton";
import MicButton from "./MicButton";
import CloseRoomButton from "./CloseRoomButton";
import ScreenShareButton from "./ScreenShareButton";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/roomActions";
import ResizeRoomButton from "../ResizeRoomButton";
import "../../../shared/UI/css/Room.css";

const MainContainer = styled("div")({
  height: "5rem",
  width: "calc(99% + 10px)",
  backgroundColor: "#333",
  // borderTopLeftRadius: "15px",
  // borderTopRightRadius: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "5px",
  marginRight: "5px",
  marginBottom: "5px",
  borderRadius: "15px",
});

const RoomButtons = (props) => {
  const {
    localStream,
    isUserJoinedWithOnlyAudio,
    isRoomMinimized,
    handleFullScreen,
  } = props;

  return (
    <MainContainer>
      <MicButton localStream={localStream} />
      {!isUserJoinedWithOnlyAudio && <CameraButton localStream={localStream} />}
      {!isUserJoinedWithOnlyAudio && <ScreenShareButton {...props} />}
      <CloseRoomButton />
      <ResizeRoomButton
        isRoomMinimized={isRoomMinimized}
        handleFullScreen={handleFullScreen}
      />
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(RoomButtons);
