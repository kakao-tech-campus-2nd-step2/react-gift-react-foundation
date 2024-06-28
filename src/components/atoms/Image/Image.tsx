import React from 'react';
import styled from '@emotion/styled';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ratio?: number | 'square';
  radius?: number | 'circle';
}

const getRatioStyles = (ratio: number | 'square') => {
  if (ratio === 'square') {
    return `
      width: 100%;
      padding-top: 100%; /* 1:1 비율을 유지 */
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `;
  } else {
    const percentage = (1 / ratio) * 100;
    return `
      width: 100%;
      padding-top: ${percentage}%;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `;
  }
};

const getRadiusStyles = (radius: number | 'circle') => {
  if (radius === 'circle') {
    return 'border-radius: 50%;';
  } else {
    return `border-radius: ${radius}px;`;
  }
};

const ImageContainer = styled.div<Pick<ImageProps, 'ratio' | 'radius'>>`
  ${(props) => getRatioStyles(props.ratio || 'square')}
  ${(props) => getRadiusStyles(props.radius || 0)}
  overflow: hidden;
`;

const Image: React.FC<ImageProps> = ({ ratio = 'square', radius = 0, ...props }) => {
  return (
    <ImageContainer ratio={ratio} radius={radius}>
      <img {...props} />
    </ImageContainer>
  );
};

export default Image;
