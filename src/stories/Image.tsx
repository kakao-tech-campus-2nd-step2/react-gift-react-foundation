import { ImgHTMLAttributes } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  width?: number;
  ratio?: number | "square";
  radius?: number | "circle";
}

const StyledImage = styled.img<ImageProps>`
  display: block;
  object-fit: cover;
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};

  ${(props) =>
    props.ratio === "square" &&
    css`
      aspect-ratio: 1 / 1;
    `}

  ${(props) =>
    typeof props.ratio === "number" &&
    css`
      aspect-ratio: ${props.ratio};
    `}

  ${(props) =>
    props.radius === "circle" &&
    css`
      border-radius: 50%;
    `}

  ${(props) =>
    typeof props.radius === "number" &&
    css`
      border-radius: ${props.radius}px;
    `}
`;

const Image = ({ src, width, ratio, radius, ...rest }: ImageProps) => {
  return (
    <StyledImage
      src={src}
      width={width}
      ratio={ratio}
      radius={radius}
      {...rest}
    />
  );
};

export default Image;
