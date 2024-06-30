import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Image, { ImageProps } from '@/components/common/Image';

const meta: Meta<ImageProps> = {
  title: 'common/Image',
  tags: ['autodocs'],
  component: Image,
};

export default meta;

const Template: StoryFn<ImageProps> = function Tempalte(args: ImageProps) {
  return <Image {...args} />;
};

export const RatioSquare = Template.bind({});
RatioSquare.args = {
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  width: 300,
  height: 300,
  ratio: 'square',
};

export const RadiusCircle = Template.bind({});
RadiusCircle.args = {
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  width: 300,
  height: 300,
  radius: 'circle',
};

export const RadiusRound = Template.bind({});
RadiusRound.args = {
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  width: 300,
  height: 300,
  radius: 20,
};
