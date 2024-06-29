import React, { ReactElement } from "react";
import styled from "@emotion/styled";

interface GridProps {
  columns: number;
  gap?: number;
  children?: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ columns, gap, children }) => {
  return (
    <StyledGrid columns={columns} gap={gap}>
      {children}
    </StyledGrid>
  );
};

export default Grid;

const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(
    ${({ columns }) => (typeof columns === "number" ? columns : "auto-fit")},
    minmax(0, 1fr)
  );
  gap: ${({ gap }) => gap}px;
`;
