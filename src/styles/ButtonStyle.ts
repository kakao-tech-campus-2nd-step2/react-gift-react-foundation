import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { ButtonProps } from "../types/PropsType"

const ButtonStyle = styled.button<ButtonProps>`
  ${({ theme }) => {
    switch(theme){
      case 'basic':
        return css`
          background-color: #111111;
          color: #f8f8f8;
        `
      case 'kakao':
        return css`
          background-color: rgb(254, 229, 0);
          color: #111111;
        `
      default:
        return css``
    }
  }}
  padding: 5px 10px;
  border: solid 2px #f1f1f1;
  border-radius: 10px;
`

export default ButtonStyle;