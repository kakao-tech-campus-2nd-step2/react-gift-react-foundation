import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import Image, { ImageProps } from './Image';

export default {
  title: 'COMMON/Image',
  component: Image,
  argTypes: {
    src: {
      control: 'text',
      defaultValue:
        'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    },
    ratio: {
      control: {
        type: 'text',
        options: ['auto', 'square', ''],
      },
      table: {
        type: { summary: 'number | "auto" | "square"' },
      },
      radius: {
        control: {
          type: 'object',
        },
        defaultValue: 0,
      },
    },
  },
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ImageProps> = args => <Image {...args} />;

export const RatioSquare = Template.bind({});
RatioSquare.args = {
  ratio: 'square',
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  width: '100px',
};

export const RadiusCircle = Template.bind({});
RadiusCircle.args = {
  radius: 'circle',
  ratio: 'square',
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  width: '100px',
};

export const RadiusRound = Template.bind({});
RadiusRound.args = {
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  radius: 10,
};
