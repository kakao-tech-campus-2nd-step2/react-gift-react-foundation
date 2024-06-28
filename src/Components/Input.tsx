import React, { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type InputSize = "small" | "medium" | "large" | "responsive";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  invalid?: boolean;
  size?: InputSize;
}

const InputStyled = styled.input<{ size?: InputSize; invalid?: boolean }>`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: #e9ecef;
      cursor: not-allowed;
    `}

  ${(props) =>
    props.invalid &&
    css`
      border-color: #dc3545;
      &:focus {
        box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);
      }
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      padding: 5px;
      font-size: 12px;
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      padding: 10px;
      font-size: 16px;
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      padding: 15px;
      font-size: 20px;
    `}

  ${(props) =>
    props.size === "responsive" &&
    css`
      @media (max-width: 768px) {
        padding: 5px;
        font-size: 12px;
      }
      @media (min-width: 769px) and (max-width: 1024px) {
        padding: 10px;
        font-size: 16px;
      }
      @media (min-width: 1025px) {
        padding: 15px;
        font-size: 20px;
      }
    `}
`;

const Input: React.FC<InputProps> = ({
  size = "medium",
  invalid = false,
  disabled,
  ...props
}) => {
  return (
    <InputStyled size={size} invalid={invalid} disabled={disabled} {...props} />
  );
};

export default Input;
