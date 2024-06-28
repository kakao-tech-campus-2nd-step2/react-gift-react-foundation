import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { RankingGoodsItem } from '../components/RankingGoodsItem';
import type { RankingGoodsItemProps } from '../components/RankingGoodsItem';

export default {
	title: 'Common/GoodsItem/Ranking',
	component: RankingGoodsItem,
} as Meta;

const Template: StoryFn<RankingGoodsItemProps> = (args) => <RankingGoodsItem {...args} />;

export const Default = Template.bind({});
Default.args = {
	imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
	subtitle: '카카오 프렌즈 특별 한정판 브라이트 쿠션',
	title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
	amount: '10000원',
	rankingIndex: 1,
};
