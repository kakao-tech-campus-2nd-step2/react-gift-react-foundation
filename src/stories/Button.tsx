import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
   theme?: 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray'
}

const themeTypes = {
   kakao: css`
      background-color: rgb(254, 229, 0);
      color: rgb(17, 17, 17);
   `,
   outline: css`
      background-color: transparent;
      color: rgb(17, 17, 17);
      box-shadow: rgb(204, 204, 204) 0px 0px 0px 1px inset;
   `,
   black: css`
      background-color: rgb(17, 17, 17);
      color: #fff;
   `,
   lightGray: css`
      background-color: rgb(240, 240, 240);
      color: rgb(17, 17, 17);
   `,
   darkGray: css`
      background-color: rgb(68, 68, 68);
      color: #fff;
   `,
}

const CustomButton = styled.button<ButtonProps>`
   ${(props) => props.theme && themeTypes[props.theme as keyof typeof themeTypes]}

   border: none;
   border-radius: 4px;
   width: 100px;
   height: 40px;
   cursor: pointer;
   &:hover {
      opacity: 0.8;
   }
`

const Button: React.FC<ButtonProps> = ({ children, theme = 'kakao', ...props }) => {
   return (
      <CustomButton theme={theme} {...props}>
         {children || '버튼'}
      </CustomButton>
   )
}

export default Button
