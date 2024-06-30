import React from 'react'
import { StyledImageWrapper, StyledImage } from './ImageStyles'

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ratio?: number | 'square'
  radius?: number | 'circle'
}

const Image: React.FC<ImageProps> = ({ ratio, radius, ...props }) => {
  return (
    <StyledImageWrapper ratio={ratio}>
      <StyledImage radius={radius} {...props} />
    </StyledImageWrapper>
  )
}

Image.defaultProps = {
  ratio: 'square',
  radius: 0,
}

export default Image
