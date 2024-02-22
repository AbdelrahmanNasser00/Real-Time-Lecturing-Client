import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import * as roomHandler from "../../realtimeCommunication/roomHandler";
import "../../shared/UI/css/RoomButtons.css";

const CreateRoomButton = ({ isUserInRoom, subjectId }) => {
  const createNewRoomHandler = () => {
    roomHandler.createNewRoom(subjectId);
  };

  return (
    <>
      <button
        type="button"
        className="createRoomButton"
        disabled={isUserInRoom}
        onClick={createNewRoomHandler}>
        <span class="button__text">Create Lecture</span>
        <span class="button__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke="currentColor"
            height="24"
            fill="none"
            class="svg">
            <line y2="19" y1="5" x2="12" x1="12"></line>
            <line y2="12" y1="12" x2="19" x1="5"></line>
          </svg>
        </span>
      </button>

      {/* <Button
        disabled={isUserInRoom}
        onClick={createNewRoomHandler}
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "16px",
          margin: 0,
          padding: 0,
          minWidth: 0,
          marginTop: "10px",
          color: "white",
          backgroundColor: "#5865F2",
        }}>
        <AddIcon />
      </Button> */}
    </>
  );
};

export default CreateRoomButton;
