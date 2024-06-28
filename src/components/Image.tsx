import React from "react";
import styled from "@emotion/styled";

interface ImageProps {
  src?: string;
  width?: string;
  ratio?: string | number;
  radius?: number | string;
}

const Image: React.FC<ImageProps> = ({ src, ratio, radius, width }) => {
  let heightStyle: string | undefined = undefined;

  if (ratio === "square") {
    heightStyle = width;
  } else if (typeof ratio === "string" && ratio.includes("/")) {
    const [numerator, denominator] = ratio.split("/");
    const aspectRatio = `${(100 / parseInt(denominator)) * parseInt(numerator)}%`;
    heightStyle = `calc(${width} * (${aspectRatio}))`;
  }

  const style: React.CSSProperties = {
    width: width,
    height: heightStyle,
    borderRadius: radius === "circle" ? "50%" : `${radius}px`,
    objectFit: "cover",
  };

  return <img src={src} style={style} />;
};

export default Image;
