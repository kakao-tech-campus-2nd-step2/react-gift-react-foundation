export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    theme: 'basic' | 'kakao',
    size: number | 'responsive'
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    disabled: boolean,
    invalid: boolean,
    sizeI: number | 'responsive'
}