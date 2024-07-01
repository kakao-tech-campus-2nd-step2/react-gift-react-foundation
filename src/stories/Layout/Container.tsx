import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface ContainerProps {
  maxWidth?: string;
  children: ReactNode;
  flexDirection?: "row" | "column";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  alignItems?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch";
}

const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  flex-direction: ${({ flexDirection }) => flexDirection || "coulumn"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
`;

const Container = ({
  maxWidth,
  children,
  flexDirection,
  justifyContent,
  alignItems,
}: ContainerProps) => {
  return (
    <StyledContainer
      maxWidth={maxWidth}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
