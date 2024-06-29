import React, { FC, ImgHTMLAttributes, CSSProperties } from 'react';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  ratio: number | 'square';
  radius: number | 'circle';
}

// eslint-disable-next-line react/function-component-definition
const Image: FC<ImageProps> = ({ ratio, radius, ...props }) => {
  const getImageStyle = (): CSSProperties => {
    const style: CSSProperties = {};

    if (ratio === 'square') {
      style.aspectRatio = '1 / 1';
    } else if (typeof ratio === 'number') {
      style.aspectRatio = `${ratio.toFixed(2)} / 1`;
    }

    if (typeof radius === 'number') {
      style.borderRadius = `${radius}px`;
    } else if (radius === 'circle') {
      style.borderRadius = '50%';
    }

    return style;
  };

  return <img {...props} style={getImageStyle()} alt="" />;
};

export default Image;
