import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * true : 활성화느낌 / false : 비활성화느낌
   */
  theme?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large' | 'responsive';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  theme = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = theme ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="submit"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
