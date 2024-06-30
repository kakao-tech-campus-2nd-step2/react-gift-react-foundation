import styled, { css } from 'styled-components'

export const StyledImageWrapper = styled.div<{ ratio?: number | string }>`
  position: relative;
  width: 100%;
  overflow: hidden;

  ${({ ratio }) =>
    typeof ratio === 'number' &&
    css`
      padding-top: ${100 / ratio}%; /* 주어진 비율에 따라 높이 설정 */
    `}
  ${({ ratio }) =>
    ratio === 'square' &&
    css`
      padding-top: 100%; /* 정사각형 비율 */
    `}
`

export const StyledImage = styled.img<{ radius?: number | string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({ radius }) =>
    typeof radius === 'number' &&
    css`
      border-radius: ${radius}px;
    `}
  ${({ radius }) =>
    radius === 'circle' &&
    css`
      border-radius: 50%;
    `}
`
