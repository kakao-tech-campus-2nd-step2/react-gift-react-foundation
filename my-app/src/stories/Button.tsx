import React from 'react';
import './button.css';

interface ButtonProps {
  theme?: 'primary' | 'secondary';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  theme = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const themeClass = `storybook-button--${theme}`;

  return (
    <button
      type="button"
      className={`storybook-button ${themeClass}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
