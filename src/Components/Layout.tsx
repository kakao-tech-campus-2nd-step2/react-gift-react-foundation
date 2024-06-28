import React from "react";
import styled from "styled-components";

interface GridProps {
  columns?: number;
  gap?: string;
}

const GridWrapper = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 12}, 1fr);
  gap: ${(props) => props.gap || "20px"};
`;

const Grid: React.FC<GridProps & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return <GridWrapper {...props}>{children}</GridWrapper>;
};

interface ContainerProps {
  maxWidth?: string;
}

const ContainerWrapper = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${(props) => props.maxWidth || "1200px"};
  margin: 0 auto;
  padding: 0 15px;
`;

const Container: React.FC<
  ContainerProps & React.HTMLAttributes<HTMLDivElement>
> = ({ children, ...props }) => {
  return <ContainerWrapper {...props}>{children}</ContainerWrapper>;
};

export { Grid, Container };
