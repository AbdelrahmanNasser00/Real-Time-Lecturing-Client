import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import Header from "../../shared/components/Header";
import { validateLoginForm } from "../../shared/utils/validators";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../store/authSlice";
import BackGroundImage from "../../shared/UI/imgs/BACKGROUND.png";
import "../../shared/UI/css/login.css";

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (userDetails) {
  //     history.push("/dashboard");
  //   }
  // }, [userDetails, history]);

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
    dispatch(login({ userDetails, history }));
  };

  return (
    <>
      <Header />
      <div className="container-login">
        <div className="login-image-container">
          <img src={BackGroundImage} alt="login pic" />
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

export default LoginPage;
