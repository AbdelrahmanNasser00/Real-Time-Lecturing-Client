import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import Video from "./Video";
import store from "../../store/store";
import "../../shared/UI/css/Room.css";

const MainContainer = styled("div")({
  height: "100%",
  width: "100%",
  // display: "grid",
  // gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  // gap: "10px",
  // padding: "10px",
  display: "flex",
  flexDirection: "row",
  boxSizing: "border-box",
  overflowY: "auto",
});

const VideosContainer = ({
  localStream,
  remoteStreams,
  screenSharingStream,
}) => {
  const roomCreatorId = store.getState().room.roomDetails?.roomCreator?.userId;
  let roomCreatorStream = remoteStreams.find(
    (stream) => stream.userId === roomCreatorId
  );
  if (!roomCreatorStream) {
    roomCreatorStream = localStream;
  }

  return (
    <MainContainer>
      <div className="videoWrapper-room-creator">
        <Video
          stream={screenSharingStream ? screenSharingStream : roomCreatorStream}
          isLocalStream
        />
      </div>
      <div className="remote-streams-container">
        {remoteStreams.map((stream) => (
          <div className="videoWrapper-remote-streams" key={stream.id}>
            <Video stream={stream} />
          </div>
        ))}
      </div>
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStateToProps)(VideosContainer);
