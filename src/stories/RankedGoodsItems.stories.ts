import { Meta, StoryObj } from '@storybook/react';
import { RankedGoodsItems } from 'components/GoodsItem/RankedGoodsItems';

const meta = {
  title: 'GoodsItem/Ranked',
  component: RankedGoodsItems,
  tags: ['autodocs'],
  argTypes: {
    imageSrc: {
      control: 'text',
    },
    subtitle: {
      width: 'text',
    },
    title: {
      control: '',
    },
    amount: {
      control: 'number',
    },
    rankingIndex: {
      control: 'number',
    },
  },
  args: {},
} satisfies Meta<typeof RankedGoodsItems>;
export default meta;
type Story = StoryObj<typeof meta>;

const imgSrc =
  'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png';
const subtitle = '카카오 프렌즈 특별 한정판';
const title = '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션';
const amount = 10000;

export const Default: Story = {
  args: {
    imageSrc: imgSrc,
    subtitle: subtitle,
    title: title,
    amount: amount,
    rankingIndex: 1,
    width: '160px',
  },
};
