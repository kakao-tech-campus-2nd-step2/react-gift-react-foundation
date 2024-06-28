import React from 'react';
import styled from '@emotion/styled';
import { Size, disabledStyle, invalidStyle} from '../styles/InputStyle';

type InputStyleProps = {
  inputsize: 'small' | 'medium' | 'large' | 'responsive';
  disabled?: boolean;
  invalid?: boolean;
};

const InputStyle = styled.input<InputStyleProps>`
  border-radius: 5px;
  ${(props) => Size[props.inputsize]}
  ${(props) => props.disabled && disabledStyle}
  ${(props) => props.invalid && invalidStyle}
`;

interface InputProps extends InputStyleProps, React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ inputsize, disabled, invalid, ...props }:InputProps) => (
  <InputStyle inputsize={inputsize} disabled={disabled} invalid={invalid} {...props} />
);

Input.defaultProps = {
  inputsize: 'medium',
  disabled: false,
  invalid: false,
};

export default Input;