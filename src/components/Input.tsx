/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react';

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  invalid?: boolean;
  width?: number;
  height?: number;
}
const Input = (props: InputProps) => {
  const {
    value,
    onChange,
    disabled = false,
    placeholder = 'placeholder',
    invalid = false,
    width = 100,
    height = 30,
  } = props;
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      css={css`
        width: ${width}px;
        height: ${height}px;
        padding: 5px;
        border: none;
        ${invalid
          ? 'border-bottom:1px solid red;'
          : 'border-bottom:1px solid gray;'}
        outline: none;
      `}
    />
  );
};

export default Input;
