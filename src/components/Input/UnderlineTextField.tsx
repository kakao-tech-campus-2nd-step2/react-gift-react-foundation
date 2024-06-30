import React from 'react';
import './underlinetextField.css';

interface InputProps {
  disabled: boolean;
  invalid: boolean;
  size: 'small' | 'medium' | 'large' | 'responsive';
  placeholder?: string;
}

export const UnderlineTextField = ({
  disabled,
  size,
  invalid,
  placeholder = '',
}: InputProps) => {
  return (
    <input
      disabled={disabled}
      placeholder={placeholder}
      className={['underline--input', size, invalid ? 'invalid' : ''].join(' ')}
      autoComplete={'off'}
    />
  );
};
