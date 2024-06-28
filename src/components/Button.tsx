/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface ButtonProps {
  width?: number;
  height?: number;
  theme?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: ReactNode;
}
const kakao = css`
  background-color: #fee500;
`;
const danger = css`
  background-color: red;
  color: white;
`;

function Button(props: ButtonProps) {
  const {
    width = 300,
    height,
    theme = 'kakao',
    type = 'button',
    onClick,
    children,
  } = props;

  let themeBtn;
  if (theme === 'kakao') {
    themeBtn = kakao;
  } else if (theme === 'danger') {
    themeBtn = danger;
  }
  return (
    <button
      // TODO: 고치기
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
      css={css`
        width: ${width}px;
        height: ${height}px;
        padding: 8px 0;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        &:hover {
          opacity: 80%;
        }
        ${themeBtn}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
