import React from "react";
import styled from "@emotion/styled";

export interface DefaultItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
}

const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Image = styled.img`
  object-fit: cover;
  object-position: center center;
  border-radius: 4px;
  aspect-ratio: 1 / 1;
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

const DefaultItem = ({
  imageSrc,
  subtitle,
  title,
  amount,
}: DefaultItemProps) => {
  return (
    <DefaultContainer>
      <Image src={imageSrc} alt="ItemPic" />
      <TextContainer>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <Amount>{amount}원</Amount>
      </TextContainer>
    </DefaultContainer>
  );
};

export default DefaultItem;
