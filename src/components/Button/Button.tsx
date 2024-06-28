import React from 'react';
import 'components/Button/button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  theme?: string;
  size?: 'small' | 'medium' | 'large' | 'responsive';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  theme = 'kakao',
  label,
  ...props
}: ButtonProps) => {
  const firstMeetBorder = primary ? 'first' : '';
  return (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        theme,
        firstMeetBorder,
      ].join(' ')}
      // className={[
      //   styles.storybookButton,
      //   styles[`button--${size}`],
      //   styles[theme],
      //   styles[firstMeetBorder],
      // ].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
