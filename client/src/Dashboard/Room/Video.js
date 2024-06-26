import React, { useEffect, useRef } from "react";
import { styled } from "@mui/system";

const MainContainer = styled("div")({
  height: "50%",
  width: "50%",
  backgroundColor: "black",
  borderRadius: "15px",
  margin: "10px",
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

    // Log the stream to check its type
    console.log("Video component received stream:", stream);

    // Check if the stream is a MediaStream before setting it
    if (stream instanceof MediaStream) {
      video.srcObject = stream;
    } else {
      console.error("Provided stream is not a MediaStream:", stream);
    }

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
