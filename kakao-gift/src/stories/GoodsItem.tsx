import React from 'react'
import './GoodsItem.css'

interface GoodsItemProps {
  /**
   * Image source URL
   */
  src?: string
  /**
   * Title of the item
   */
  title?: string
  /**
   * Subtitle of the item
   */
  subtitle?: string
  /**
   * Amount of the item
   */
  amount?: number
}

/**
 * Primary UI component for displaying goods items
 */
export const GoodsItem = ({
  src = 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  title = '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
  subtitle = '카카오 프렌즈 특별 한정판',
  amount = 100000000000,
}: GoodsItemProps) => {
  return (
    <div className="goods-item">
      <div className="goods-item-image-wrapper">
        <img src={src} alt={title} className="goods-item-image" />
      </div>
      <div className="goods-item-details">
        <p className="goods-item-subtitle">{subtitle}</p>
        <h3 className="goods-item-title">{title}</h3>
        <p className="goods-item-amount">{amount.toLocaleString()}원</p>
      </div>
    </div>
  )
}
