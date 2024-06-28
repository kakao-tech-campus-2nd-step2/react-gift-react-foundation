import React from "react";
import styled from "styled-components";
import Image from "./Image";

interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
  rankingIndex?: number;
}

const GoodsItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const RankingBadge = styled.div<{ index: number }>`
  background-color: ${(props) => (props.index <= 3 ? "#ff69b4" : "#808080")};
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Info = styled.div`
  margin-top: 10px;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 12px;
`;

const Title = styled.h3`
  margin: 5px 0;
`;

const Amount = styled.p`
  font-weight: bold;
`;

const GoodsItem: React.FC<GoodsItemProps> = ({
  imageSrc,
  subtitle,
  title,
  amount,
  rankingIndex,
}) => {
  return (
    <GoodsItemWrapper>
      <ImageWrapper>
        <Image src={imageSrc} ratio={1} radius={8} />
        {rankingIndex !== undefined && (
          <RankingBadge index={rankingIndex}>{rankingIndex}</RankingBadge>
        )}
      </ImageWrapper>
      <Info>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <Amount>{amount.toLocaleString()} 원</Amount>
      </Info>
    </GoodsItemWrapper>
  );
};

export default GoodsItem;
