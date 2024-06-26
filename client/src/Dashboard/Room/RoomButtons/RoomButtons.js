import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/system";
import CameraButton from "./CameraButton";
import MicButton from "./MicButton";
import CloseRoomButton from "./CloseRoomButton";
import ScreenShareButton from "./ScreenShareButton";
import { setScreenSharingStream } from "../../../store/roomSlice";

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
  const localStream = useSelector((state) => state.room.localStream);
  const isUserJoinedWithOnlyAudio = useSelector(
    (state) => state.room.isUserJoinedWithOnlyAudio
  );

  const handleScreenSharingStream = (stream) => {
    dispatch(setScreenSharingStream(stream));
  };

  return (
    <MainContainer>
      {!isUserJoinedWithOnlyAudio && (
        <ScreenShareButton
          handleScreenSharingStream={handleScreenSharingStream}
        />
      )}
      <MicButton localStream={localStream} />
      <CloseRoomButton />
      {!isUserJoinedWithOnlyAudio && <CameraButton localStream={localStream} />}
    </MainContainer>
  );
};

export default RoomButtons;
