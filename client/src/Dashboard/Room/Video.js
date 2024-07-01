import React, { useEffect, useRef } from "react";
import { styled } from "@mui/system";

const MainContainer = styled("div")({
  height: "100%",
  width: "100%",
  borderRadius: "15px",
});

const VideoEl = styled("video")({
  width: "100%",
  height: "100%",
  borderRadius: "15px",
});

const Video = ({ stream, isLocalStream }) => {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    video.srcObject = stream;

    video.onloadedmetadata = () => {
      video.play();
    };
  }, [stream]);

  return (
    <MainContainer>
      <VideoEl ref={videoRef} autoPlay muted={isLocalStream ? true : false} />
    </MainContainer>
  );
};

export default Video;
