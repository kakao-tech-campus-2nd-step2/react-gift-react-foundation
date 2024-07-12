import { css } from "@emotion/css";
import React, { InputHTMLAttributes } from "react";

const inputSizes = {
  small: "5px 10px",
  medium: "10px 15px",
  large: "15px 20px",
  responsive: "1vw 1vh",
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  inputSize: "small" | "medium" | "large" | "responsive";
}

export default function Input({
  disabled,
  invalid,
  inputSize,
  ...props
}: Readonly<InputProps>) {
  return (
    <input
      type="text"
      disabled={disabled}
      className={css({
        padding: inputSizes[inputSize],
        border: "1px solid",
        borderColor: invalid ? "red" : "black",
        backgroundColor: disabled ? "lightgray" : "white",
        borderRadius: 4,
      })}
      {...props}
    />
  );
}
