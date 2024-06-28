import styled from '@emotion/styled';

export interface GoodsItemProps {
  rankingIndex: number;
  src: string;
  subtitle?: string;
  title?: string;
  amount?: number;
}

const StyledRanking = styled.div`
  .storybook-ranking {
    width: 160px;
    display: flex;
    flex-direction: column;
  }

  .storybook-ranking img {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1/1;
    border-radius: 7px;
    margin-bottom: 16px;
  }

  .storybook-ranking--sub {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(123, 123, 123);
    font-size: 14px;
    margin-bottom: 7px;
  }

  .storybook-ranking--title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 40px;
    line-height: 1.5em;
    max-height: 55px;
    font-size: 14px;
    font-weight: 10px;
    margin-bottom: 10px;
  }

  .storybook-ranking--amount {
    font-weight: 800;
    font-size: 20px;
    line-height: 1.5em;
  }

  .storybook-ranking--ranking {
    position: absolute;
    padding: 4px 10px;
    background-color: rgb(250, 91, 81);
    color: white;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    margin-top: 4px;
    margin-left: 4px;
  }
`;

const Ranking = ({
  rankingIndex,
  src = 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  subtitle,
  title,
  amount,
  ...props
}: GoodsItemProps) => {
  return (
    <StyledRanking>
      <div className='storybook-ranking'>
        <span className='storybook-ranking--ranking'>{rankingIndex}</span>
        <img src={src} />
        <span className='storybook-ranking--sub'>{subtitle}</span>
        <span className='storybook-ranking--title'>{title}</span>
        <span className='storybook-ranking--amount'>{amount}원</span>
      </div>
    </StyledRanking>
  );
};

export default Ranking;
