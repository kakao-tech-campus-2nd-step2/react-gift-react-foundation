import React from "react";
import styled from "@emotion/styled";

interface ContainerProps {
  maxWidth?: string;
  children?: string;
  flexDirection?: "row" | "column";
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around";
  alignItems?: "center" | "flex-start" | "flext-end" | "baseline" | "stretch";
}

const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  overflow: hidden;
`;

const Container: React.FC<ContainerProps> = ({ maxWidth, children, flexDirection, justifyContent, alignItems }) => {
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
