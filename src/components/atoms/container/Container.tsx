import { ReactNode } from 'react';
import { css } from '@emotion/react';

interface ContainerProps {
  maxWidth?: string,
  flexDirection?: 'row' | 'column',
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around',
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch',
  children: ReactNode,
}

function Container({
  maxWidth, flexDirection, justifyContent, alignItems, children,
}: ContainerProps) {
  return (
    <div
      css={css`
        max-width: ${maxWidth};
        display: flex;
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
      `}
    >
      {children}
    </div>
  );
}

export default Container;