import React from 'react';
import './image.css';

interface ImageProps {
    src: string; // 이미지 링크
    radius?: number | 'circle';
    ratio?: '16:9' | 'square';
    width?: string;
}

export const Image = ({
    src = 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    radius,
    ratio,
    width,
    ...props
}: ImageProps) => {
    const borderRadiusStyle = radius === 'circle' ? '50%' : `${radius}%`;
    const aspectRatioStyle = ratio === '16:9' ? '16/9' : '1/1';
    const widthStyle = `${width}px`;

    return (
        <img
            src={src}
            className={['storybook-image', `storybook-image--${radius}`].join(' ')}
            style={{
                borderRadius: borderRadiusStyle,
                aspectRatio: aspectRatioStyle,
                width: widthStyle
            }}
            {...props}
        />
    );
};