import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../UI/css/header.css";
import Navigation from "./Navigation";
const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMobileClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <header>
      <h1>
        <i className="logo-icon"></i>
        <Link to="/" className="logo">
          Realtime Lecturing
        </Link>
      </h1>
      <Navigation isClicked={isClicked} />
      <div className="mobile" onClick={handleMobileClick}>
        <i className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </header>
  );
};

export default Header;
