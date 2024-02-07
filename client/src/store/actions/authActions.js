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
    const response = await api.login(userDetails);
    console.log(response);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      history.push("/dashboard");
    }
  };
};

const register = (userDetails) => {
  return async (dispatch) => {
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
    const response = await api.verify(userDetails);
    console.log(response);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;

      localStorage.setItem("user", JSON.stringify(userDetails));
      console.log("verified", userDetails);
      dispatch(setUserDetails(userDetails));
      history.push("/dashboard");
    }
  };
};
