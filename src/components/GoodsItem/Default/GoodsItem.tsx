import React from 'react';
import './goodsItem.css';

interface GoodsItemProps {
    imageSrc: string; // 이미지 링크
    subtitle?: string,
    title?: string,
    amount?: number
}

export const GoodsItem = ({
    imageSrc = 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle,
    title,
    amount,
    ...props
}: GoodsItemProps) => {

    return (
        <div className='storybook-goods'>
            <img src={imageSrc} />
            <div className='storybook-goods--sub'>{subtitle}</div>
            <div className='storybook-goods--title'>{title}</div>
            <div className='storybook-goods--amount'>{amount}원</div>
        </div>
    );
};