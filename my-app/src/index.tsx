import React from 'react';

interface InputProps {
  disabled?: boolean;
  invalid?: boolean;
  size?: 'small' | 'medium' | 'large' | 'responsive';
}

const Input: React.FC<InputProps> = ({
  disabled = false,
  size = 'medium',
  ...props
}: InputProps) => {
  const sizeClass = size === 'responsive' ? 'storybook-input--responsive' : `storybook-input--${size}`;
  
  return (
    <input
      className={`storybook-input ${sizeClass}`}
      disabled={disabled}
      {...props}
    />
  );
};

export default Input;