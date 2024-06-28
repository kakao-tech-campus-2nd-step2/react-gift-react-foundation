/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

type ResponseGridStyle = {
  initial: number;
  sm: number;
  md: number;
  lg: number;
};
interface GridProps {
  gap?: number;
  columns?: number | ResponseGridStyle;
  children: JSX.Element[];
}

const Grid = (props: GridProps) => {
  const { gap, columns = 3, children } = props;
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(${columns}, 1fr);
        row-gap: ${gap}px;
        ${typeof columns !== 'number' &&
        `@media(max-width:1200px){
            grid-template-columns: repeat(${columns.lg}, 1fr);}
         @media(max-width:992px){
            grid-template-columns: repeat(${columns.md}, 1fr);}
         @media(max-width:786px){
            grid-template-columns: repeat(${columns.sm}, 1fr);}
         @media(max-width:576px){
            grid-template-columns: repeat(${columns.initial}, 1fr);}
        `}
      `}
    >
      {children}
    </div>
  );
};

export default Grid;
