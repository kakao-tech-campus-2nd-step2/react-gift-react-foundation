import React from "react";
import "./Button.css";

export interface ButtonProps {
  theme: "kakao" | "outline" | "black" | "lightGray" | "darkGray";
  size: "large" | "small" | "responsive";
  label?: string;
  onClick: () => void;
}

const Button = ({
  label,
  size = "responsive",
  theme,
  onClick,
}: ButtonProps) => {
  const buttonClasses = [
    "storybook-button",
    `storybook-button--${size}`,
    theme ? `storybook-button--${theme}` : "",
  ].join(" ");

  return (
    <button type="button" className={buttonClasses} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
