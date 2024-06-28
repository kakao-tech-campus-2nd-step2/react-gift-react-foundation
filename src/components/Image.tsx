/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  ratio?: string;
  radius?: number | string;
}

const Image = (props: ImageProps) => {
  const { src, alt, width = 100, ratio = '16/9', radius = '5px' } = props;
  const wRatio = Number(ratio.split('/')[0]);
  const hRatio = Number(ratio.split('/')[1]);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      css={css`
        width: ${width}px;
        height: ${width * (hRatio / wRatio)}px;
        border-radius: ${radius === 'circle' ? `${50}%` : `${radius}px`};
      `}
    />
  );
};

export default Image;
