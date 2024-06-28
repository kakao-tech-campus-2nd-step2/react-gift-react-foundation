import React, { ReactNode, FC } from 'react';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large' | 'responsive';
  theme?: 'primary' | 'secondary' | 'kakao';
  children: ReactNode;
  onClick?: () => void;
  [key: string]: any;
}

const Button: FC<ButtonProps> = ({
  size = 'medium',
  theme = 'primary',
  children,
  onClick,
  ...props
}) => {
  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
    responsive: 'px-4 py-2 text-base md:px-6 md:py-3 md:text-lg',
  };

  const themeStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    kakao: 'bg-yellow-400 text-black hover:bg-yellow-500',
  };

  const buttonStyles = `rounded-md font-medium transition-colors duration-300 ${sizeStyles[size]} ${themeStyles[theme]}`;

  return (
    <button className={buttonStyles} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
export type { ButtonProps };