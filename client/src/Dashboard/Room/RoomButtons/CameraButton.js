import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";

const CameraButton = ({ localStream }) => {
  const [cameraEnabled, setCameraEnabled] = useState(true);

  const handleToggleCamera = () => {
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    setCameraEnabled(!cameraEnabled);
  };

  return (
    <IconButton
      onClick={handleToggleCamera}
      sx={{
        color: "white",
        width: "48px",
        height: "48px",
        backgroundColor: "rgb(255, 255, 255, 0.1)",
        borderRadius: "50%",
        margin: "10px",
      }}>
      {cameraEnabled ? <VideocamIcon /> : <VideocamOffIcon />}
    </IconButton>
  );
};

export default CameraButton;
