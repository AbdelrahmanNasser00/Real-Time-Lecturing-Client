import io from "socket.io-client";
import { setSubjects } from "../store/actions/subjectsActions";
import store from "../store/store";
import * as roomHandler from "./roomHandler";
import * as webRTCHandler from "./webRTCHandler";

let socket = null;

export const connectWithSocketServer = async (userDetails) => {
  const jwtToken = userDetails.token;
  socket = await io("https://realtime-lecturing-api.onrender.com", {
    auth: {
      token: jwtToken,
    },
  });

  socket.on("connect", () => {
    console.log("succesfully connected with socket.io server");
    console.log(socket.id);
  });

  socket.on("subjects-list", (data) => {
    console.log("subjects came");
    store.dispatch(setSubjects(data));
  });

  socket.on("create-room", (data) => {
    roomHandler.newRoomCreated(data);
  });

  socket.on("active-rooms", (data) => {
    roomHandler.updateActiveRooms(data);
  });

  socket.on("conn-prepare", (data) => {
    const { connUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, false);
    socket.emit("initialze-connection", { connUserSocketId: connUserSocketId });
  });

  socket.on("initialze-connection", (data) => {
    const { connUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, true);
  });

  socket.on("conn-signal", (data) => {
    webRTCHandler.handleSignalingData(data);
  });

  socket.on("room-participant-left", (data) => {
    console.log("user left room");
    webRTCHandler.handleParticipantLeftRoom(data);
  });
};

export const createNewRoom = () => {
  socket.emit("create-room");
};

export const joinRoom = (data) => {
  socket.emit("join-room", data);
};

export const leaveRoom = (data) => {
  socket.emit("leave-room", data);
};

export const signalPeerData = (data) => {
  socket.emit("conn-signal", data);
};
