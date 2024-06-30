import React from 'react'
import { containerStyle } from './ContainerStyles'

export type ContainerProps = {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div style={containerStyle}>{children}</div>
}

export default Container
