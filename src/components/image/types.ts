export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Ratio of the image (e.g., 16/9, 4/3)
   */
  ratio?: number | 'square';
  /**
   * Border radius of the image
   */
  radius?: number | 'circle';
}
