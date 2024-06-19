import React from "react";
import "../../shared/UI/css/lectures.css";
import LecturesList from "./LecturesList/LecturesList";

const Lectures = () => {
  return (
    <div className="lectures-container">
      <h2 className="lectures-h1">Lectures</h2>
      <LecturesList />
    </div>
  );
};

export default Lectures;
