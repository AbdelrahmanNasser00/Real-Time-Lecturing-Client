import React from "react";
import { useHistory } from "react-router-dom";
import "../../../shared/UI/css/subjectListItem.css";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import {
  setMessagesLoaded,
  setSubjectId,
} from "../../../store/actions/chatActions";
import store from "../../../store/store";

const SubjectsListItem = ({ id, name, code }) => {
  const history = useHistory();

  const handleSubjectClick = () => {
    console.log(id);
    store.dispatch(setSubjectId(id));
    store.dispatch(setMessagesLoaded(false));
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
      <div className="content">
        <h3>
          {name} ({code})
        </h3>
        {renderSubjectContent()}
      </div>
      <KeyboardArrowRightRoundedIcon
        sx={{
          color: "#f27f0c",
          display: "flex",
          alignItems: "center",
          width: "30px",
          height: "30px",
        }}
      />
    </div>
  );
};

export default SubjectsListItem;
