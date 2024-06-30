import { InputHTMLAttributes } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  customSize?: "small" | "large" | "responsive";
  invalid?: boolean;
}

const customSizeStyles = {
  small: css`
    font-size: 13px;
    padding: 7px 0px;
  `,

  large: css`
    font-size: 18px;
    padding: 12px 0px;
  `,

  responsive: css`
    @media (max-width: 600px) {
      font-size: 13px;
      padding: 7px 0px;
    }
    @media (min-width: 601px) and (max-width: 1024px) {
      font-size: 15px;
      padding: 9px 0px;
    }
    @media (min-width: 1025px) {
      font-size: 18px;
      padding: 12px 0px;
    }
  `,
};

const getcustomSizeStyles = (customSize: InputProps["customSize"]) =>
  customSize ? customSizeStyles[customSize] : "";

const StyledInput = styled.input<InputProps>`
  cursor: pointer;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  border-style: solid;
  min-height: 42px;
  font-size: 15px;
  line-height: 1.5;
  padding: 9px 0px;
  border-width: 0px 0px 1px;
  border-color: rgb(204, 204, 204);
  ${(props) => getcustomSizeStyles(props.customSize)};

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    border-color: rgb(0, 0, 0);
  }

  ${(props) =>
    props.invalid &&
    `
    border-color: red;
  `}
`;

const Input = ({ customSize, invalid, ...rest }: InputProps) => {
  return <StyledInput customSize={customSize} invalid={invalid} {...rest} />;
};

export default Input;
