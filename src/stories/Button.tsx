import React, { ComponentProps } from 'react';
import './button.css';

interface ButtonProps extends ComponentProps<'button'> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large' | 'responsive';
  /**
   * Button contents
   */
  label: string;
  /**
   * Custom theme for the button
   */
  theme?: 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray';
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  theme,
  onClick,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const themeClass = theme ? `storybook-button--${theme}` : '';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(event);
    }
    alert('버튼 클릭');
  };

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, themeClass].join(' ')}
      style={{ backgroundColor }}
      onClick={handleClick}
      {...props}
    >
      {label}
    </button>
  );
};
