import React from "react";
import { Typography } from "@mui/material";

const RegisterPageHeader = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h3" sx={{ color: "#f36bab", fontWeight: "700" }}>
        Welcome
      </Typography>
      <Typography sx={{ color: "#b9bbbe" }}>Let's Sign Up</Typography>
    </div>
  );
};

export default RegisterPageHeader;
