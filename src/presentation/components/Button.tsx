import React from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/react'

type Theme = 'primary' | 'secondary' | 'danger'
type Size = 'small' | 'medium' | 'responsive'

interface ButtonProps {
  text: string
  theme: Theme
  size: Size
  onClick: () => void
  [key: string]: any
}

const themeStyles: Record<Theme, SerializedStyles> = {
  primary: css`
    background-color: #4caf50;
    color: white;
  `,
  secondary: css`
    background-color: #f44336;
    color: white;
  `,
  danger: css`
    background-color: #f44336;
    color: white;
  `,
}

const sizeStyles: Record<Size, SerializedStyles> = {
  small: css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  `,
  medium: css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
  `,
  responsive: css`
    padding: 0.75rem 1.25rem;
    font-size: 1.25rem;
    @media (max-width: 600px) {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }
  `,
}

const ButtonStyled = styled.button<ButtonProps>`
  border: 1px solid;
  cursor: pointer;
  ${(props: ButtonProps) => themeStyles[props.theme]};
  ${(props: ButtonProps) => sizeStyles[props.size]};
`

const Button = ({ text, theme = 'primary', size = 'medium', onClick, ...props }: ButtonProps) => {
  return (
    <ButtonStyled text="??" theme={theme} size={size} onClick={onClick} {...props}>
      {text}
    </ButtonStyled>
  )
}

export default Button
