import React from 'react'
import styled from '@emotion/styled'

interface ImageProps {
  ratio?: number | 'square'
  radius?: number | 'circle'
  [key: string]: any
}

const ImageWrapper = styled.div<{ paddingTop: string; borderRadius: string | number }>`
  position: relative;
  width: 100%;
  padding-top: ${({ paddingTop }) => paddingTop};
  border-radius: ${({ borderRadius }) => borderRadius};
  overflow: hidden;
`

const StyledImage = styled.img<{ borderRadius: string | number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ borderRadius }) => borderRadius};
`

const Image = ({ ratio, radius, ...props }: ImageProps) => {
  let paddingTop = '0'
  if (typeof ratio === 'number') {
    paddingTop = `${(1 / ratio) * 100}%`
  } else if (ratio === 'square') {
    paddingTop = '100%'
  }

  let borderRadius: string | number = '0'
  if (typeof radius === 'number') {
    borderRadius = `${radius}px`
  } else if (radius === 'circle') {
    borderRadius = '50%'
  }

  return (
    <ImageWrapper paddingTop={paddingTop} borderRadius={borderRadius}>
      <StyledImage {...props} borderRadius={borderRadius} />
    </ImageWrapper>
  )
}

export default Image
