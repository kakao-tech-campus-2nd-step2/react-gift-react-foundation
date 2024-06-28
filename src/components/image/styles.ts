import { css } from '@emotion/react';
import styled from '@emotion/styled';

const getRatioPadding = (ratio: number | 'square') => {
  if (ratio === 'square') {
    return '100%';
  }
  return `${(1 / ratio) * 100}%`;
};

const getRadiusStyle = (radius: number | 'circle') => {
  if (radius === 'circle') {
    return css`
      border-radius: 50%;
    `;
  }
  return css`
    border-radius: ${radius}px;
  `;
};

export const ImageContainer = styled.div<{
  ratio?: number | 'square';
  radius?: number | 'circle';
}>`
  position: relative;
  width: 100%;
  padding-top: ${({ ratio }) => getRatioPadding(ratio || 1)};
  overflow: hidden;
  ${({ radius }) => radius !== undefined && getRadiusStyle(radius)};
`;

export const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
