import React from 'react';
import { css } from '@emotion/react';

export interface ButtonProps {
  size: 'small' | 'medium' | 'large' | 'responsive';
  theme: 'primary' | 'secondary' | 'kakao';
  onClick: () => void;
}

// eslint-disable-next-line react/function-component-definition
const Button: React.FC<ButtonProps> = ({ size, theme, onClick }) => {
  const buttonStyles = css`
    display: inline-block;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;

    &.btn-small {
      font-size: 0.875rem;
      padding: 0.375rem 0.75rem;
    }

    &.btn-medium {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }

    &.btn-large {
      font-size: 1.125rem;
      padding: 0.625rem 1.25rem;
    }

    &.btn-responsive {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      width: 100%;
    }

    &.btn-primary {
      background-color: #007bff;
      color: #fff;
    }

    &.btn-secondary {
      background-color: #6c757d;
      color: #fff;
    }

    &.btn-kakao {
      background-color: #fee500;
      color: #3c1e1e;
    }
  `;

  return (
    <button type="button" className={`btn ${buttonStyles} btn-${theme} btn-${size}`} onClick={onClick}>
      Button
    </button>
  );
};

export default Button;
