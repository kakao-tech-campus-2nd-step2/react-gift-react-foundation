import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';

const meta = {
  title: 'COMMON/Image',
  component: Image,
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

export const RatioSquare: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    width: 100,
  },
};

export const RadiusCircle: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    width: 100,
    radius: 'circle',
  },
};

export const RadiusRound: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    ratio: '16/9',
    width: 500,
    radius: 10,
  },
};
