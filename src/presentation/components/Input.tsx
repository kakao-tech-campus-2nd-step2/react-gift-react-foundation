/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface InputProps {
  label: string
  value: string
  type?: string
  onChange: () => void
  placeholder?: string
  isValid?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}

const inputWrapperStyles = (size: 'small' | 'medium' | 'large') => css`
  margin-bottom: 16px;

  label {
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }

  input {
    padding: ${size === 'small' ? '4px' : size === 'large' ? '12px' : '8px'};
    font-size: ${size === 'small' ? '12px' : size === 'large' ? '20px' : '16px'};
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 4px;
  }

  input.invalid {
    border-color: red;
  }

  input.valid {
    border-color: green;
  }

  input:disabled {
    background-color: #f0f0f0;
  }
`

const InputWrapper = styled.div<{ size: 'small' | 'medium' | 'large' }>`
  ${(props) => inputWrapperStyles(props.size)}
`

const Input = ({
  label,
  value,
  type = 'text',
  onChange,
  placeholder,
  isValid = false,
  disabled = false,
  size = 'medium',
}: InputProps) => {
  return (
    <InputWrapper size={size}>
      {label}
      <input
        type={type}
        value={value}
        onChange={(e) => console.log(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={isValid ? 'valid' : 'invalid'}
      />
    </InputWrapper>
  )
}

export default Input
