import { ButtonHTMLAttributes } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: "kakao" | "outline" | "black" | "lightGray" | "darkGray";
  size: "large" | "small" | "responsive";
  label?: string;
}

const themeStyles = {
  kakao: css`
    background-color: yellow;
    color: black;
  `,
  outline: css`
    background-color: transparent;
    outline: 1px solid lightgray;
    color: black;
  `,
  black: css`
    background-color: black;
    color: white;
  `,
  lightGray: css`
    background-color: lightgray;
    color: black;
  `,
  darkGray: css`
    background-color: darkgray;
    color: black;
  `,
};

const sizeStyles = {
  small: css`
    height: 40px;
  `,
  large: css`
    height: 60px;
  `,
  responsive: css`
    @media (max-width: 600px) {
      height: 40px;
    }
    @media (min-width: 601px) and (max-width: 1024px) {
      height: 50px;
    }
    @media (min-width: 1025px) {
      height: 60px;
    }
  `,
};

const getThemeStyle = (theme: ButtonProps["theme"]) => themeStyles[theme];
const getSizeStyle = (size: ButtonProps["size"]) => sizeStyles[size];

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width: 120px;
  cursor: pointer;
  ${(props) => getThemeStyle(props.theme)};
  ${(props) => getSizeStyle(props.size)};
`;

const Button = ({
  label,
  size = "responsive",
  theme,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton theme={theme} size={size} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
