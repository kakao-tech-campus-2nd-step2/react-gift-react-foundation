import React from 'react';
import styled from '@emotion/styled';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean;
  invalid?: boolean;
  elementSize?: 'small' | 'medium' | 'large' | 'responsive';
  placeholder?: string;
}

const getSizeStyles = (size: 'small' | 'medium' | 'large' | 'responsive') => {
  switch (size) {
    case 'small':
      return `
        font-size: 12px;
        padding: 8px;
      `;
    case 'medium':
      return `
        font-size: 14px;
        padding: 10px;
      `;
    case 'large':
      return `
        font-size: 16px;
        padding: 12px;
      `;
    case 'responsive':
      return `
        width: 100%;
        font-size: 14px;
        padding: 10px;
        @media (max-width: 600px) {
          font-size: 12px;
          padding: 8px;
        }
      `;
    default:
      return `
        font-size: 14px;
        padding: 10px;
      `;
  }
};

const getInvalidStyles = (invalid?: boolean) => {
  return invalid ? 'border-bottom: 2px solid red;' : 'border-bottom: 2px solid #ccc;';
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input<{ invalid?: boolean; elementSize: 'small' | 'medium' | 'large' | 'responsive' }>`
  ${(props) => getSizeStyles(props.elementSize)}
  background: transparent;
  border: none;
  outline: none;
  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;

const Placeholder = styled.label`
  color: #aaa;
  font-size: 14px;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  transition: 0.2s ease all;
  padding: 10px; /* Adjust padding as needed */
`;

const Underline = styled.div<{ invalid?: boolean }>`
  width: 100%;
  ${(props) => getInvalidStyles(props.invalid)}
  position: absolute;
  bottom: 0;
`;

const Input: React.FC<InputProps> = ({ disabled = false, invalid = false, elementSize = 'medium', placeholder = 'placeholder', ...props }) => {
  return (
    <InputContainer>
      <Placeholder>{placeholder}</Placeholder>
      <StyledInput disabled={disabled} invalid={invalid} elementSize={elementSize} {...props} />
      <Underline invalid={invalid} />
    </InputContainer>
  );
};

export default Input;
