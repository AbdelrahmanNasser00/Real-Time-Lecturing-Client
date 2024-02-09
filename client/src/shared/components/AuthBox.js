import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BoxWrapper = styled("div")({
  width: "50%",
  height: "89vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const AuthBox = (props) => {
  return (
    <BoxWrapper>
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
        }}>
        {props.children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
