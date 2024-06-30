import React from 'react';
import './button.css';

// eslint-disable-next-line no-undef
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  backgroundColor?: string;
  theme?: 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray';
  size?: 'small' | 'medium' | 'large' | 'responsive';
  label: string;
  onClick?: () => void;
}

const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  const sizeClass =
    size === 'responsive'
      ? 'storybook-button--responsive'
      : `storybook-button--${size}`;
  return (
    <button
      type="button"
      className={['storybook-button', sizeClass, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
