import styled from '@emotion/styled';

interface GoodsItemProps {
  imageSrc: string;
  subtitle?: string;
  title?: string;
  amount?: number;
}

const StyledGoodsItem = styled.div`
  width: 125px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1/1;
    border-radius: 7px;
    margin-bottom: 16px;
  }

  .storybook-goods--sub {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(123, 123, 123);
    font-size: 14px;
    margin-bottom: 7px;
  }

  .storybook-goods--title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 95%;
    height: 40px;
    line-height: 1.4em;
    max-height: 55px;
    font-size: 14px;
    font-weight: 10px;
    margin-bottom: 10px;
  }

  .storybook-goods--amount {
    font-weight: 800;
    font-size: 20px;
    line-height: 1.5em;
  }
`;

const GoodsItem = ({
  imageSrc = 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  subtitle,
  title,
  amount,
  ...props
}: GoodsItemProps) => {
  return (
    <StyledGoodsItem>
      <img src={imageSrc} />
      <span className='storybook-goods--sub'>{subtitle}</span>
      <span className='storybook-goods--title'>{title}</span>
      <span className='storybook-goods--amount'>{amount}원</span>
    </StyledGoodsItem>
  );
};

export default GoodsItem;
