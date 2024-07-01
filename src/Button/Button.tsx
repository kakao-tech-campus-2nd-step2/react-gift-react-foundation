// src/Button/Button.tsx
import React from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  theme?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large' | 'responsive';
}

const ButtonStyled = styled.button<{
  themeType: ButtonProps['theme'];
  sizeType: ButtonProps['size'];
}>`
  border: none;
  border-radius: 5px;
  cursor: pointer;

  ${(props) => themeMapper(props.themeType)}
  ${(props) => sizeMapper(props.sizeType)}
`;

const themeMapper = (theme: ButtonProps['theme']) => {
  switch (theme) {
    case 'primary':
      return css`
        background-color: blue;
        color: white;
      `;
    case 'secondary':
      return css`
        background-color: grey;
        color: white;
      `;
    case 'danger':
      return css`
        background-color: red;
        color: white;
      `;
    default:
      return css``;
  }
};

const sizeMapper = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small':
      return css`
        padding: 5px 10px;
        font-size: 12px;
      `;
    case 'medium':
      return css`
        padding: 10px 20px;
        font-size: 16px;
      `;
    case 'large':
      return css`
        padding: 15px 30px;
        font-size: 20px;
      `;
    case 'responsive':
      return css`
        padding: 10px 20px;
        font-size: 16px;

        @media (max-width: 600px) {
          padding: 5px 10px;
          font-size: 12px;
        }

        @media (max-width: 601px) and (max-width: 1200px) {
          padding: 10px 20px;
          font-zie: 16px;
        }

        @media (min-width: 601px) and (max-width: 1200px) {
          padding: 10px 20px;
          font-size: 16px;
        }

        @media (min-width: 1201px) {
          padding: 15px 30px;
          font-size: 20px;
        }
      `;
    default:
      return css``;
  }
};

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
