import io from "socket.io-client";
import { setSubjects } from "../store/actions/subjectsActions";
import {
  setPendingFriendsInvitations,
  setFriends,
  setOnlineUsers,
} from "../store/actions/friendsActions";
import store from "../store/store";
import * as roomHandler from "./roomHandler";
import * as webRTCHandler from "./webRTCHandler";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  console.log(userDetails);
  const jwtToken = userDetails.token;
  console.log("jwtTokec: ", jwtToken);
  console.log("connecting...");
  socket = io("http://localhost:8080", {
    auth: {
      token: jwtToken,
    },
  });

  socket.on("connect", () => {
    console.log("succesfully connected with socket.io server");
    console.log(socket.id);
  });

  socket.on("friends-invitations", (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });

  // socket.on("friends-list", (data) => {
  //   console.log("subjects came");
  //   store.dispatch(setSubjects(data));
  //   // store.dispatch(setFriends(data));
  // });

  socket.on("subjects-list", (data) => {
    console.log("subjects came");
    store.dispatch(setSubjects(data));
  });

  socket.on("online-users", (data) => {
    const { onlineUsers } = data;
    // store.dispatch(setOnlineUsers(onlineUsers));
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

  socket.on("3loosh", (data) => {
    console.log("3loosh");
    console.log(data);
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
