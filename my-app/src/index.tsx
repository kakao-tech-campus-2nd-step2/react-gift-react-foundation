import React from 'react';

interface InputProps {
  disabled?: boolean; // disabled prop 추가
  invalid?: boolean; // invalid prop 추가
  size?: 'small' | 'medium' | 'large' | 'responsive';
}

const Input: React.FC<InputProps> = ({
  disabled = false, // 기본값으로 false 설정
  size = 'medium',
  ...props
}: InputProps) => {
  const sizeClass = size === 'responsive' ? 'storybook-input--responsive' : `storybook-input--${size}`;
  
  return (
    <input
      className={`storybook-input ${sizeClass}`}
      disabled={disabled} //input 요소에 적용
      {...props}
    />
  );
};

export default Input;