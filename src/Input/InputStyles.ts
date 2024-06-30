import styled, { css } from 'styled-components'
import { InputProps } from './Input'

const borderColor = '#cccccc'

export const StyledInput = styled.input<InputProps>`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${borderColor};
  font-size: 16px;
  width: 100%;

  ${({ size }) =>
    size &&
    css`
      font-size: ${size}px;
      padding: ${size / 2}px;
    `}

  ${({ invalid }) =>
    invalid &&
    css`
      border-color: red;
    `}

  &:disabled {
    background-color: #f5f5f5;
    border-color: #ddd;
  }
`
