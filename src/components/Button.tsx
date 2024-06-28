import React from 'react'

import { ButtonProps } from '../types/PropsType';
import ButtonStyle from '../styles/ButtonStyle';


export default ({
  theme = 'basic',
  size = 'responsive'
}: ButtonProps) => {
  return (
    <ButtonStyle theme={theme} size={size}>
      버튼
    </ButtonStyle>
  );
};