import React from "react";
import IconButton from "@mui/material/IconButton";
import * as roomHandler from "../../../realtimeCommunication/roomHandler";
import CallEndIcon from "@mui/icons-material/CallEnd";
import "../../../shared/UI/css/Room.css";

const CloseRoomButton = () => {
  const handleLeaveRoom = () => {
    roomHandler.leaveRoom();
  };

  return (
    <IconButton
      onClick={handleLeaveRoom}
      sx={{
        color: "white",
        width: "72px",
        height: "42px",
        backgroundColor: "#dc362e",
        borderRadius: "50px",
        "&:hover": {
          backgroundColor: "#a52b24",
        },
        margin: "10px",
      }}>
      <CallEndIcon sx={{ color: "white", width: "72px" }} />
    </IconButton>
  );
};

export default CloseRoomButton;
