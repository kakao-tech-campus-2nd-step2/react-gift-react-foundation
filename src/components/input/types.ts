export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Is the input disabled?
   */
  disabled?: boolean;
  /**
   * Is the input invalid?
   */
  invalid?: boolean;
  /**
   * How large should the input be?
   */
  inputSize?: 'small' | 'medium' | 'large' | 'responsive';
}
