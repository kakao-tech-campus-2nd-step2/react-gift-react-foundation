import React from 'react';
import './Image.css';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ratio?: number | 'auto' | 'square';
  radius?: number | 'circle';
}

const Image: React.FC<ImageProps> = ({ radius, ratio, src, ...rest }) => {
  let imageClassName = 'image';

  const { width, ...otherProps } = rest;
  const imageStyle: React.CSSProperties = {
    width: width || 'auto',

    height: 'auto',
  };

  if (ratio === 'square') {
    imageClassName += ' ratio-square';
  } else if (typeof ratio === 'number') {
    imageClassName += ' ratio-custom';
  }

  if (radius === 'circle') {
    imageClassName += ' radius-circle';
  } else if (typeof radius === 'number') {
    imageClassName += ` radius-${radius}`;
  }

  return (
    <img
      className={imageClassName}
      src={src}
      style={{
        borderRadius:
          typeof radius === 'number'
            ? `${radius}px`
            : radius === 'circle'
              ? '50%'
              : '0',
      }}
      {...rest}
    />
  );
};

export default Image;
