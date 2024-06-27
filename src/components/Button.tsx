import React, { ReactNode } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ButtonProps {
  width?: number;
  height?: number;
  theme?: string;
  children: ReactNode;
}

const primary = css`
  background-color: blue;
  color: white;
`;
const danger = css`
  background-color: red;
  color: white;
`;

function Button(props: ButtonProps) {
  const { width = 300, height = 50, theme = 'primary', children } = props;
  let themeBtn;
  if (theme === 'primary') {
    themeBtn = primary;
  } else if (theme === 'danger') {
    themeBtn = danger;
  }
  return (
    <button
      type="button"
      css={css`
        width: ${width}px;
        height: ${height}px;
        border-radius: 10px;
        border: none;
        ${themeBtn}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
