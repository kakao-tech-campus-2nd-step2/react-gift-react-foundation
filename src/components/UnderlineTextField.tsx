import React from 'react';
import './UnderlineTextField.css';

export interface UnderlineTextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'small' | 'large' | 'responsive';
  invalid?: boolean;
}

const UnderlineTextField: React.FC<UnderlineTextFieldProps> = ({
  size,
  invalid,
  disabled,
  ...rest
}) => {
  let inputClassName = `underline-textfield ${size}`;

  if (invalid) {
    inputClassName += ' invalid';
  }

  return <input className={inputClassName} disabled={disabled} {...rest} />;
};

export default UnderlineTextField;
