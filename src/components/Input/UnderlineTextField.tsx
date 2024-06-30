import React from 'react';
import './underlinetextField.css';

export interface InputProps {
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

export const UnderlineTextField = ({
  disabled = false,
  placeholder = '',
  className = 'underline--input',
}: InputProps) => {
  return (
    <input
      disabled={disabled}
      placeholder={placeholder}
      className={className}
      autoComplete={'off'}
    />
  );
};
