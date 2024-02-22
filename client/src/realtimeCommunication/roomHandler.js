import store from "../store/store";
import {
  setOpenRoom,
  setRoomDetails,
  setActiveRooms,
  setLocalStream,
  setRemoteStreams,
  setScreenSharingStream,
} from "../store/actions/roomActions";
import * as socketConnection from "./socketConnection";
import * as webRTCHandler from "./webRTCHandler";

export const createNewRoom = (subjectId) => {
  const successCallBackFunction = () => {
    store.dispatch(setOpenRoom(true, true));
    socketConnection.createNewRoom({ subjectId });
  };
  webRTCHandler.getLocalStreamPreview(successCallBackFunction);
};

export const newRoomCreated = (data) => {
  const { roomDetails } = data;
  store.dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRooms = (data) => {
  const { activeRooms } = data;

  // const friends = store.getState().friends.friends;
  const rooms = [];

  const userId = store.getState().auth.userDetails?._id;
  const userName = store.getState().auth.userDetails?.username;

  activeRooms.forEach((room) => {
    rooms.push({ ...room, creatorUsername: userName });

    // const isRoomCreatedByMe = room.roomCreator.userId === userId;

    // if (isRoomCreatedByMe) {
    //   rooms.push({ ...room, creatorUsername: ".." });
    // }
    // else {
    //   friends.forEach((f) => {
    //     if (f.id === room.roomCreator.userId) {
    //       rooms.push({ ...room, creatorUsername: f.username });
    //     }
    //   });
    // }
  });

  store.dispatch(setActiveRooms(rooms));
};

export const joinRoom = (roomId) => {
  const successCallBackFunction = () => {
    store.dispatch(setRoomDetails({ roomId }));
    store.dispatch(setOpenRoom(false, true));
    socketConnection.joinRoom({ roomId });
  };
  webRTCHandler.getLocalStreamPreview(successCallBackFunction);
};

export const leaveRoom = () => {
  const roomId = store.getState().room.roomDetails.roomId;

  const localStream = store.getState().room.localStream;
  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setLocalStream(null));
  }

  const screenSharingStream = store.getState().room.screenSharingStream;
  if (screenSharingStream) {
    screenSharingStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setScreenSharingStream(null));
  }

  store.dispatch(setRemoteStreams([]));
  webRTCHandler.closeAllConnections();

  socketConnection.leaveRoom({ roomId });
  store.dispatch(setRoomDetails(null));
  store.dispatch(setOpenRoom(false, false));
};
