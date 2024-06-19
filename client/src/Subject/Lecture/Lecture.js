import React from "react";
import { styled } from "@mui/system";
import CreateRoomButton from "./CreateRoomButton";
import { useSelector } from "react-redux";
import ActiveRoomButton from "./ActiveRoomButton";

const MainContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "transparent",
});

const Lecture = ({ subjectId }) => {
  const activeRooms = useSelector((state) => state.room.activeRooms);
  const isUserInRoom = useSelector((state) => state.room.isUserInRoom);
  return (
    <MainContainer>
      {activeRooms.length === 0 ? (
        <CreateRoomButton isUserInRoom={isUserInRoom} subjectId={subjectId} />
      ) : null}
      {activeRooms.map((room) => (
        <ActiveRoomButton
          roomId={room.roomId}
          creatorUsername={room.roomCreator.userId}
          amountOfParticipants={room.participants.length}
          key={room.roomId}
          isUserInRoom={isUserInRoom}
        />
      ))}
    </MainContainer>
  );
};

export default Lecture;
