import type { Meta, StoryObj } from '@storybook/react';

import { GoodsItem } from '@/components/ui/GoodsItem/GoodsItem';

const meta: Meta<typeof GoodsItem> = {
  title: 'Example/GoodsItem/Default',
  component: GoodsItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageSrc: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    amount: {
      control: 'text',
    },
  },
  args: {
    imageSrc: 'https://via.placeholder.com/150',
    subtitle: 'Example Subtitle',
    title: 'Example Title',
    amount: '$100',
  },
};

export default meta;
type Story = StoryObj<typeof GoodsItem>;

export const Default: Story = {
  args: {
    imageSrc:
      'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: '100000000000',
  },
};