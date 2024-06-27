import React, { ReactNode } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ButtonProps {
  width?: number;
  height?: number;
  bgColor?: string;
  textColor?: string;
  children: ReactNode;
}

function Button(props: ButtonProps) {
  const {
    width = 300,
    height = 50,
    bgColor = 'gray',
    textColor = 'black',
    children,
  } = props;
  return (
    <button
      type="button"
      css={css`
        width: ${width}px;
        height: ${height}px;
        borderradius: '10px';
        background-color: ${bgColor};
        color: ${textColor};
      `}
    >
      {children}
    </button>
  );
}

export default Button;
