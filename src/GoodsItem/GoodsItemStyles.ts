import styled from 'styled-components'

export const GoodsItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 240px;
  position: relative;
`

export const GoodsImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`

export const GoodsSubtitle = styled.p`
  font-size: 12px;
  color: #888;
  margin: 4px 0;
`

export const GoodsTitle = styled.h3`
  font-size: 14px;
  font-weight: normal;
  margin: 4px 0;
  color: #333;
`

export const GoodsAmount = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
  color: #000;
`

export const RankingBadge = styled.div<{ rank: number }>`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: ${({ rank }) => (rank <= 3 ? '#fd7364' : '#bbb')};
  color: white;
  border-radius: 30%;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
`
