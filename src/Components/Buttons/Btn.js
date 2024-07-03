import React from 'react'
import styled from '@emotion/styled';

const Btn = styled.button`
  background-color: ${(props) => props.bgColor};
  border: none;
  border-radius: 4px;
  color: white;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: darkorchid;
  }
`;


export default function PinkBtn() {
  return (
    <div>
      <Btn
        bgColor={'pink'}
      >
        Button
      </Btn>
    </div>
  )
}
