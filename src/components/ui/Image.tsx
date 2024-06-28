import { css } from '@emotion/react';
import React from 'react';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ratio?: number | 'square';
  radius?: number | 'circle';
  width: string;
}

const boxStyle = (boxWidth: string) =>
  css({
    width: boxWidth,
    height: 'auto',
  });

const getRatioPadding = (ratio: number | 'square'): string => {
  if (ratio === 'square') {
    return '100%';
  }
  return `${(1 / ratio) * 100}%`;
};

const getBorderRadius = (radius: number | 'circle'): string => {
  if (radius === 'circle') {
    return '50%';
  }
  return `${radius}px`;
};

export const wrapperStyle = (ratio?: number | 'square') =>
  css({
    position: 'relative',
    width: '100%',
    paddingTop: ratio ? getRatioPadding(ratio) : 'auto',
    overflow: 'hidden',
  });

export const imageStyle = (radius?: number | 'circle') =>
  css({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: radius !== undefined ? getBorderRadius(radius) : '0',
  });

export const Image = ({
  ratio = 16 / 9,
  radius = 0,
  width,
  alt,
  ...props
}: ImageProps) => {
  return (
    <div css={boxStyle(width)}>
      <div css={wrapperStyle(ratio)}>
        <img css={imageStyle(radius)} alt={alt} {...props} />
      </div>
    </div>
  );
};
