import React from "react";
import StyledInput from "./InputStyles";

interface InputProps {
  placeholder: string;
}

const onSearch = (value: string) => console.log(value);

const Input: React.FC<InputProps> = ({ placeholder }: InputProps) => {
  return (
    <StyledInput placeholder={placeholder} allowClear onSearch={onSearch} />
  );
};

export default Input;
