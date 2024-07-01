import React from "react";
import * as roomHandler from "../../realtimeCommunication/roomHandler";
import "../../shared/UI/css/RoomButtons.css";
import store from "../../store/store";

const CreateRoomButton = ({ isUserInRoom, subjectId }) => {
  const createNewRoomHandler = () => {
    const roomCreator = store.getState().auth.userDetails?.username;
    roomHandler.createNewRoom({ subjectId, roomCreator });
  };

  return (
    <>
      <button
        type="button"
        className="createRoomButton"
        disabled={isUserInRoom}
        onClick={createNewRoomHandler}>
        <span className="button__text">Create lecture</span>
        <span className="button__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            height="24"
            fill="none"
            className="svg">
            <line y2="19" y1="5" x2="12" x1="12"></line>
            <line y2="12" y1="12" x2="19" x1="5"></line>
          </svg>
        </span>
      </button>
    </>
  );
};

export default CreateRoomButton;
