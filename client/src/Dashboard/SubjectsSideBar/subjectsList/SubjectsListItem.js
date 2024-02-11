import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import "../../../shared/UI/css/subjectListItem.css";
import BackGroundImage from "../../../shared/UI/imgs/student.png";

const SubjectsListItem = ({ name, code }) => {
  const history = useHistory();

  const handleSubjectClick = () => {
    history.push(`/subject/${code}`);
  };

  const renderSubjectContent = () => {
    if (name === "Operating Systems") {
      return (
        <p>
          Learn the basic operating system abstractions, mechanisms and their
          implementations.
        </p>
      );
    } else if (name === "Artificial Intelligence") {
      return (
        <p>
          Intelligence demonstrated by machines, unlike the natural intelligence
          displayed by humans and animals.
        </p>
      );
    } else if (name === "Data Structurs") {
      return (
        <p>
          Learn detailed of engineering to the design development and
          maintenance of software.
        </p>
      );
    }
  };
  const getSubjectColorClass = () => {
    const colorClasses = {
      "Operating Systems": "os-subject",
      "Artificial Intelligence": "ai-subject",
      "Data Structurs": "ds-subject",
    };

    return colorClasses[name] || "default-subject";
  };
  return (
    <div
      className={`subject-container ${getSubjectColorClass()}`}
      onClick={handleSubjectClick}>
      <div className="subject-img-container">
        <img src={BackGroundImage} alt="subject pic" />
      </div>
      <div className="subject-left-half">
        <h4>
          {name} ({code})
        </h4>

        {renderSubjectContent()}
      </div>
    </div>
  );
};

export default SubjectsListItem;
