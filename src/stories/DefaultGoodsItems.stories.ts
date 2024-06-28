import { Meta, StoryObj } from '@storybook/react';
import { DefaultGoodsItems } from 'components/GoodsItem/DefaultGoodsItems';

const meta = {
  title: 'GoodsItem/Default',
  component: DefaultGoodsItems,
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
  },
  args: {},
} satisfies Meta<typeof DefaultGoodsItems>;
export default meta;
type Story = StoryObj<typeof meta>;

const imgSrc =
  'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png';
const subtitle = '카카오 프렌즈 특별 한정판';
const title = '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션';
const amount = 100000000000;

export const Default: Story = {
  args: {
    imageSrc: imgSrc,
    subtitle: subtitle,
    title: title,
    amount: amount,
  },
};
