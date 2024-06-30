import styled from '@emotion/styled';

// 기본 Input 스타일
export const InputBase = styled.input<{
  invalid?: boolean;
  disabled?: boolean;
}>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ invalid }) => (invalid ? 'red' : '#ccc')};
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : 'white')};
  color: ${({ disabled }) => (disabled ? '#aaa' : 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  &:focus {
    outline: none;
    border-color: ${({ invalid }) => (invalid ? 'red' : '#1ea7fd')};
  }
`;

// 사이즈 스타일
export const SmallInput = styled(InputBase)`
  font-size: 12px;
  padding: 8px 12px;
`;

export const MediumInput = styled(InputBase)`
  font-size: 14px;
  padding: 10px 14px;
`;

export const LargeInput = styled(InputBase)`
  font-size: 16px;
  padding: 12px 16px;
`;

// 반응형 스타일
export const ResponsiveInput = styled(InputBase)`
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 8px 12px;
  }
  @media (min-width: 600px) {
    font-size: 14px;
    padding: 10px 14px;
  }
  @media (min-width: 900px) {
    font-size: 16px;
    padding: 12px 16px;
  }
`;
