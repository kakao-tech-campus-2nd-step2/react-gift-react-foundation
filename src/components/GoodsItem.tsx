import React from "react";
import styled from "@emotion/styled";

export interface GoodsItemProps {
  imageUrl?: string;
  subtitle?: string;
  title?: string;
  amount?: string;
}

const GoodsItem: React.FC<GoodsItemProps> = ({ imageUrl, subtitle, title, amount }) => {
  let widthStyle: string = "120px";

  const containerStyle: React.CSSProperties = {
    width: widthStyle,
    overflow: "hidden",
  };

  const imageStyle: React.CSSProperties = {
    width: widthStyle,
    height: widthStyle,
    objectFit: "cover",
    borderRadius: "5px",
  };

  return (
    <div style={containerStyle}>
      <ImageContainer>
        <img src={imageUrl} alt={title} style={imageStyle} />
      </ImageContainer>
      <GoodsInfo>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <Amount>{amount}원</Amount>
      </GoodsInfo>
    </div>
  );
};

export default GoodsItem;

export const ImageContainer = styled.div`
  position: relative;
`;

export const GoodsInfo = styled.div`
  margin: 10px 0;
  line-height: 200%;
`;

export const Subtitle = styled.p`
  width: 100%;
  font-size: 14px;
  color: #777;
  margin: 0;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Title = styled.p`
  width: 100%;
  font-size: 14px;
  color: #333;
  margin: 5px 0;
  line-height: 160%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Amount = styled.p`
  width: 100%;
  font-size: 20px;
  color: #000;
  font-weight: bold;
  margin: 5px 0;
  word-wrap: break-word;
`;
