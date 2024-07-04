import styled from '@emotion/styled';

import { breakpoints } from '@/styles/variants'; // breakpoints는 미디어 쿼리를 위해 사용됩니다.

type Props = {
  theme?: 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray'; // 버튼 테마 정의
  size?: 'large' | 'small' | 'responsive'; // 버튼 사이즈
} & React.ButtonHTMLAttributes<HTMLButtonElement>; // 버튼의 기본 속성 지원

// Button 컴포넌트 정의, props를 통해 스타일링을 적용
export const Button: React.FC<Props> = ({ ...props }: Props) => {
  return <Wrapper {...props} />; // Wrapper 컴포넌트를 사용하여 스타일링된 버튼을 반환
};

// Wrapper 컴포넌트를 styled.button을 사용하여 스타일링
const Wrapper = styled.button<Pick<Props, 'theme' | 'size'>>(
  {
    width: '100%',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 200ms',
  },
  // 사이즈별 스타일 정의
  ({ size = 'responsive' }) => {
    const largeStyle = {
      height: '60px',
      fontSize: '16px',
    };

    const smallStyle = {
      height: '40px',
      fontSize: '15px',
    };
    if (size === 'large') {
      return largeStyle;
    }

    if (size === 'small') {
      return smallStyle;
    }
    // size가 'responsive'인 경우 미디어 쿼리를 통해 스타일 적용
    return {
      ...smallStyle,
      [`@media screen and (min-width:${breakpoints.sm})`]: {
        ...largeStyle,
      },
    };
  },
  // 테마별 스타일 정의
  ({ theme = 'kakao' }) => {
    if (theme === 'outline') {
      return {
        boxShadow: '0 0 0 1px #ccc inset',
        color: '#999',

        '&:hover': {
          backgroundColor: '#f8f8f8',
        },
      };
    }

    if (theme === 'black') {
      return {
        color: '#fff',
        backgroundColor: '#111',

        '&:hover': {
          backgroundColor: '#222',
        },
      };
    }

    if (theme === 'lightGray') {
      return {
        color: '#111',
        backgroundColor: '#f0f0f0',

        '&:hover': {
          backgroundColor: '#ebebeb',
        },
      };
    }

    if (theme === 'darkGray') {
      return {
        color: '#fff',
        backgroundColor: '#444',

        '&:hover': {
          backgroundColor: '#555',
        },
      };
    }

    return {
      color: '#111',
      backgroundColor: '#fee500',

      '&:hover': {
        backgroundColor: '#fada0a',
      },
    };
  },
);
