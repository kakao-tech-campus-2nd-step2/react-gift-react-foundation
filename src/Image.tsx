import React, { ImgHTMLAttributes } from 'react';
import './image.css';

// eslint-disable-next-line no-undef
export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  ratio?: '16/9' | 'square';
  radius?: number | 'circle';
}

const Image: React.FC<ImageProps> = ({ ratio, radius, style, ...props }) => {
  let ratioStyle: React.CSSProperties = {};
  if (ratio === '16/9') {
    ratioStyle = { aspectRatio: '16/9' };
  } else if (ratio === 'square') {
    ratioStyle = { aspectRatio: '1/1' };
  }

  let radiusStyle: React.CSSProperties = {};
  if (typeof radius === 'number') {
    radiusStyle = { borderRadius: `${radius}px` };
  } else if (radius === 'circle') {
    radiusStyle = { borderRadius: '50%' };
  }

  // eslint-disable-next-line jsx-a11y/alt-text
  return <img style={{ ...ratioStyle, ...radiusStyle, ...style }} {...props} />;
};

export default Image;
