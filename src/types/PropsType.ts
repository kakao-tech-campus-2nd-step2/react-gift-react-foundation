export interface ButtonProps {
    theme: 'basic' | 'kakao',
    size: number | 'responsive',
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
}
export interface InputProps{
    disabled: boolean,
    invalid: boolean,
    sizeI: number | 'responsive',
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}
export interface ImageProps{
    ratio?: number | 'square',
    radius: number | 'circle',
    imageProps?: React.ImgHTMLAttributes<HTMLImageElement>
}