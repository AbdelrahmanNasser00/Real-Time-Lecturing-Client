import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
  SET_UNVERIFIED_USER_DETAILS: "AUTH.SET_UNVERIFIED_USER_DETAILS",
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails) => dispatch(register(userDetails)),
    verify: (userDetails, history) => dispatch(verify(userDetails, history)),
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

const setUnverifiedUserDetails = (userDetails) => {
  return {
    type: authActions.SET_UNVERIFIED_USER_DETAILS,
    userDetails,
  };
};
const login = (userDetails, history) => {
  return async (dispatch) => {
    const Swal = require("sweetalert2");
    if (!navigator.onLine) {
      Swal.fire({
        icon: "error",
        title: "No Internet Connection",
        text: "Please check your internet connection and try again.",
      });
      return;
    }
    const response = await api.login(userDetails);
    if (response.error) {
      Swal.fire({
        icon: "error",
        title: "Invalid email or password",
      });
      return;
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      Swal.fire({
        title: `Welcome Back, ${userDetails.username}!`,
        text: "You login successfully!",
        icon: "success",
      }).then(() => {
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 500);
      });
    }
  };
};

const register = (userDetails) => {
  return async (dispatch) => {
    const Swal = require("sweetalert2");
    if (!navigator.onLine) {
      Swal.fire({
        icon: "error",
        title: "No Internet Connection",
        text: "Please check your internet connection and try again.",
      });
      return;
    }
    const response = await api.register(userDetails);
    console.log(response);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("unverifiedUser", JSON.stringify(userDetails));
      console.log("register actoin", localStorage.getItem("unverifiedUser"));
      dispatch(setUnverifiedUserDetails(userDetails));
    }
  };
};

const verify = (userDetails, history) => {
  return async (dispatch) => {
    const Swal = require("sweetalert2");
    if (!navigator.onLine) {
      Swal.fire({
        icon: "error",
        title: "No Internet Connection",
        text: "Please check your internet connection and try again.",
      });
      return;
    }
    const response = await api.verify(userDetails);
    console.log(response);
    if (response.error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${response?.exception?.response?.data}`,
      });
      return;
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      console.log("verified", userDetails);
      dispatch(setUserDetails(userDetails));
      Swal.fire({
        title: `Success`,
        text: `${userDetails.username}, You have successfully registred!`,
        icon: "success",
      }).then(() => {
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 500);
      });
      history.push("/dashboard");
    }
  };
};
