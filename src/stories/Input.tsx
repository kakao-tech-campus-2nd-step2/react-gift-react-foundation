import React, { InputHTMLAttributes } from 'react';
import './input.css';

// eslint-disable-next-line no-undef
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  invalid?: boolean;
  inputSize?: 'small' | 'medium' | 'large' | 'responsive';
}

const Input: React.FC<InputProps> = ({
  disabled,
  invalid,
  inputSize,
  ...props
}) => {
  const classNames = [
    'input',
    inputSize,
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
