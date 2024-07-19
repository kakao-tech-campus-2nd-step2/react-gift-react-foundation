/* eslint-disable react/jsx-props-no-spreading */
/** @jsxImportSource @emotion/react */

import "@styles/input.css";

type InputProps = {
  disabled?: boolean;
  invalid?: boolean;
  Size: "sm" | "md" | "lg" | "responsive";
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ disabled, invalid, Size, ...rest }: InputProps) {
  return <input disabled={disabled} className={`input ${invalid && "input--invalid "}input--${Size}`} {...rest} />;
}

Input.defaultProps = {
  disabled: false,
  invalid: false,
};

export default Input;
