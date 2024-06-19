import { createSlice } from "@reduxjs/toolkit";

export const socketSlice = createSlice({
  name: "socket",
  initialState: {
    socketOpen: false,
  },
  reducers: {
    socketOpen: (state, action) => {
      state.socketOpen = true;
    },
    socketClose: (state, action) => {
      state.socketOpen = false;
    },
  },
});

export const { socketOpen, socketClose } = socketSlice.actions;

export default socketSlice.reducer;
