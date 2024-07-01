import { css } from '@emotion/css';
import React from 'react';

interface GridProps {
  gap: number;
  columns: number;
  children: React.ReactNode;
}

const Grid = ({ gap, columns, children, ...props }: GridProps) => {
  return (
    <div
      className={css`
        display: grid;
        gap: ${gap}px;
        grid-template-columns: repeat(${columns}, 1fr);
      `}
    >
      {children}
    </div>
  );
};

export default Grid;
