import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ratio?: '16/9' | 'square';
  radius?: 'circle' | number;
}

const StyledImage = styled.img<ImageProps>`
  width: 100%;
  height: auto;

  ${({ ratio }) =>
    ratio &&
    css`
      aspect-ratio: ${ratio === '16/9' ? '16 / 9' : '1 / 1'};
    `}

  ${({ radius }) =>
    radius &&
    css`
      border-radius: ${typeof radius === 'number'
        ? `${radius}px`
        : radius === 'circle'
          ? '50%'
          : '0'};
    `}
`;

const Image: React.FC<ImageProps> = ({ ratio, radius, ...props }) => (
  <StyledImage ratio={ratio} radius={radius} {...props} />
);

Image.propTypes = {
  ratio: PropTypes.oneOf(['16/9', 'square']),
  radius: PropTypes.oneOfType([
    PropTypes.oneOf(['circle']),
    PropTypes.number,
  ]) as PropTypes.Validator<number | 'circle'>,
};

export default Image;
