import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api";
import { openAlertMessage } from "./alertSlice";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userDetails: null,
    error: null,
    loading: false,
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.setUserDetails = action.payload;
    },
    setUnverifiedUserDetails: (state, action) => {
      state.setVerifiedUserDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetails = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const login = createAsyncThunk(
  "auth/login",
  async ({ userDetails, history }, { dispatch }) => {
    const response = await api.login(userDetails);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));

      history.push("/dashboard");
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userDetails, { dispatch }) => {
    const response = await api.register(userDetails);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("unverifiedUser", JSON.stringify(userDetails));
      console.log("register action", localStorage.getItem("unverifiedUser"));
      dispatch(setVerifiedUserDetails(userDetails));
    }
  }
);

export const verify = createAsyncThunk(
  "auth/verify",
  async ({ userDetails, history }, { dispatch }) => {
    const response = await api.verify(userDetails);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      history.push("/dashboard");
    }
  }
);

export const { setUserDetails, setVerifiedUserDetails } = authSlice.actions;

export default authSlice.reducer;
