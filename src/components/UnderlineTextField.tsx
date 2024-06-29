import React from "react";
import styled from "@emotion/styled";

interface InputProps {
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  size?: undefined;
}

const StyledInput = styled.input<InputProps>`
  border: none;
  border-bottom: 1px solid #d3d3d3;
  width: 100%;
  padding: 10px 0;
  outline: none;
  font-size: 16px;

  &:focus {
    border-bottom-color: black;
  }

  ${({ invalid }) => invalid && `border-bottom-color: red;`}

  ${({ disabled }) =>
    disabled &&
    `
      background-color: #f0f0f0;
      cursor: not-allowed;
    `}
`;

const Input: React.FC<InputProps> = ({ disabled, invalid, ...rest }) => {
  return <StyledInput disabled={disabled} invalid={invalid} {...rest} />;
};

export default Input;
