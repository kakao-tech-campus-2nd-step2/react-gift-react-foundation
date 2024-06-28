import React, { ImgHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type ImageRatio = number | "square";
type ImageRadius = number | "circle";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  ratio?: ImageRatio;
  radius?: ImageRadius;
}

const ImageWrapper = styled.div<ImageProps>`
  position: relative;
  overflow: hidden;

  ${(props) =>
    typeof props.ratio === "number" &&
    css`
      &:before {
        content: "";
        display: block;
        padding-top: ${(1 / props.ratio) * 100}%;
      }
    `}

  ${(props) =>
    props.ratio === "square" &&
    css`
      &:before {
        content: "";
        display: block;
        padding-top: 100%;
      }
    `}

  ${(props) =>
    typeof props.radius === "number" &&
    css`
      border-radius: ${props.radius}px;
    `}

  ${(props) =>
    props.radius === "circle" &&
    css`
      border-radius: 50%;
    `}
`;

const ImageStyled = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Image: React.FC<ImageProps> = ({ ratio, radius, ...props }) => {
  return (
    <ImageWrapper ratio={ratio} radius={radius}>
      <ImageStyled {...props} />
    </ImageWrapper>
  );
};

export default Image;
