import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Image, { ImageProps } from '../components/Image';

export default {
	title: 'Common/Image',
	component: Image,
} as Meta;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const RatioSquare = Template.bind({});
RatioSquare.args = {
	src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
	ratio: 'square',
};

export const RadiusRound = Template.bind({});
RadiusRound.args = {
	src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
	radius: 10,
};

export const RadiusCircle = Template.bind({});
RadiusCircle.args = {
	src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
	radius: 'circle',
};
