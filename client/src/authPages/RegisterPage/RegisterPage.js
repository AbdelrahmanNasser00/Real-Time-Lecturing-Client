import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import AuthBox from "../../shared/components/AuthBox";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/utils/validators";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { useHistory } from "react-router-dom";
import VerificationPage from "./VerificationPage";

const RegisterPage = ({ register, verify }) => {
  const history = useHistory();

  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [showValidationCode, setShowValidationCode] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    console.log("handle register called");
    const userDetails = {
      mail,
      password,
      username,
    };

    register(userDetails);
  };

  const handleVerify = async () => {
    console.log("handle verify called");

    const userDetailsString = localStorage.getItem("unverifiedUser");
    const userDetails = JSON.parse(userDetailsString);
    userDetails.verificationCode = verificationCode;
    localStorage.setItem("unverifiedUser", JSON.stringify(userDetails));

    verify(userDetails, history);
  };
  useEffect(() => {
    setIsFormValid(
      validateRegisterForm({
        mail,
        username,
        password,
      })
    );
    document.title = `Real Time Lecutring - log in`;
  }, [mail, username, password, setIsFormValid]);

  return (
    <>
      {!showValidationCode && (
        <AuthBox>
          <>
            <Typography variant="h5" sx={{ color: "white " }}>
              Create an account
            </Typography>
            <RegisterPageInputs
              mail={mail}
              setMail={setMail}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
            <RegisterPageFooter
              handleRegister={handleRegister}
              showValidationCode={showValidationCode}
              setShowValidationCode={setShowValidationCode}
              isFormValid={isFormValid}
            />
          </>
        </AuthBox>
      )}
      {showValidationCode && (
        <div className="container">
          <VerificationPage
            handleVerify={handleVerify}
            verificationCode={verificationCode}
            setVerificationCode={setVerificationCode}
          />
        </div>
      )}
    </>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(RegisterPage);