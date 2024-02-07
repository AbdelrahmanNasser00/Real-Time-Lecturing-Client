import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import "../../style.css";
import { connect, useSelector } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
// import { verifyCode } from "../../store/actions/authActions";
import * as api from "../../api";

const VerificationPage = ({ verifyCode }) => {
  const [verificationCode, setverificationCode] = useState("");
  const history = useHistory();
  const location = useLocation();

  console.log(location);
  // const userDetails = location.state ? location.state.userDetails : null;
  // const mail = userDetails.mail;

  const temp = localStorage.getItem("usermail");
  console.log(temp);

  // const userDetails = localStorage.getItem("user");
  // const userDetails = useSelector((state) => state.userDetails);

  // console.log(userDetails);
  // console.log(verificationCode);
  // console.log(mail);

  const otpInputStyle = {
    width: "40px",
    height: "40px",
    fontSize: "20px",
    margin: "5px",
    border: "2px solid",
    borderRadius: "10px",
    textAlign: "center",
    fontWeight: "800",
  };
  const handleClick = async () => {
    temp.verificationCode = verificationCode;
    const response = await api.verification(temp);
  };
  const handleVerifyCode = (e) => {
    const verificationData = {
      verificationCode,
    };
    console.log(verificationData);
    verifyCode(verificationData, history);
  };

  return (
    <div className="card">
      <form className="form">
        <div className="Enter-ver-text">
          <p>Enter verification code</p>
        </div>
        <div className="otp-field">
          <OtpInput
            value={verificationCode}
            onChange={setverificationCode}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props, index) => (
              <input {...props} style={otpInputStyle} />
            )}
          />
        </div>
        <button className="submitBtn" onClick={handleClick}>
          Submit
          <svg
            fill="white"
            viewBox="0 0 448 512"
            height="1em"
            className="arrow">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(VerificationPage);