import React, { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type ButtonTheme = "primary" | "secondary" | "danger";
type ButtonSize = "small" | "medium" | "large" | "responsive";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  size?: ButtonSize;
}

const ButtonStyled = styled.button<ButtonProps>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  ${(props) =>
    props.theme === "primary" &&
    css`
      background-color: #007bff;
      color: white;
      &:hover {
        background-color: #0056b3;
      }
    `}

  ${(props) =>
    props.theme === "secondary" &&
    css`
      background-color: #6c757d;
      color: white;
      &:hover {
        background-color: #545b62;
      }
    `}

  ${(props) =>
    props.theme === "danger" &&
    css`
      background-color: #dc3545;
      color: white;
      &:hover {
        background-color: #bd2130;
      }
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      padding: 5px 10px;
      font-size: 12px;
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      padding: 10px 20px;
      font-size: 16px;
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      padding: 15px 30px;
      font-size: 20px;
    `}

  ${(props) =>
    props.size === "responsive" &&
    css`
      @media (max-width: 768px) {
        padding: 5px 10px;
        font-size: 12px;
      }
      @media (min-width: 769px) and (max-width: 1024px) {
        padding: 10px 20px;
        font-size: 16px;
      }
      @media (min-width: 1025px) {
        padding: 15px 30px;
        font-size: 20px;
      }
    `}
`;

const Button: React.FC<ButtonProps> = ({
  children,
  theme = "primary",
  size = "medium",
  ...props
}) => {
  return (
    <ButtonStyled theme={theme} size={size} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
