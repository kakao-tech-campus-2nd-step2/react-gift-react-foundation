import React from 'react'
import styled from 'styled-components'

export interface GoodsItemProps {
  imageSrc: string
  subtitle: string
  title: string
  amount: number
  rankingIndex?: number
}

const GoodsItemContainer = styled.div<{ rankingIndex?: number }>`
  overflow: hidden;
  font-family: Arial, sans-serif;
  position: relative;
  width: ${({ rankingIndex }) => (rankingIndex ? '160px' : '120px')};
`

const RankingBadge = styled.div<{ rankingIndex: number }>`
  position: absolute;
  top: 5px;
  left: 5px;
  padding: 5px 10px;
  border-radius: 25%;
  color: white;
  font-weight: bold;
  font-size: 15px;
  z-index: 1;
  background-color: ${({ rankingIndex }) =>
    rankingIndex >= 1 && rankingIndex <= 3 ? '#FF69B4' : '#A9A9A9'};
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* 1:1 비율을 유지 */
  overflow: hidden;
  border-radius: 5px;
`

const GoodsImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const GoodsInfo = styled.div`
  padding-top: 10px;
`

const GoodsTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const GoodsSubtitle = styled.div`
  font-size: 12px;
  color: #555;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const GoodsAmount = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`

const GoodsItem: React.FC<GoodsItemProps> = ({
  imageSrc,
  subtitle,
  title,
  amount,
  rankingIndex,
}) => {
  return (
    <GoodsItemContainer rankingIndex={rankingIndex}>
      {rankingIndex !== undefined && (
        <RankingBadge rankingIndex={rankingIndex}>{rankingIndex}</RankingBadge>
      )}
      <ImageContainer>
        <GoodsImage src={imageSrc} alt={title} />
      </ImageContainer>
      <GoodsInfo>
        <GoodsTitle>{title}</GoodsTitle>
        <GoodsSubtitle>{subtitle}</GoodsSubtitle>
        <GoodsAmount>{amount.toLocaleString()}원</GoodsAmount>
      </GoodsInfo>
    </GoodsItemContainer>
  )
}

export default GoodsItem
