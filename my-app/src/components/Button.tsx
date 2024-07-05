import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray'
  size?: 'large' | 'small' | 'responsive'
}

const baseStyles = css`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
`

const themeStyles = {
  kakao: css`
    background-color: #ffeb00;
    color: #000;
    font-size: 16px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  outline: css`
    background-color: transparent;
    border: 1px solid #000;
    color: #000;
  `,
  black: css`
    background-color: #000;
    color: #fff;
  `,
  lightGray: css`
    background-color: #d3d3d3;
    color: #000;
  `,
  darkGray: css`
    background-color: #a9a9a9;
    color: #fff;
  `,
}

const sizeStyles = {
  large: css`
    font-size: 20px;
    padding: 15px 30px;
  `,
  small: css`
    font-size: 12px;
    padding: 5px 15px;
  `,
  responsive: css`
    @media (max-width: 600px) {
      font-size: 12px;
      padding: 5px 15px;
    }
    @media (min-width: 601px) and (max-width: 1200px) {
      font-size: 16px;
      padding: 10px 20px;
    }
    @media (min-width: 1201px) {
      font-size: 20px;
      padding: 15px 30px;
    }
  `,
}

const getThemeStyle = (theme?: ButtonProps['theme']) => {
  return theme ? themeStyles[theme] : ''
}

const getSizeStyle = (size?: ButtonProps['size']) => {
  return size ? sizeStyles[size] : ''
}

const StyledButton = styled.button<ButtonProps>`
  ${baseStyles}
  ${({ theme }) => getThemeStyle(theme)}
  ${({ size }) => getSizeStyle(size)}
`

const Button: React.FC<ButtonProps> = ({
  theme = 'kakao',
  size = 'large',
  children,
  ...props
}) => {
  return (
    <StyledButton theme={theme} size={size} {...props}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  theme: PropTypes.oneOf([
    'kakao',
    'outline',
    'black',
    'lightGray',
    'darkGray',
  ]),
  size: PropTypes.oneOf(['large', 'small', 'responsive']),
  children: PropTypes.node.isRequired,
}

export default Button
