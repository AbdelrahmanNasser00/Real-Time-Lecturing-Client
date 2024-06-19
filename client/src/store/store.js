import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./alertSlice";
import authSlice from "./authSlice";
import socketSlice from "./socketSlice";
import roomSlice from "./roomSlice";
import subjectsSlice from "./subjectsSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    alert: alertSlice,
    socket: socketSlice,
    room: roomSlice,
    subjects: subjectsSlice,
    chat: chatSlice,
  },
});

export default store;
