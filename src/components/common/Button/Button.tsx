import React, { ButtonHTMLAttributes } from "react";
import { css } from "@emotion/css";

const themes = {
  primary: "blue",
  warning: "orange",
  danger: "red",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme: "primary" | "warning" | "danger";
  text: string;
};

export default function Button({
  theme,
  text,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      className={css({
        padding: "25px 35px",
        border: "none",
        borderRadius: 4,
        color: "white",
        backgroundColor: theme in themes ? themes[theme] : themes["primary"],
      })}
      {...props}
    >
      {text}
    </button>
  );
}
