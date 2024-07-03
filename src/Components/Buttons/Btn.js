import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const BtnStyle = styled.button`
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


export default function Btn({ bgColor }) {
  return (
    <div>
      <BtnStyle
        bgColor={bgColor}
      >
        Button
      </BtnStyle>
    </div>
  )
}

Btn.propTypes = {
  bgColor: PropTypes.string.isRequired,
};