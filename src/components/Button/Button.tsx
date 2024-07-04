import React from 'react';
import './Button.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'kakao' | 'default';
  size?: 'small' | 'large' | 'responsive';
}

const Button: React.FC<ButtonProps> = ({ children, theme, size, ...rest }) => {
  let buttonClassName = `button ${theme} ${size}`;

  if (size === 'responsive') {
    buttonClassName += ' responsive';
  }
  return (
    <button className={`button ${theme} ${size}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
