import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary';
  size?: 'large' | 'medium' | 'small' | 'responsive';
}

const StyledButton = styled.button<ButtonProps>`
  padding: ${({ size }) => (size === 'large' ? '20px' : size === 'small' ? '10px' : '15px')};
  font-size: ${({ size }) => (size === 'large' ? '20px' : size === 'small' ? '14px' : '16px')};
  background-color: ${({ theme }) => (theme === 'secondary' ? 'grey' : 'blue')};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:disabled {
    background-color: lightgrey;
    cursor: not-allowed;
  }

  ${({ size }) =>
    size === 'responsive' &&
    css`
      @media (max-width: 768px) {
        padding: 10px;
        font-size: 14px;
      }
      @media (min-width: 769px) and (max-width: 1200px) {
        padding: 15px;
        font-size: 16px;
      }
      @media (min-width: 1201px) {
        padding: 20px;
        font-size: 20px;
      }
    `}
`;

const Button: React.FC<ButtonProps> = ({
  theme = 'primary',
  size = 'medium',
  children,
  ...props
}) => (
  <StyledButton theme={theme} size={size} {...props}>
    {children}
  </StyledButton>
);

export default Button;
