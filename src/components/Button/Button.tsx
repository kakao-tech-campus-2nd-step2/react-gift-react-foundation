import React from 'react';
import './button.css';

interface ButtonProps {
    children: string;
    theme?: string;
    size?: 'responsive' | 'small' | 'medium' | 'large';
    onClick?: () => void;
}

export const Button = ({
    children,
    size = 'responsive',
    theme,
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`].join(' ')}
            style={{ backgroundColor: theme }}
            {...props}
        >
            {children}
        </button>
    );
};
