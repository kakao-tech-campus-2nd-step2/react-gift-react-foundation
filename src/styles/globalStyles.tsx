// GlobalStyles.tsx

import { css } from '@emotion/react';

export const globalStyles = css`
  /* reset.css로 리셋한 후에 추가할 전역 스타일 */

  /* 기본 폰트 설정 */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  /* 기타 전역 스타일 */
  :root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
  }

  /* 반응형 디자인 */
  @media (max-width: 768px) {
    /* 작은 화면에 대한 스타일 */
    body {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    /* 큰 화면에 대한 스타일 */
    body {
      font-size: 16px;
    }
  }
`;
