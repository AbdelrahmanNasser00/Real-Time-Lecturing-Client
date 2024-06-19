import {
  setOpenRoom,
  setRoomDetails,
  setActiveRooms,
  setLocalStreamId,
  setRemoteStreams,
  setScreenSharingStream,
} from "../store/roomSlice";
import * as socketConnection from "./socketConnection";
import * as webRTCHandler from "./webRTCHandler";

export const createNewRoom = (subjectId) => async (dispatch) => {
  const successCallBackFunction = () => {
    dispatch(setOpenRoom(true, true));
    // dispatch(socketConnection.createNewRoom(subjectId));
    socketConnection.createNewRoom(subjectId);
  };

  await dispatch(webRTCHandler.getLocalStreamPreview(successCallBackFunction));
};

export const newRoomCreated = (data) => async (dispatch) => {
  const { roomDetails } = data;
  dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRooms = (data) => (dispatch, getState) => {
  const { activeRooms } = data;

  // const friends = store.getState().friends.friends;
  const rooms = [];

  // const userId = store.getState().auth.userDetails?._id;
  const userName = getState().auth.userDetails?.username;

  activeRooms.forEach((room) => {
    rooms.push({ ...room, creatorUsername: userName });
  });

  dispatch(setActiveRooms(rooms));
};

export const joinRoom = (roomId) => async (dispatch) => {
  const successCallBackFunction = () => {
    dispatch(setRoomDetails({ roomId }));
    dispatch(setOpenRoom(false, true));
    socketConnection.joinRoom({ roomId });
  };
  await dispatch(webRTCHandler.getLocalStreamPreview(successCallBackFunction));
};

export const leaveRoom = () => (dispatch, getState) => {
  const roomId = getState().room.roomDetails.roomId;

  const localStream = getState().room.localStream;
  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    dispatch(setLocalStreamId(null));
  }

  const screenSharingStream = getState().room.screenSharingStream;
  if (screenSharingStream) {
    screenSharingStream.getTracks().forEach((track) => track.stop());
    setScreenSharingStream(null);
  }

  dispatch(setRemoteStreams([]));
  webRTCHandler.closeAllConnections();

  socketConnection.leaveRoom({ roomId });
  dispatch(setRoomDetails(null));
  dispatch(setOpenRoom(false, false));
};
