import React from 'react';

interface InputProps {
  disabled?: boolean; // disabled prop 추가
  invalid?: boolean; // invalid prop 추가
  size?: 'small' | 'medium' | 'large' | 'responsive'; // size prop 추가
}

const Input: React.FC<InputProps> = ({
  disabled = false, // 기본값으로 false 설정
  invalid = false,
  size = 'medium',
  ...props
}: InputProps) => {
  const sizeClass = size === 'responsive' ? 'storybook-input--responsive' : `storybook-input--${size}`;
  const invalidClass = invalid ? 'storybook-input--invalid' : ''; // invalid prop을 기반으로 클래스 설정
  
  return (
    <input
      className={`storybook-input ${sizeClass} ${invalidClass}`}
      disabled={disabled} //input 요소에 적용
      {...props}
    />
  );
};

export default Input;