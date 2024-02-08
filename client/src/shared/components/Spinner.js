import React from "react";
import { styled } from "@mui/system";

const SpinnerWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
});

const SpinnerIcon = styled("div")({
  border: "4px solid rgba(0, 0, 0, 0.1)",
  borderTop: "4px solid #fff",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  animation: "$spin 1s linear infinite",
  "@keyframes spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
});

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <SpinnerIcon />
    </SpinnerWrapper>
  );
};

export default Spinner;
