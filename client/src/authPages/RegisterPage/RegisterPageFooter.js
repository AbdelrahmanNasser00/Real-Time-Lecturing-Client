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

  useEffect(() => {
    const handlekeyPress = (e) => {
      if (e.key === "Enter" && isFormValid) {
        handleClickRigisterButton();
      }
    };
    document.addEventListener("keydown", handlekeyPress);

    return () => {
      document.removeEventListener("keydown", handlekeyPress);
    };
  });

  const handleClickRigisterButton = () => {
    setShowValidationCode(!showValidationCode);

    handleRegister();
  };

  const handlePushToLoginPage = () => {
    history.push("/login");
  };

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
