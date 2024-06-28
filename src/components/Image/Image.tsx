import styled from '@emotion/styled';
import React from 'react';

interface ImageProps {
  src: string;
  ratio?: '16:9' | 'square';
  radius?: number | 'circle';
  width?: string;
  onClick?: () => void;
}

const StyledImage = styled.img<ImageProps>`
  border-radius: ${({ radius }) =>
    radius === 'circle'
      ? '50%'
      : typeof radius === 'number'
        ? `${radius}px`
        : 'unset'};
  aspect-ratio: ${({ ratio }) => (ratio === '16:9' ? '16/9' : '1/1')};
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
`;

const Image = ({
  src = 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  radius,
  ratio,
  width,
  ...props
}: ImageProps) => {
  return (
    <StyledImage
      src={src}
      radius={radius}
      ratio={ratio}
      width={width}
      {...props}
    />
  );
};

export default Image;
