import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginBottom: "10px",
});

const Label = styled("p")({
  color: "#555",
  fontWeight: "600",
  fontSize: "14px",
  marginBottom: "8px",
  textAlign: "left",
});

const Input = styled("input")({
  height: "40px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  color: "#555",
  background: "#f8f8f8",
  margin: 0,
  fontSize: "16px",
  padding: "0 12px",
  transition: "border-color 0.3s ease",

  "&:focus": {
    outline: "none",
    borderColor: "#2196f3",
  },
});

const InputWithLabel = (props) => {
  const { value, setValue, label, type, placeholder } = props;

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={handleValueChange}
        type={type}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default InputWithLabel;
