import React from "react";
import "../shared/UI/css/home.css";
import BackGroundImage from "../shared/UI/imgs/background3.svg";
// import BackGroundImage from "../shared/UI/imgs/student.png";

import Header from "../shared/components/Header";
import { useHistory } from "react-router-dom";
const HomePage = () => {
  const history = useHistory();
  const userDetails = localStorage.getItem("user");

  if (userDetails) {
    history.push("./dashboard");
  }
  const handleGetStartedBtn = () => {
    history.push("/register");
  };
  return (
    <>
      <Header />
      <div className="container-home">
        <div className="home-img-container">
          <img
            src={BackGroundImage}
            alt="home pic"
            className="home-img"
            loading="lazy"></img>
        </div>
        <div className="text">
          <h2 className="home-h2">
            <span className="wel">Welcome</span> to Realtime Lecturing
          </h2>
          <p className="p1">
            Introducing our cutting-edge web page for a revolutionary real-time
            lecturing app! Dive into the future of education with seamless,
            interactive, and dynamic learning experiences. Our thoughtfully
            designed platform facilitates live lectures, fostering a virtual
            classroom environment where educators can engage with students in
            real time.
          </p>
          <button className="startBtn" onClick={handleGetStartedBtn}>
            <div>GET STARTED</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"
                stroke="white"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12.0601H14.17"
                stroke="white"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"
                stroke="white"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
