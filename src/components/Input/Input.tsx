import React from 'react';
import { StyledInput } from './Input.styles';

type SizeProps = 'small' | 'large' | 'responsive';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean;
  invalid?: boolean;
  size?: SizeProps;
}

const Input: React.FC<InputProps> = ({ disabled, invalid, size = 'large', ...props }) => (
  <StyledInput disabled={disabled} invalid={invalid} size={size} {...props} />
);

export default Input;
