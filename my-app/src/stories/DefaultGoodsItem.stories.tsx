import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { GoodsItem } from '../components/GoodsItem';
import type { GoodsItemProps } from '../components/GoodsItem';

export default {
	title: 'Common/GoodsItem/Default',
	component: GoodsItem,
} as Meta;

const Template: StoryFn<GoodsItemProps> = (args) => <GoodsItem {...args} />;

export const Default = Template.bind({});
Default.args = {
	imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
	subtitle: '카카오 프렌즈 특별 한정판 브라이트 쿠션',
	title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
	amount: '100000000원',
};
