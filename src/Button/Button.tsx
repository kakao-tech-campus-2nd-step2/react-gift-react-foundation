// src/Button/Button.tsx
import React from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  theme?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

const ButtonStyled = styled.button<{ themeType: string; sizeType: string }>`
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  ${(props) =>
    props.themeType === 'primary' &&
    css`
      background-color: blue;
      color: white;
    `}
  ${(props) =>
    props.themeType === 'secondary' &&
    css`
      background-color: grey;
      color: white;
    `}
  ${(props) =>
    props.themeType === 'danger' &&
    css`
      background-color: red;
      color: white;
    `}
  
  ${(props) =>
    props.sizeType === 'small' &&
    css`
      padding: 5px 10px;
      font-size: 12px;
    `}
  ${(props) =>
    props.sizeType === 'medium' &&
    css`
      padding: 10px 20px;
      font-size: 16px;
    `}
  ${(props) =>
    props.sizeType === 'large' &&
    css`
      padding: 15px 30px;
      font-size: 20px;
    `}
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  theme = 'primary',
  size = 'medium',
  ...props
}) => {
  return (
    <ButtonStyled themeType={theme} sizeType={size} {...props}>
      {label}
    </ButtonStyled>
  );
};
