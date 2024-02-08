import React from "react";
import { Typography } from "@mui/material";

const Title = ({ title }) => {
  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        color: "#8e9297",
        fontSize: "25px",
        marginTop: "10px",
      }}
    >
      {title}
    </Typography>
  );
};

export default Title;
