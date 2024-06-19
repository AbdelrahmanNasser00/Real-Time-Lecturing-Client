import React from "react";
import LecturesListItem from "./LecturesListItem";
import { useSelector } from "react-redux";

const LecturesList = () => {
  const subjects = useSelector((state) => state.subjects.subjects);
  return (
    <div className="subjectList-container">
      {subjects &&
        subjects.map((subject) => (
          <LecturesListItem
            key={subject.id}
            name={subject.name}
            code={subject.code}
          />
        ))}
    </div>
  );
};

export default LecturesList;
