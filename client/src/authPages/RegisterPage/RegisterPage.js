import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/utils/validators";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { useHistory } from "react-router-dom";
import VerificationPage from "./VerificationPage";
import Header from "../../shared/components/Header";
import RegisterPageHeader from "./RegisterPageHeader";
import svg from "../../shared/UI/imgs/signup photo.svg";

const RegisterPage = ({ register, verify }) => {
  const history = useHistory();
  const userDetails = localStorage.getItem("user");

  if (userDetails) {
    history.push("./dashboard");
  }
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
  }, [mail, username, password, setIsFormValid]);

  return (
    <>
      <Header />
      <div className="container-login">
        {!showValidationCode && (
          <>
            <div className="login-image-container">
              <img src={svg} alt="register pic" />
            </div>
            <AuthBox>
              <RegisterPageHeader />

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
            </AuthBox>
          </>
        )}
        {showValidationCode && (
          <VerificationPage
            handleVerify={handleVerify}
            verificationCode={verificationCode}
            setVerificationCode={setVerificationCode}
          />
        )}
      </div>
    </>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(RegisterPage);
