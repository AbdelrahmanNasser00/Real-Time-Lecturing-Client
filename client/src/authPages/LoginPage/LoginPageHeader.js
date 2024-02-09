import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h4" sx={{ color: "#f36bab", fontWeight: "700" }}>
        Welcome Back!
      </Typography>
      <Typography sx={{ color: "#b9bbbe" }}>
        We are happy that you are with us!
      </Typography>
    </div>
  );
};

export default LoginPageHeader;
