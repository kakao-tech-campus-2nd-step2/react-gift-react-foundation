// src/Grid/Grid.tsx
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface GridProps {
  columns?: number;
  gap?: string;
  children: ReactNode;
  responsive?: {
    sm?: number;
    md?: number;
    lg?: number;
    vertical?: boolean;
  };
}

const StyledGrid = styled.div<{
  columns: number;
  gap: string;
  responsive?: GridProps['responsive'];
}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: ${(props) => props.gap};

  @media (max-width: 768px) {
    grid-template-columns: ${(props) =>
      props.responsive?.sm
        ? `repeat(${props.responsive.sm}, 1fr)`
        : props.responsive?.vertical
          ? '1fr'
          : `repeat(${props.columns}, 1fr)`};
  }

  @media (max-width: 1024px) {
    grid-template-columns: ${(props) =>
      props.responsive?.md
        ? `repeat(${props.responsive.md}, 1fr)`
        : props.responsive?.vertical
          ? '1fr'
          : `repeat(${props.columns}, 1fr)`};
  }

  @media (min-width: 1025px) {
    grid-template-columns: ${(props) =>
      props.responsive?.lg
        ? `repeat(${props.responsive.lg}, 1fr)`
        : props.responsive?.vertical
          ? '1fr'
          : `repeat(${props.columns}, 1fr)`};
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
