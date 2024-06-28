// styles.ts
import styled from '@emotion/styled';

// 기본 버튼 스타일
export const ButtonBase = styled.button<{ backgroundColor?: string }>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
`;

// Primary 스타일
export const PrimaryButton = styled(ButtonBase)`
  color: white;
  background-color: ${({ backgroundColor }) => backgroundColor || '#1ea7fd'};
`;

// Secondary 스타일
export const SecondaryButton = styled(ButtonBase)`
  color: #333;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
`;

// 사이즈 스타일
export const SmallButton = styled(ButtonBase)`
  font-size: 12px;
  padding: 10px 16px;
`;

export const MediumButton = styled(ButtonBase)`
  font-size: 14px;
  padding: 11px 20px;
`;

export const LargeButton = styled(ButtonBase)`
  font-size: 16px;
  padding: 12px 24px;
`;

// 반응형 스타일
export const ResponsiveButton = styled(ButtonBase)`
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 10px 16px;
  }
  @media (min-width: 600px) {
    font-size: 14px;
    padding: 11px 20px;
  }
  @media (min-width: 900px) {
    font-size: 16px;
    padding: 12px 24px;
  }
`;
