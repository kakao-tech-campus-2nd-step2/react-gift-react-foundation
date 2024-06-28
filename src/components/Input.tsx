/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react';

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  width?: number;
  height?: number;
}
const Input = (props: InputProps) => {
  const { value, onChange, disabled = false, width = 100, height = 30 } = props;
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      disabled={disabled}
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
