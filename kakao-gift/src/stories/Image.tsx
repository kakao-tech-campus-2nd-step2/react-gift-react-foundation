import React from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Image source URL
   */
  src: string
  /**
   * Alternative text for the image
   */
  alt: string
}

/**
 * Primary UI component for displaying images
 */
export const Image = ({ src, alt, ...props }: ImageProps) => {
  return <img src={src} alt={alt} className="storybook-image" {...props} />
}
