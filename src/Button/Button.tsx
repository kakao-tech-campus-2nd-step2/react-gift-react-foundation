import React from 'react'
import { StyledButton } from './ButtonStyles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large' | 'responsive'
}

const Button: React.FC<ButtonProps> = ({ theme, size, ...props }) => {
  return <StyledButton theme={theme} size={size} {...props} />
}

Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
}

export default Button
