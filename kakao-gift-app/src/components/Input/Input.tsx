import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean;
  invalid?: boolean;
  size?: 'large' | 'medium' | 'small' | 'responsive';
}

const StyledInput = styled.input<InputProps>`
  padding: ${({ size }) => (size === 'large' ? '18px' : size === 'small' ? '10px' : '14px')};
  font-size: ${({ size }) => (size === 'large' ? '18px' : size === 'small' ? '14px' : '16px')};
  border: 1px solid ${({ invalid }) => (invalid ? 'red' : '#ced4da')};
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ invalid }) => (invalid ? 'darkred' : '#80bdff')};
    outline: none;
  }

  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }

  ${({ size }) =>
    size === 'responsive' &&
    css`
      @media (max-width: 768px) {
        padding: 10px;
        font-size: 14px;
      }
      @media (min-width: 769px) and (max-width: 1200px) {
        padding: 14px;
        font-size: 16px;
      }
      @media (min-width: 1201px) {
        padding: 18px;
        font-size: 18px;
      }
    `}
`;

const Input: React.FC<InputProps> = ({ size = 'medium', invalid = false, ...props }) => (
  <StyledInput size={size} invalid={invalid} {...props} />
);

Input.propTypes = {
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'medium', 'small', 'responsive']),
};

export default Input;
