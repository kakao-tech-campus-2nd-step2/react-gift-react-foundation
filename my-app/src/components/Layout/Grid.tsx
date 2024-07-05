import React from 'react'
import styled, { css } from 'styled-components'

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: string
  columns?: number | { [key: string]: number }
  children: React.ReactNode
}

const getGridTemplateColumns = (columns: GridProps['columns']) => {
  if (typeof columns === 'number') {
    return `repeat(${columns}, 1fr)`
  }
  if (typeof columns === 'object') {
    return Object.entries(columns)
      .map(
        ([key, value]) =>
          `@media (min-width: ${key}px) { grid-template-columns: repeat(${value}, 1fr); }`,
      )
      .join(' ')
  }
  return 'repeat(1, 1fr)'
}

const GridContainer = styled.div<Pick<GridProps, 'gap' | 'columns'>>`
  display: grid;
  gap: ${({ gap }) => gap || '0'};
  ${({ columns }) =>
    typeof columns === 'number'
      ? css`
          grid-template-columns: ${getGridTemplateColumns(columns)};
        `
      : css`
          ${columns &&
          Object.entries(columns)
            .map(
              ([key, value]) =>
                `@media (min-width: ${key}px) { grid-template-columns: repeat(${value}, 1fr); }`,
            )
            .join(' ')}
        `}
`

const Grid: React.FC<GridProps> = ({
  gap = '0',
  columns = 1,
  children,
  ...props
}) => {
  return (
    <GridContainer gap={gap} columns={columns} {...props}>
      {children}
    </GridContainer>
  )
}

export default Grid
