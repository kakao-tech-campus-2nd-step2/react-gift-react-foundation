import React, { InputHTMLAttributes } from 'react';
import './input.css';

// eslint-disable-next-line no-undef
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  invalid?: boolean;
}

const Input: React.FC<InputProps> = ({ disabled, invalid, size, ...props }) => {
  const classNames = [
    'input',
    size,
    disabled ? 'disabled' : '',
    invalid ? 'invalid' : ''
  ].join(' ');

  return (
    <input
      className={classNames}
      disabled={disabled}
      aria-invalid={invalid}
      {...props}
    />
  );
};

export default Input;
