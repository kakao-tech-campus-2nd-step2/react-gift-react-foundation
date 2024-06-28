import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Button.css'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'default' | 'primary' | 'secondary' | 'kakao'
  size?: 'small' | 'medium' | 'large' | 'responsive'
}

const Button: React.FC<ButtonProps> = ({
  theme = 'default',
  size = 'medium',
  children,
  ...props
}) => {
  return (
    <button className={`button ${theme} ${size}`} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  theme: PropTypes.oneOf(['default', 'primary', 'secondary', 'kakao']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'responsive']),
  children: PropTypes.node.isRequired,
}

export default Button
