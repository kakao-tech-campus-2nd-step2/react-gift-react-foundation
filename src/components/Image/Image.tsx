import React from 'react';
import './image.css';

interface ImageProps {
  src: string;
  width: string;
  ratio?: number | string;
  radius?: string | number;
  desc?: string;
}

const sqr = 'square';
const auto = 'auto';

export const Image = ({
  ratio = auto,
  radius = 0,
  width,
  src,
  desc = 'image description...',
}: ImageProps) => {
  return (
    <img
      className={`image ${radius === 'circle' ? 'circle' : ''}`}
      style={{
        borderRadius: radius === 'circle' ? '50%' : radius,
        width: width ? width : auto,
        aspectRatio: ratio === sqr ? '1/1' : ratio,
      }}
      src={src}
      alt={desc}
    />
  );
};
