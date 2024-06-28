/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react';

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  width?: number;
  height?: number;
}
const Input = (props: InputProps) => {
  const {
    value,
    onChange,
    disabled = false,
    placeholder = '입력해주세요.',
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
        border-radius: 5px;
      `}
    />
  );
};

export default Input;
