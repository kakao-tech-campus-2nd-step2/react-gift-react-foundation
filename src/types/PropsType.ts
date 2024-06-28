export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    theme: 'basic' | 'kakao',
    size: number | 'responsive'
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>{
    disabled: boolean,
    invalid: boolean,
    size: number | 'responsive'
}