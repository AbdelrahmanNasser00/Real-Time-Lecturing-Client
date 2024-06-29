import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import Header from "../../shared/components/Header";
import { validateLoginForm } from "../../shared/utils/validators";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { useHistory } from "react-router-dom";
import background2 from "../../shared/UI/imgs/login photo.svg";
import "../../shared/UI/css/login.css";

const LoginPage = ({ login }) => {
  const history = useHistory();
  const userDetails = localStorage.getItem("user");

  if (userDetails) {
    history.push("./dashboard");
  }
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password]);

  const handleLogin = () => {
    const userDetails = {
      mail,
      password,
    };

    login(userDetails, history);
  };

  return (
    <>
      <Header />
      <div className="container-login">
        <div className="login-image-container">
          <img src={background2} alt="login pic" />
        </div>
        <AuthBox>
          <LoginPageHeader />
          <LoginPageInputs
            mail={mail}
            setMail={setMail}
            password={password}
            setPassword={setPassword}
          />
          <LoginPageFooter
            isFormValid={isFormValid}
            handleLogin={handleLogin}
          />
        </AuthBox>
      </div>
    </>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
