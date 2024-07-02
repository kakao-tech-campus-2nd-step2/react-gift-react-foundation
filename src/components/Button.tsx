/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large' | 'responsive';
  backgroundColor?: string;
  label: string;
}

const buttonStyles = (primary: boolean, size: string, backgroundColor?: string) => css`
  background-color: ${backgroundColor ? backgroundColor : primary ? 'blue' : 'gray'};
  color: white;
  border: none;
  padding: ${size === 'small' ? '5px 10px' : size === 'medium' ? '10px 15px' : '15px 20px'};
  cursor: pointer;

  ${size === 'responsive' && `
    @media (max-width: 600px) {
      padding: 5px 10px;
    }
    @media (min-width: 601px) and (max-width: 1200px) {
      padding: 10px 15px;
    }
    @media (min-width: 1201px) {
      padding: 15px 20px;
    }
  `}
`;

export const Button: React.FC<ButtonProps> = ({ primary = false, size = 'medium', backgroundColor, label, ...props }) => {
  return (
    <button css={buttonStyles(primary, size, backgroundColor)} {...props}>
      {label}
    </button>
  );
};
