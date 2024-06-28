import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'kakao' | 'naver';
  elementSize?: 'small' | 'medium' | 'large' | 'responsive';
}

const getSizeStyles = (size: 'small' | 'medium' | 'large' | 'responsive') => {
  switch (size) {
    case 'small':
      return {
        width: '80px',
        height: '30px',
      };
    case 'medium':
      return {
        width: '100px',
        height: '40px',
      };
    case 'large':
      return {
        width: '120px',
        height: '50px',
      };
    case 'responsive':
      return {
        width: '100%',
        height: 'auto',
      };
    default:
      return {
        width: 'auto',
        height: '40px',
      };
  }
};

const getThemeStyles = (theme: 'kakao' | 'naver') => {
  switch (theme) {
    case 'kakao':
      return {
        backgroundColor: '#007bff',
        color: '#fff',
      };
    case 'naver':
      return {
        backgroundColor: '#6c757d',
        color: '#fff',
      };
    default:
      return {
        backgroundColor: '#fff',
        color: '#000',
      };
  }
};

const StyledButton = styled.button<ButtonProps>`
  ${(props) => getSizeStyles(props.elementSize || 'medium')}
  ${(props) => getThemeStyles(props.theme || 'primary')}
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({ theme = 'kakao', elementSize = 'medium', ...props }) => {
  return <StyledButton theme={theme} elementSize={elementSize} {...props} />;
};

export default Button;
