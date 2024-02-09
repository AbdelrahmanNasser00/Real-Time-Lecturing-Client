import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";

const SubjectsListItem = ({ name, code }) => {
  const history = useHistory();

  const handleSubjectClick = () => {
    console.log("subject clicked");
    console.log("code: ", code);
    history.push(`/subject/${code}`);
  };
  return (
    <Button
      disabled={false}
      onClick={handleSubjectClick}
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
    </Button>
  );
};

export default SubjectsListItem;
