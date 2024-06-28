import React from 'react';
import '@styles/image.css';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ratio?: 'auto' | 'square' | number;
  radius?: 'circle' | number;
}

export const Image = ({
  src,
  width,
  ratio = 'square',
  radius,
  alt = '',
  ...props
}: ImageProps) => {
  const classNames = ['storybook-image'];

  const style: React.CSSProperties = { width };

  if (ratio === 'auto') {
    style.aspectRatio = 'auto';
  } else if (ratio === 'square') {
    style.aspectRatio = '1 / 1';
  }

  if (radius === 'circle') {
    style.borderRadius = '50%';
  } else if (typeof radius === 'number') {
    style.borderRadius = `${radius}px`;
  }

  return (
    <img
      src={src}
      style={style}
      className={classNames.join(' ')}
      alt={alt}
      {...props}
    />
  );
};