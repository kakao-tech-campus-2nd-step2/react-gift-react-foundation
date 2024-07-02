import { css } from "@emotion/css";
import React, { InputHTMLAttributes } from "react";

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
        padding:
          inputSize === "small"
            ? "5px 10px"
            : inputSize === "medium"
              ? "10px 15px"
              : inputSize === "large"
                ? "15px 20px"
                : inputSize === "responsive"
                  ? "1vw 1vh"
                  : "10px 15px",
        border: "1px solid",
        borderColor: invalid ? "red" : "black",
        backgroundColor: disabled ? "lightgray" : "white",
        borderRadius: 4,
      })}
      {...props}
    />
  );
}
