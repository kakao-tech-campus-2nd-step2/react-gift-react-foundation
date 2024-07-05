import React from 'react'
import styled from 'styled-components'

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt?: string
  ratio?: number | 'auto' | 'square'
  radius?: number | 'circle'
  width?: string
}

const ImageWrapper = styled.div<{
  ratio?: ImageProps['ratio']
  width?: string
}>`
  position: relative;
  width: ${({ width }) => width || '100%'};
  overflow: hidden;
  display: inline-block;
  ${({ ratio }) =>
    typeof ratio === 'number'
      ? `aspect-ratio: ${ratio};`
      : ratio === 'square'
        ? 'aspect-ratio: 1 / 1;'
        : ''}
`

const StyledImage = styled.img<{ radius?: ImageProps['radius'] }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${({ radius }) =>
    typeof radius === 'number'
      ? `border-radius: ${radius}px;`
      : radius === 'circle'
        ? 'border-radius: 50%;'
        : ''}
`

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  ratio,
  radius,
  width,
  ...props
}) => {
  return (
    <ImageWrapper ratio={ratio} width={width}>
      <StyledImage src={src} alt={alt} radius={radius} {...props} />
    </ImageWrapper>
  )
}

export default Image
