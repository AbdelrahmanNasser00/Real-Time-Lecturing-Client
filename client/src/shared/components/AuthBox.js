import React from "react";
import Box from "@mui/material/Box";
import "../UI/css/login.css";

const AuthBox = (props) => {
  return (
    <div className="AuthBox">
      <Box
        sx={{
          width: 400,
          maxWidth: "90%",
          bgcolor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
          alignItems: "center",
          boxSizing: "border-box",
        }}>
        {props.children}
      </Box>
    </div>
  );
};

export default AuthBox;
