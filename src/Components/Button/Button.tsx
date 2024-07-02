import styled from '@emotion/styled';

export interface ButtonProps {
  theme: 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray';
  size: 'large' | 'small' | 'responsive';
  label?: string;
  onClick: () => void;
}

const themeStyles: Record<
  string,
  { backgroundColor: string; outline: string; color: string }
> = {
  kakao: {
    backgroundColor: 'yellow',
    outline: 'none',
    color: 'black',
  },
  outline: {
    backgroundColor: 'transparent',
    outline: '1px solid lightGray',
    color: 'black',
  },
  black: {
    backgroundColor: 'black',
    outline: 'none',
    color: 'white',
  },
  lightGray: {
    backgroundColor: 'lightgray',
    outline: 'none',
    color: 'black',
  },
  darkGray: {
    backgroundColor: 'darkgray',
    outline: 'none',
    color: 'black',
  },
};

const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${(props) => themeStyles[props.theme].backgroundColor};
  outline: ${(props) => themeStyles[props.theme].outline};
  color: ${(props) => themeStyles[props.theme].color};
  width: 120px;
  height: ${(props) => (props.size === 'small' ? '40px' : '60px')};
  border: none;
  font-size: 16px;
  border-radius: 5px;
  @media (max-width: 400px) {
    height: 40px;
  }
`;

const Button = ({ theme, size, label, onClick }: ButtonProps) => (
  <ButtonStyled theme={theme} size={size} onClick={onClick}>
    {label}
  </ButtonStyled>
);

export default Button;
