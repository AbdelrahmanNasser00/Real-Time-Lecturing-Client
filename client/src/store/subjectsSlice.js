import { createSlice } from "@reduxjs/toolkit";

const subjectsSlice = createSlice({
  name: "subjects",
  initialState: {
    subjects: [],
  },
  reducers: {
    setSubjects: (state, action) => {
      state.subjects = action.payload;
    },
  },
});

export const { setSubjects } = subjectsSlice.actions;
export default subjectsSlice.reducer;
