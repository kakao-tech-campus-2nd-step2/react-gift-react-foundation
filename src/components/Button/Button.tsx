// Button.tsx

import React from 'react';
import './Button.css';

export type ButtonProps = {
  theme?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large' | 'responsive';
  children: React.ReactNode;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  theme = 'primary',
  size = 'medium',
  children,
  ...props
}) => {
  return (
    <button className={`button ${theme} ${size}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
