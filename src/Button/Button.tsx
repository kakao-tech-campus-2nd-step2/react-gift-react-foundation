// src/Button/Button.tsx
import React from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  theme?: 'primary' | 'secondary' | 'danger';
}

const ButtonStyled = styled.button<{ themeType: string }>`
  padding: 10px 20px;
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
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  theme = 'primary',
  ...props
}) => {
  return (
    <ButtonStyled themeType={theme} {...props}>
      {label}
    </ButtonStyled>
  );
};
