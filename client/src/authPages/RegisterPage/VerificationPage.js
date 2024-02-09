import React from "react";
import OtpInput from "react-otp-input";
import "../../shared/UI/css/style.css";
import AuthBox from "../../shared/components/AuthBox";
import BackGroundImage from "../../shared/UI/imgs/BACKGROUND.png";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";

const VerificationPage = ({
  handleVerify,
  verificationCode,
  setVerificationCode,
}) => {
  const otpInputStyle = {
    width: "25px",
    height: "32px",
    fontSize: "20px",
    margin: "5px",
    border: "1px solid",
    borderRadius: "7px",
    textAlign: "center",
    fontWeight: "500",
  };
  const handleClickVerificationButton = (e) => {
    e.preventDefault();
    handleVerify();
  };

  return (
    <>
      <div className="svg-image-container">
        <img src={BackGroundImage} />
      </div>
      <AuthBox>
        <h2 className="verf-h2">Verify your email</h2>
        <p>
          We've sent a verification code to your email address. Please check
          your inbox and enter the code to continue.
        </p>
        <OtpInput
          value={verificationCode}
          onChange={setVerificationCode}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props, index) => (
            <input {...props} style={otpInputStyle} />
          )}
        />
        <CustomPrimaryButton
          label="Continue"
          additionalStyles={{ marginTop: "30px" }}
          onClick={handleClickVerificationButton}
        />
      </AuthBox>
    </>
  );
};

export default VerificationPage;
