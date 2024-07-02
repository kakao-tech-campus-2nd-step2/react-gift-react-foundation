import React from 'react';
import './ranking.css';

interface GoodsItemProps {
    rankingIndex: number;
    imageSrc: string;
    subtitle?: string,
    title?: string,
    amount?: number
}

export const Ranking = ({
    rankingIndex,
    imageSrc = 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle,
    title,
    amount,
    ...props
}: GoodsItemProps) => {

    return (
        <div className='storybook-ranking'>
            <div className='storybook-ranking--ranking'>{rankingIndex}</div>
            <img src={imageSrc} />
            <div className='storybook-ranking--sub'>{subtitle}</div>
            <div className='storybook-ranking--title'>{title}</div>
            <div className='storybook-ranking--amount'>{amount}원</div>
        </div>
    );
};