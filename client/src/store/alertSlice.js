import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    showAlertMessage: false,
    alertMessageContent: null,
  },
  reducers: {
    openAlertMessage: (state, action) => {
      state.showAlertMessage = true;
      state.alertMessageContent = action.payload;
    },
    closeAlertMessage: (state, action) => {
      state.showAlertMessage = false;
      state.showAlertMessage = null;
    },
  },
});

export const { openAlertMessage, closeAlertMessage } = alertSlice.actions;
export default alertSlice.reducer;
