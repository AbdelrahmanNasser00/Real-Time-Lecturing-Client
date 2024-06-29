import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useHistory } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { useEffect } from "react";

const getFormNotValidMessage = () => {
  return "Username should contains between 3 and 12 characters and password should contains between 6 and 12 character. Also correct e-mail address should provided";
};

const getFormValidMessage = () => {
  return "Press to register!";
};

const RegisterPageFooter = ({
  handleRegister,
  isFormValid,
  showValidationCode,
  setShowValidationCode,
}) => {
  const history = useHistory();

  const handleClickRigisterButton = () => {
    setShowValidationCode(!showValidationCode);
    handleRegister();
  };

  const handlePushToLoginPage = () => {
    history.push("/login");
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isFormValid && e.key === "Enter") {
        handleClickRigisterButton();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <>
      <div>
        {" "}
        <Tooltip
          title={
            !isFormValid ? getFormNotValidMessage() : getFormValidMessage()
          }>
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
    </>
  );
};

export default RegisterPageFooter;
