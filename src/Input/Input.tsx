import React from 'react'
import { StyledInput } from './InputStyles'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: number
  invalid?: boolean
  disabled?: boolean
}

const Input: React.FC<InputProps> = ({ size, invalid, disabled, ...props }) => {
  return <StyledInput size={size} invalid={invalid} disabled={disabled} {...props} />
}

Input.defaultProps = {
  size: undefined,
  invalid: false,
  disabled: false,
}

export default Input
