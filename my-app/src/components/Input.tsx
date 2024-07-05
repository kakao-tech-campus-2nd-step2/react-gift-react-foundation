import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean
  invalid?: boolean
  size?: 'small' | 'medium' | 'large' | 'responsive'
}

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`

const baseInputStyles = css`
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  transition: border-color 0.3s;
  &:focus {
    outline: none;
    border-bottom-color: #40a9ff;
  }
  &.invalid {
    border-bottom-color: #ff4d4f;
  }
  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`

const sizeStyles = {
  small: css`
    font-size: 12px;
    padding: 5px 0;
  `,
  medium: css`
    font-size: 16px;
    padding: 10px 0;
  `,
  large: css`
    font-size: 20px;
    padding: 15px 0;
  `,
  responsive: css`
    font-size: 16px; /* 기본 크기 */
    padding: 10px 0; /* 기본 패딩 */
    @media (max-width: 600px) {
      font-size: 12px;
      padding: 5px 0;
    }
    @media (min-width: 601px) and (max-width: 1200px) {
      font-size: 16px;
      padding: 10px 0;
    }
    @media (min-width: 1201px) {
      font-size: 20px;
      padding: 15px 0;
    }
  `,
}

const StyledInput = styled.input<{
  size: InputProps['size']
  invalid: boolean
}>`
  ${baseInputStyles}
  ${({ size }) => size && sizeStyles[size]}
`

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #ccc;
  transition: background-color 0.3s;

  ${StyledInput}:focus + & {
    background-color: #40a9ff;
  }

  ${StyledInput}.invalid + & {
    background-color: #ff4d4f;
  }
`

const Input: React.FC<InputProps> = ({
  disabled = false,
  invalid = false,
  size = 'medium',
  ...props
}) => {
  return (
    <InputContainer>
      <StyledInput
        className={`input ${invalid ? 'invalid' : ''}`}
        disabled={disabled}
        aria-invalid={invalid}
        size={size}
        invalid={invalid}
        {...props}
      />
      <Underline />
    </InputContainer>
  )
}

Input.propTypes = {
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'responsive']),
}

export default Input
