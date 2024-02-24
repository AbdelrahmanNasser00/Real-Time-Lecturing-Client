import React from "react";
import Tooltip from "@mui/material/Tooltip";
import * as roomHandler from "../../realtimeCommunication/roomHandler";
import "../../shared/UI/css/RoomButtons.css";

const ActiveRoomButton = ({
  creatorUsername,
  roomId,
  amountOfParticipants,
  isUserInRoom,
}) => {
  const handleJoinActiveRoom = () => {
    if (amountOfParticipants < 4) {
      roomHandler.joinRoom(roomId);
    }
  };

  const activeRoomButtonDisabled = amountOfParticipants > 3;
  const roomTitle = `Creator: ${creatorUsername}. Connected: ${amountOfParticipants}`;

  return (
    <Tooltip title={roomTitle}>
      <div className="room-join">
        <button
          className="joinRoombutton"
          disabled={activeRoomButtonDisabled || isUserInRoom}
          onClick={handleJoinActiveRoom}>
          There is a lecture live now
          <svg
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="15px"
            style={{ margin: "5px" }}>
            <path
              d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
              fill="currentColor"></path>
          </svg>
        </button>
      </div>
    </Tooltip>
  );
};

export default ActiveRoomButton;
