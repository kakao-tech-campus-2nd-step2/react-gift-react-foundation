import React, { ReactNode } from 'react';

interface ButtonProps {
  width: number;
  height: number;
  bgColor: string;
  textColor: string;
  children: ReactNode;
}

function Button(props: ButtonProps) {
  const { width, height, bgColor, textColor, children } = props;
  return (
    <button
      type="button"
      css={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: '10px',
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
