import React from 'react';

import styled from '@emotion/styled';

export interface ILayoutGridProps {
  gap: number;
  columns: number | 'ResponsiveGridStyle';

  children: React.ReactNode;
}

const LayoutGridStyles = styled.div<ILayoutGridProps>`
  display: grid;
  background-color: #fff;

  width: 200px;
  height: 100px;

  gap: ${({ gap }) => gap}px;
  grid-template-columns: ${({ columns }) =>
    columns === 'ResponsiveGridStyle'
      ? 'repeat(100px, 1fr)'
      : `repeat(${columns}, 1fr)`};
`;

export const LayoutGrid = ({
  children,
  gap,
  columns,
  ...props
}: ILayoutGridProps) => {
  return (
    <LayoutGridStyles gap={gap} columns={columns} {...props}>
      {children}
    </LayoutGridStyles>
  );
};

export default LayoutGrid;
