import React from 'react'
import './image.css'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Image source URL
   */
  src: string
  /**
   * Alternative text for the image
   */
  alt: string
  /**
   * Ratio for the image
   */
  ratio?: string
}

/**
 * Primary UI component for displaying images
 */
export const Image = ({ src, alt, ratio, ...props }: ImageProps) => {
  let ratioClass = ''

  if (ratio) {
    if (ratio === 'circle') {
      ratioClass = 'image-ratio-circle'
    } else if (ratio === 'square') {
      ratioClass = 'image-ratio-square'
    } else {
      const [width, height] = ratio.split('/').map(Number)
      if (width && height) {
        ratioClass = 'image-ratio'
        props.style = { aspectRatio: `${width} / ${height}` }
      }
    }
  }

  return (
    <div className={['storybook-image-wrapper', ratioClass].join(' ')}>
      <img src={src} alt={alt} className="storybook-image" {...props} />
    </div>
  )
}
