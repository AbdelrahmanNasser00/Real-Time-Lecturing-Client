import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";

const MicButton = ({ localStream }) => {
  const [micEnabled, setMicEnabled] = useState(true);

  const handleToggleMic = () => {
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    setMicEnabled(!micEnabled);
  };

  return (
    <IconButton
      onClick={handleToggleMic}
      sx={{
        color: "white",
        width: "48px",
        height: "48px",
        backgroundColor: "rgb(255, 255, 255, 0.1)",
        borderRadius: "50%",
        margin: "10px",
      }}>
      {micEnabled ? <MicIcon /> : <MicOffIcon />}
    </IconButton>
  );
};

export default MicButton;
