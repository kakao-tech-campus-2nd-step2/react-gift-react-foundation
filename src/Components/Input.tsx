import React from 'react';
import './input.css';

interface InputProps {
    value?:string,
    /**
     * input란이 활성화되었는지 여부
     */
    disabled?: boolean;
    /**
     * input 값이 잘못되었는지 여부
     */
    invalid?: boolean;
    size?: 'small' | 'medium' | 'large' | 'responsive';
  onChange?: () => void;
}

export const Input = ({
    value = "",
  disabled = false,
  invalid = true,
  size = 'medium',
//   onChange,
  ...props
}: InputProps) => {
  return (
    <input
      type="input"
      value={value}
      disabled={disabled}
      required={invalid}
      className={['storybook-input', `storybook-input--${size}`].join(' ')}
      {...props}
    >
    </input>
  );
};
