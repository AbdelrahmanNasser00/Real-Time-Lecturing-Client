import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const FilesListItem = ({ name }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Button
      disabled={false}
      onClick={handleExpand}
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
      }}>
      {!isExpanded && (
        <span className="material-symbols-outlined" style={{ color: "white" }}>
          expand_more
        </span>
      )}
      {isExpanded && (
        <span className="material-symbols-outlined" style={{ color: "white" }}>
          expand_less
        </span>
      )}

      <Typography
        style={{
          marginLeft: "7px",
          fontWeight: 700,
          color: "white",
        }}
        variant="subtitle1"
        align="left">
        {name}
      </Typography>
    </Button>
  );
};

export default FilesListItem;
