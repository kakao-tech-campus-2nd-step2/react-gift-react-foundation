import React from 'react'
import { gridStyle } from './GridStyles'

export type GridProps = {
  children: React.ReactNode
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return <div style={gridStyle}>{children}</div>
}

export default Grid
