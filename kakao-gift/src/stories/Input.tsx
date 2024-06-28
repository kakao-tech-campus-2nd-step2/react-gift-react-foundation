import React from 'react'
import './input.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Whether the input is disabled
   */
  disabled?: boolean
  /**
   * Whether the input value is invalid
   */
  invalid?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({ disabled = false, invalid = false, ...props }: InputProps) => {
  const className = [
    'storybook-input',
    disabled ? 'storybook-input--disabled' : '',
    invalid ? 'storybook-input--invalid' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return <input className={className} disabled={disabled} {...props} />
}
