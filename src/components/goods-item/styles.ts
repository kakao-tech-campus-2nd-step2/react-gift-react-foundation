import styled from '@emotion/styled';

export const GoodsItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 16px;
  width: 200px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const Subtitle = styled.span`
  color: #757575;
  font-size: 14px;
  margin-top: 8px;
`;

export const Title = styled.h3`
  color: #212121;
  font-size: 18px;
  margin: 8px 0;
`;

export const Amount = styled.span`
  color: #212121;
  font-size: 16px;
  font-weight: bold;
`;

export const RankingBadge = styled.div<{ isTopThree: boolean }>`
  background-color: ${({ isTopThree }) => (isTopThree ? '#f06292' : '#bdbdbd')};
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 14px;
  font-weight: bold;
`;
