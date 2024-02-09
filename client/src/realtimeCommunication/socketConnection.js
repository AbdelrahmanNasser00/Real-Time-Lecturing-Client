import io from "socket.io-client";
import { setSubjects } from "../store/actions/subjectsActions";
import store from "../store/store";
import * as roomHandler from "./roomHandler";
import * as webRTCHandler from "./webRTCHandler";
import { socketOpen, socketClose } from "../store/actions/socketActions";
let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;
  // socket = io("https://realtime-lecturing-api.onrender.com", {
  //   auth: {
  //     token: jwtToken,
  //   },
  // });
  socket = io("http://localhost:8080", {
    auth: {
      token: jwtToken,
    },
  });

  socket.on("connect", () => {
    console.log("succesfully connected with socket.io server");
    console.log(socket.id);
    store.dispatch(socketOpen());
  });

  socket.on("subjects-list", (data) => {
    console.log("subjects came");
    const { subjects } = data;
    store.dispatch(setSubjects(subjects));
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

  socket.on("disconnect", () => {
    store.dispatch(socketClose());
  });
};

export const createNewRoom = (data) => {
  socket.emit("create-room", data);
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
