import React from "react";
import styled from "@emotion/styled";

export interface RankingProps {
  rankingIndex: number;
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
}

const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
`;

const Image = styled.img`
  object-fit: cover;
  object-position: center center;
  border-radius: 4px;
  aspect-ratio: 1 / 1;
`;

const RankingNum = styled.div`
  position: absolute;
  z-index: 2;
  width: 20px;
  min-width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  font-weight: 700;
  top: 5px;
  left: 5px;
  color: rgb(255, 255, 255);
  background-color: rgb(253, 115, 100);
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Subtitle = styled.p`
  width: 50%;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: rgb(153, 153, 153);
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = styled.h2`
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: rgb(51, 51, 51);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Amount = styled.p`
  padding-top: 8px;
  font-size: 20px;
  line-height: 30px;
  color: rgb(34, 34, 34);
  font-weight: 700;
  word-break: break-word;
`;

const Ranking = ({
  rankingIndex,
  imageSrc,
  subtitle,
  title,
  amount,
}: RankingProps) => {
  return (
    <RankingContainer>
      <RankingNum>{rankingIndex}</RankingNum>
      <Image src={imageSrc} alt="ItemPic" />
      <TextContainer>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <Amount>{amount}원</Amount>
      </TextContainer>
    </RankingContainer>
  );
};

export default Ranking;
