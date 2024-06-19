import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "room",
  initialState: {
    isUserInRoom: false,
    isUserRoomCreator: false,
    roomDetails: null,
    activeRooms: [],
    localStreamId: null,
    remoteStreams: [],
    screenSharingStream: null,
    isScreenSharingActive: false,
    isFullScreen: false,
  },

  reducers: {
    setOpenRoom: (state, action) => {
      state.isUserInRoom = action.payload.isUserInRoom;
      state.isUserRoomCreator = action.payload.isUserRoomCreator;
    },
    setRoomDetails: (state, action) => {
      state.roomDetails = action.payload;
    },
    setActiveRooms: (state, action) => {
      state.activeRooms = action.payload;
    },
    setLocalStreamId: (state, action) => {
      state.localStreamId = action.payload;
    },
    setRemoteStreams: (state, action) => {
      state.remoteStreams = action.payload;
    },
    setScreenShareStream: (state, action) => {
      state.screenSharingStream = action.payload.screenSharingStream;
      state.isScreenSharingActive = action.payload.screenSharingStream
        ? true
        : false;
    },
    toggleFullScreen: (state) => {
      state.isFullScreen = !state.isFullScreen;
    },
  },
});

export const {
  setOpenRoom,
  setRoomDetails,
  setActiveRooms,
  setLocalStreamId,
  setRemoteStreams,
  setScreenSharingStream,
  toggleFullScreen,
} = roomSlice.actions;

export default roomSlice.reducer;
