import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "../UI/css/navigator.css";

const Navigator = () => {
  const location = useLocation();
  const history = useHistory();
  const [messagesClicked, setMessagesClicked] = useState(false);

  const handleDashboardClick = () => {
    // Navigate to the Dashboard page
    history.push("/dashboard");
    // Reset messagesClicked to false when Dashboard is clicked
    setMessagesClicked(false);
  };

  const handleMessagesClick = () => {
    // Navigate to the Messages page
    history.push("/messages");
    // Set messagesClicked to true when Messages is clicked
    setMessagesClicked(true);
  };

  return (
    <div className="Navigator-container">
      <div className="header"></div>
      <div
        className={`dashboard ${
          location.pathname === "/dashboard" && "active"
        }`}
        onClick={handleDashboardClick}>
        <span className="material-symbols-outlined" style={{ margin: "5px" }}>
          grid_view
        </span>
        <span
          className={`dashboard-btn ${
            location.pathname === "/dashboard" && "active"
          }`}>
          Dashboard
        </span>
      </div>
      <div
        className={`messages ${
          (location.pathname === "/messages" || messagesClicked) && "active"
        }`}
        onClick={handleMessagesClick}>
        <span className="material-symbols-outlined" style={{ margin: "5px" }}>
          chat
        </span>
        <span
          className={`messages-btn ${
            (location.pathname === "/messages" || messagesClicked) && "active"
          }`}>
          Messages
        </span>
      </div>
    </div>
  );
};

export default Navigator;
