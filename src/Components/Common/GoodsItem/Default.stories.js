import React from 'react';
import Default from './Default';


export default {
  title: 'Components/GoodsItem/Default',
  component: Default,
};

const Template = args => <Default {...args} />;

export const DefaultItem = Template.bind({});
DefaultItem.args = {
  imageSrc: "https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png",
  subtitle: 'subtitle',
  title: 'title',
  amount: 1000,
};


