import React from 'react'
import styled from 'styled-components'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: string
  flexDirection?: 'row' | 'column'
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch'
  children?: React.ReactNode
}

const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
`

const Container: React.FC<ContainerProps> = ({
  maxWidth = '100%',
  flexDirection = 'row',
  justifyContent = 'center',
  alignItems = 'center',
  children,
  ...props
}) => {
  return (
    <StyledContainer
      maxWidth={maxWidth}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...props}
    >
      {children}
    </StyledContainer>
  )
}

export default Container
