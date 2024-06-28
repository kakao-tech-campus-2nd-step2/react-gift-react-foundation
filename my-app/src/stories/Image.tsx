import React from 'react';
import './image.css';

interface ImageProps{
  ratio?: '16/9' | 'square'; // 비율 설정
  radius?: number;
}

const Image: React.FC<ImageProps> = ({
  ratio = '16/9', // 기본값
  radius = 10,
  ...props
}: ImageProps) => {
  const ratioClass = `storybook-image--${ratio.replace('/', '-')}`;

  return (
    <div className={`storybook-image ${ratioClass}`} style={{ borderRadius: `${radius}px` }}>
      <img />
    </div>
  );
};

export default Image;
