import io from "socket.io-client";
import * as roomHandler from "./roomHandler";
import * as webRTCHandler from "./webRTCHandler";
import { socketOpen, socketClose } from "../store/socketSlice";
import { setSubjects } from "../store/subjectsSlice";
import { setMessages } from "../store/chatSlice";

let socket = null;

export const connectWithSocketServer = (userDetails, dispatch) => {
  const jwtToken = userDetails.token;
  console.log(`jwtToken ${jwtToken}`);
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
    dispatch(socketOpen());
  });

  socket.on("subjects-list", (data) => {
    const { subjects } = data;
    dispatch(setSubjects(subjects));
  });

  socket.on("create-room", (data) => {
    console.log("Room details: ", data);
    dispatch(roomHandler.newRoomCreated(data));
  });

  socket.on("active-rooms", (data) => {
    dispatch(roomHandler.updateActiveRooms(data));
  });

  socket.on("conn-prepare", (data) => {
    const { connUserSocketId } = data;
    dispatch(webRTCHandler.prepareNewPeerConnection(connUserSocketId, false));
    socket.emit("initialze-connection", { connUserSocketId: connUserSocketId });
  });

  socket.on("initialze-connection", (data) => {
    const { connUserSocketId } = data;
    dispatch(webRTCHandler.prepareNewPeerConnection(connUserSocketId, true));
  });

  socket.on("conn-signal", (data) => {
    dispatch(webRTCHandler.handleSignalingData(data));
  });

  socket.on("room-participant-left", (data) => {
    console.log("user left room");
    dispatch(webRTCHandler.handleParticipantLeftRoom(data));
  });

  socket.on("receive-message", (data) => {
    dispatch(setMessages(data));
  });

  socket.on("load-messages", (messages) => {
    messages.forEach((message) => {
      dispatch(setMessages(message));
    });
  });

  socket.on("disconnect", () => {
    dispatch(socketClose());
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

export const sendMessage = (data) => {
  console.log(data);
  socket.emit("send-message", data);
};
