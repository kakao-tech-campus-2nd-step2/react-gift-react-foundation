import React from 'react';
import Ranking from './Ranking';


export default {
  title: 'Components/GoodsItem/Ranking',
  component: Ranking,
};

const Template = args => <Ranking {...args} />;

export const Default = Template.bind({});
Default.args = {
  rankingIndex: 1,
  imageSrc: "https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png",
  subtitle: 'subtitle',
  title: 'title',
  amount: 1000,
};


