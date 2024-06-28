import React from 'react';
import './image.css';

interface ImageProps {
  src? : string;
  width? : string;
  ratio? : number | 'auto' | 'square';
  radius? : number | "circle"
}

export const Image = ({
  src= "",
  width = "300px",
  ratio = 0,
  radius = 0,
  ...props
}: ImageProps) => {
  if (ratio == "square") {
    ratio = 1
  }
  let borderRadius: string;
  if (radius == "circle") {
    borderRadius = '50%'
  } else {
    borderRadius = `${radius}px`
  }
  return (
    <img
      src={src}
      style={{
        width: width,
        borderRadius: borderRadius,
        aspectRatio: ratio,
        objectFit: 'cover'
      }}
      {...props}
      >
    </img>
  );
};
