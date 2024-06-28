import React from 'react'
import './input.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Whether the input is disabled
   */
  disabled?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({ disabled = false, ...props }: InputProps) => {
  return (
    <input
      className={disabled ? 'storybook-input storybook-input--disabled' : 'storybook-input'}
      disabled={disabled}
      {...props}
    />
  )
}
