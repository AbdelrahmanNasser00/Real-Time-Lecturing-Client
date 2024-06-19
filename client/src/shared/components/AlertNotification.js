import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { closeAlertMessage } from "../../store/alertSlice";

const AlertNotification = () => {
  const { showAlertMessage, alertMessageContent } = useSelector(
    (state) => state.alert
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeAlertMessage());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlertMessage}
      onClose={handleClose}
      autoHideDuration={6000}>
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
};

export default AlertNotification;
