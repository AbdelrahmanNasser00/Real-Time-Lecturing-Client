import React from "react";
import Button from "@mui/material/Button";
import Avatar from "../../../shared/components/Avatar";
import Typography from "@mui/material/Typography";
import OnlineIndicator from "./OnlineIndicator";

const FriendsListItem = ({ name }) => {
  return (
    <Button
      disabled={false}
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
        position: "relative",
      }}
    >
      {/* <Avatar username={username} /> */}
      <Typography
        style={{
          marginLeft: "7px",
          fontWeight: 700,
          color: "white",
        }}
        variant="subtitle1"
        align="left"
      >
        {name}
      </Typography>
      {/* {isOnline && <OnlineIndicator />} */}
    </Button>
  );
};

export default FriendsListItem;
