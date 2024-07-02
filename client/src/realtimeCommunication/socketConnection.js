import io from "socket.io-client";
import { setSubjects } from "../store/actions/subjectsActions";
import store from "../store/store";
import * as roomHandler from "./roomHandler";
import * as webRTCHandler from "./webRTCHandler";
import { socketOpen, socketClose } from "../store/actions/socketActions";
import { setMessages, setNewMessage } from "../store/actions/chatActions";
let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;
  console.log(`jwtToken ${jwtToken}`);
  socket = io("https://realtime-lecturing-api.onrender.com", {
    auth: {
      token: jwtToken,
    },
  });
  // socket = io("http://localhost:8080", {
  //   auth: {
  //     token: jwtToken,
  //   },
  // });

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
    console.log("create-room event came", data);
    roomHandler.newRoomCreated(data);
  });

  socket.on("active-rooms", (data) => {
    console.log("acitve room event came", data);
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

  socket.on("receive-message", (data) => {
    console.log(data);
    store.dispatch(setNewMessage(data));
  });

  socket.on("load-messages", (data) => {
    store.dispatch(setMessages(data));
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

export const sendMessage = (data) => {
  socket.emit("send-message", data);
};

export const loadMessages = (data) => {
  console.log(data);
  socket.emit("load-messages", data);
};
