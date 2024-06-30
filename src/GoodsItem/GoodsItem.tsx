import React from 'react'
import { GoodsItemWrapper, GoodsImage, GoodsSubtitle, GoodsTitle, GoodsAmount, RankingBadge } from './GoodsItemStyles'

export interface GoodsItemProps {
  imageSrc: string
  subtitle: string
  title: string
  amount: number
  rankingIndex?: number
}

const GoodsItem: React.FC<GoodsItemProps> = ({ imageSrc, subtitle, title, amount, rankingIndex }) => {
  return (
    <GoodsItemWrapper>
      {rankingIndex !== undefined && <RankingBadge rank={rankingIndex}>{rankingIndex}</RankingBadge>}
      <GoodsImage src={imageSrc} alt={title} />
      <GoodsSubtitle>{subtitle}</GoodsSubtitle>
      <GoodsTitle>{title}</GoodsTitle>
      <GoodsAmount>
        {amount.toLocaleString('ko-KR')}
        {'원'}
      </GoodsAmount>
    </GoodsItemWrapper>
  )
}

GoodsItem.defaultProps = {
  rankingIndex: undefined,
}

export default GoodsItem
