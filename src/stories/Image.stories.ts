import type { Meta, StoryObj } from '@storybook/react';

import Image from '../components/Image/Image';

const meta: Meta<typeof Image> = {
  title: 'Common/Image',
  component: Image,
  parameters: {
    layout: 'centered', // 중앙 배치
  },
  tags: ['autodocs'],
  argTypes: {
    radius: {
      control: { type: 'text' },
      table: {
        type: { summary: 'number | "circle"' },
      },
    },
    ratio: {
      control: { type: 'text' },
      table: {
        type: { summary: '"16:9" | "square"' },
      },
    },
    width: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioSquare: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    ratio: 'square',
  },
};
export const RadiusCircle: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    ratio: 'square',
    radius: 'circle',
    width: '500px',
  },
};
export const RadiusRound: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    radius: 10,
  },
};
