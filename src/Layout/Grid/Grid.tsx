// src/Grid/Grid.tsx
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ResponsiveProps {
  sm?: number;
  md?: number;
  lg?: number;
  vertical?: boolean;
}

interface GridProps {
  columns?: number;
  gap?: string;
  children: ReactNode;
  responsive?: ResponsiveProps;
}

const getGridTemplateColumns = (
  columns: number,
  responsive?: ResponsiveProps,
  breakpoint?: keyof ResponsiveProps,
) => {
  if (responsive) {
    if (breakpoint && responsive[breakpoint]) {
      return `repeat(${responsive[breakpoint]}, 1fr)`;
    }
    if (responsive.vertical) {
      return '1fr';
    }
  }
  return `repeat(${columns}, 1fr)`;
};

const StyledGrid = styled.div<{
  columns: number;
  gap: string;
  responsive?: ResponsiveProps;
}>`
  display: grid;
  grid-template-columns: ${(props) =>
    getGridTemplateColumns(props.columns, props.responsive)};

  @media (max-width: 768px) {
    grid-template-columns: ${(props) =>
      getGridTemplateColumns(props.columns, props.responsive, 'sm')};
  

  @media (max-width: 1024px) {
    grid-template-columns: ${(props) =>
      getGridTemplateColumns(props.columns, props.responsive, 'md')};
  

  @media (min-width: 1025px) {
  grid-template-columns: ${(props) =>
    getGridTemplateColumns(props.columns, props.responsive, 'lg')};
  }
`;

const Grid: React.FC<GridProps> = ({
  columns = 3,
  gap = '16px',
  children,
  responsive,
}) => {
  return (
    <StyledGrid columns={columns} gap={gap} responsive={responsive}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
