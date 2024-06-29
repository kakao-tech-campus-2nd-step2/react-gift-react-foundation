import React from "react";
import styled from "@emotion/styled";
import { GoodsItemProps, ImageContainer, GoodsInfo, Subtitle, Title, Amount } from "./GoodsItem";

interface RankingProps extends GoodsItemProps {
  rank: number;
}

const Ranking: React.FC<RankingProps> = ({ rank, imageUrl, subtitle, title, amount }) => {
  let widthStyle: string = "160px";

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
        {rank <= 3 ? <RankHight>{rank}</RankHight> : <RankDefault>{rank}</RankDefault>}
      </ImageContainer>
      <GoodsInfo>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <Amount>{amount}원</Amount>
      </GoodsInfo>
    </div>
  );
};

export default Ranking;

const RankHight = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #fa5858;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
`;

const RankDefault = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #bdbdbd;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
`;
