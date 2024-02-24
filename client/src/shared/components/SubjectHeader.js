import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../UI/css/home.css";

const SubjectHeader = ({ isUserInRoom, subject, setMobileSidebarWidth }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMobileClick = () => {
    setIsClicked(!isClicked);
    if (setMobileSidebarWidth) {
      setMobileSidebarWidth(isClicked ? 0 : 80);
    }
  };

  return (
    <header>
      <h1>
        <i className="logo-icon"></i>
        <Link to="/" className="logo">
          Realtime Lecturing
        </Link>
      </h1>
      <div className="mobile" onClick={handleMobileClick}>
        <i className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </header>
  );
};

export default SubjectHeader;
