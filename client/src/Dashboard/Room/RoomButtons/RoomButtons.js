import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/system";
import CameraButton from "./CameraButton";
import MicButton from "./MicButton";
import CloseRoomButton from "./CloseRoomButton";
import ScreenShareButton from "./ScreenShareButton";
import { setLocalStreamId } from "../../../store/roomSlice";

const MainContainer = styled("div")({
  height: "15%",
  width: "100%",
  backgroundColor: "#5865f2",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0px",
});

const RoomButtons = () => {
  const dispatch = useDispatch();
  const { localStream, isUserJoinedWithOnlyAudio } = useSelector(
    (state) => state.room
  );

  const handleLocalStreamChange = (stream) => {
    dispatch(setLocalStreamId(stream.id));
  };

  return (
    <MainContainer>
      {!isUserJoinedWithOnlyAudio && (
        <ScreenShareButton onChange={handleLocalStreamChange} />
      )}
      <MicButton localStream={localStream} />
      <CloseRoomButton />
      {!isUserJoinedWithOnlyAudio && (
        <CameraButton
          localStream={localStream}
          onChange={handleLocalStreamChange}
        />
      )}
    </MainContainer>
  );
};

export default RoomButtons;
