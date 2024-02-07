import React from "react";

const Subject = ({ location }) => {
  const title = location.state ? location.state.title : "no";
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Subject;
