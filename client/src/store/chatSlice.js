import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    setMessages: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setMessages } = chatSlice.actions;
export default chatSlice.reducer;
