import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface GridProps {
  gap: number;
  columns:
    | number
    | {
        sm: number;
        md: number;
        lg: number;
        initial: number;
      };
  children: ReactNode;
}

const generateGridTemplateColumns = (
  columns:
    | number
    | {
        sm: number;
        md: number;
        lg: number;
        initial: number;
      },
) => {
  if (typeof columns === "number") {
    return `grid-template-columns: repeat(${columns}, 1fr);`;
  }
  return `
      grid-template-columns: repeat(${columns.initial}, 1fr);
      @media (min-width: 601px) {
        grid-template-columns: repeat(${columns.md}, 1fr);
      }
      @media (min-width: 1025px) {
        grid-template-columns: repeat(${columns.lg}, 1fr);
      }
    `;
};

const StyledGrid = styled.div<{
  gap: number;
  columns:
    | number
    | {
        sm: number;
        md: number;
        lg: number;
        initial: number;
      };
}>`
  display: grid;
  gap: ${({ gap }) => gap}px;
  ${({ columns }) => generateGridTemplateColumns(columns)}
`;

const Grid = ({ gap, columns, children }: GridProps) => {
  return (
    <StyledGrid gap={gap} columns={columns}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
