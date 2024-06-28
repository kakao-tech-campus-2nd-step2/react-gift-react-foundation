import React from 'react';
import './ranking.css';

interface GoodsItemProps {
    imageSrc: string; // 이미지 링크
    subtitle?: string,
    title?: string,
    amount?: number
}

export const Ranking = ({
    imageSrc = 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle,
    title,
    amount,
    ...props
}: GoodsItemProps) => {

    return (
        <img
            src={imageSrc}
            {...props}
        />
    );
};