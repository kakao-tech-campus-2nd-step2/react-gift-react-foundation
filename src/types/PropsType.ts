export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    theme: 'basic' | 'kakao',
    size: number | 'responsive'
}