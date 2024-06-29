import React from 'react'

import { ButtonProps } from '../types/PropsType';
import ButtonStyle from '../styles/ButtonStyle';


export default ({
  theme = 'basic',
  size = 'responsive',
  buttonProps
}: ButtonProps) => {
  return (
    <ButtonStyle theme={theme} size={size} {...buttonProps}>
      버튼
    </ButtonStyle>
  );
};