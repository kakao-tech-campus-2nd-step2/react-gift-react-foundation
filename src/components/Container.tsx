/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface ContainerProps {
  maxWidth?: string;
  children: ReactNode;
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
}
const Container = (props: ContainerProps) => {
  const {
    maxWidth,
    children,
    flexDirection = 'row',
    justifyContent = 'center',
    alignItems = 'center',
  } = props;
  return (
    <div
      css={css`
        max-width: ${maxWidth};
        display: flex;
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        height: 60px;
      `}
    >
      {children}
    </div>
  );
};

export default Container;
