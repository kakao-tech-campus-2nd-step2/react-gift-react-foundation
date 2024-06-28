// src/Image/Image.tsx
import React from 'react';
import styled, { css } from 'styled-components';

// ImageProps 인터페이스를 내보내도록 수정
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ratio?: '16:9' | '4:3' | '1:1' | 'square' | number; // ratio Props에 number 추가
  radius?: string;
}

const calculatePaddingTop = (ratio: string | number = '16:9'): string => {
  if (typeof ratio === 'number') {
    return `${(1 / ratio) * 100}%`;
  }
  if (ratio === 'square' || ratio === '1:1') {
    return '100%';
  }
  const [width, height] = ratio.split(':').map(Number);
  return `${(height / width) * 100}%`;
};

const ImageWrapper = styled.div<{ ratio: string | number; radius?: string }>`
  position: relative;
  width: 100%;
  ${({ ratio }) => css`
    padding-top: ${calculatePaddingTop(ratio)};
  `}
  border-radius: ${(props) => props.radius || '0'};

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

export const Image: React.FC<ImageProps> = ({
  ratio = '16:9',
  radius,
  ...props
}) => {
  return (
    <ImageWrapper ratio={ratio} radius={radius}>
      <img {...props} />
    </ImageWrapper>
  );
};
