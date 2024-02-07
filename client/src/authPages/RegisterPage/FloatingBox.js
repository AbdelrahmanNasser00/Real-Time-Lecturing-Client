import React from "react";
import AuthBox from "../../shared/components/AuthBox";
const FloatingBox = ({ handleVerification }) => {
  return (
    <AuthBox>
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Verification Code"
        type="text"
        placeholder="Enter your code"
      />
      <CustomPrimaryButton
        label="submit"
        additionalStyles={{ marginTop: "30px" }}
        onClick={handleVerification}
      />
    </AuthBox>
  );
};

export default FloatingBox;
