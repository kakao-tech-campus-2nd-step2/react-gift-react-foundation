/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ImageProps {
  src: string;
  width?: number;
  ratio?: string;
  radius?: number | string;
}

const Image = (props: ImageProps) => {
  const { src, width = 100, ratio = '1/1', radius } = props;
  const wRatio = Number(ratio.split('/')[0]);
  const hRatio = Number(ratio.split('/')[1]);

  return (
    <div
      css={css`
        background-image: url(${src});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: ${width}px;
        height: ${width * (hRatio / wRatio)}px;
        border-radius: ${radius === 'circle' ? `${50}%` : `${radius}px`};
      `}
    />
  );
};

export default Image;
