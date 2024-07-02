import React from 'react'
import styled from '@emotion/styled'

type RadiusType = number | 'circle'
type RatioType = number | 'square' | 'auto'

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
   radius?: RadiusType
   ratio?: RatioType
   src: string
}

const getPaddingTop = (ratio?: RatioType) => {
   if (ratio === 'square') {
      return 'padding-top: 100%;'
   }
   if (typeof ratio === 'number') {
      if (ratio > 16 / 9) {
         return `padding-top: ${(1 / (16 / 9)) * 100}%;`
      }
      return `padding-top: ${(1 / ratio) * 100}%;`
   }
   return 'padding-top: auto;'
}

const getBorderRadius = (radius?: RadiusType) => {
   if (radius === 'circle') {
      return 'border-radius: 100%;'
   }
   if (typeof radius === 'number') {
      return `border-radius: ${radius}px;`
   }
   return 'border-radius: 0;'
}

const Wrapper = styled.div<{ ratio?: RatioType; radius?: RadiusType }>`
   position: relative;
   width: 100%;
   overflow: hidden;
   ${(props) => getPaddingTop(props.ratio)}
   ${(props) => getBorderRadius(props.radius)}
`

const CustomImage = styled.img<{ radius?: number | 'circle' }>`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   ${(props) => getRadius(props.radius)}
`

const Image: React.FC<ImageProps> = ({ ratio, radius, src, ...props }) => {
   return (
      <Wrapper ratio={ratio}>
         <CustomImage src={src} radius={radius} {...props} />
      </Wrapper>
   )
}

export default Image
