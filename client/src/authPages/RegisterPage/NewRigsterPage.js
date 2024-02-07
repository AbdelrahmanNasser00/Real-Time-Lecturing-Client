import React, { useState } from "react";

const RegisterPage = () => {
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [code, setCode] = useState("");

  const handleRegisterClick = () => {
    setShowCodeInput(true);
  };

  const handleCodeSubmit = () => {
    // Handle code submission here (e.g., send code to server)
    console.log("Submitted code:", code);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div>
      <h2>Register Page</h2>
      <button onClick={handleRegisterClick}>Register</button>
      {showCodeInput && (
        <div>
          <input
            type="text"
            placeholder="Enter code"
            value={code}
            onChange={handleCodeChange}
          />
          <button onClick={handleCodeSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;