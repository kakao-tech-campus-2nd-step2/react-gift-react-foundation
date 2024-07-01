import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'kakao' | 'naver' | 'discord';
  elementSize?: 'small' | 'medium' | 'large' | 'responsive';
  text?: string;
  backgroundColor?: string;
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

const getThemeStyles = (theme: 'kakao' | 'naver' | 'discord') => {
  switch (theme) {
    case 'kakao':
      return {
        backgroundColor: '#ffeb3b',
        color: '#000',
      };
    case 'naver':
      return {
        backgroundColor: '#5ac467',
        color: '#fff',
      };
    case 'discord':
      return {
        backgroundColor: '#7289da',
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

const Button: React.FC<ButtonProps> = ({ theme = 'kakao', elementSize = 'medium', text, ...props }) => {
  return <StyledButton theme={theme} elementSize={elementSize} {...props}>{text}</StyledButton>;
};

export default Button;
