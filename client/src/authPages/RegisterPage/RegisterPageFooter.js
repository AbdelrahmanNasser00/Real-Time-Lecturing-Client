import React, { useState } from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useHistory } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  return "Username should contains between 3 and 12 characters and password should contains between 6 and 12 character. Also correct e-mail address should provided";
};

const getFormValidMessage = () => {
  return "Press to register!";
};

const RegisterPageFooter = ({
  handleRegister,
  handleVerify,
  isFormValid,
  verificationCode,
  setVerificationCode,
}) => {
  const history = useHistory();
  const [showValidationCode, setShowValidationCode] = useState(false);

  const handleClickRigisterButton = () => {
    setShowValidationCode(!showValidationCode);
    handleRegister();
  };
  const handleClickVerificationButton = () => {
    setShowValidationCode(!showValidationCode);
    handleVerify();
  };
  const handlePushToLoginPage = () => {
    history.push("/login");
  };

  return (
    <>
      {!showValidationCode && (
        <div>
          {" "}
          <Tooltip
            title={
              !isFormValid ? getFormNotValidMessage() : getFormValidMessage()
            }
          >
            <div>
              <CustomPrimaryButton
                label="Register"
                additionalStyles={{ marginTop: "30px" }}
                disabled={!isFormValid}
                onClick={handleClickRigisterButton}
              />
            </div>
          </Tooltip>
          <RedirectInfo
            text=""
            redirectText="Already have an account ?"
            additionalStyles={{ marginTop: "5px" }}
            redirectHandler={handlePushToLoginPage}
          />
        </div>
      )}
      {showValidationCode && (
        <div>
          <InputWithLabel
            value={verificationCode}
            setValue={setVerificationCode}
            label=""
            type="text"
            placeholder="Enter Your Verification Code"
          />
          <CustomPrimaryButton
            label="submit"
            additionalStyles={{ marginTop: "30px" }}
            disabled={false}
            onClick={handleClickVerificationButton}
          />
        </div>
      )}
    </>
  );
};

export default RegisterPageFooter;
