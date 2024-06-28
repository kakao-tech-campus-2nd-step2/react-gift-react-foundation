import * as styles from './styles';
import { InputProps } from './types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  disabled = false,
  invalid = false,
  inputSize = 'medium',
  ...props
}: InputProps) => {
  const getSizeInput = () => {
    switch (inputSize) {
      case 'small':
        return styles.SmallInput;
      case 'large':
        return styles.LargeInput;
      case 'responsive':
        return styles.ResponsiveInput;
      case 'medium':
      default:
        return styles.MediumInput;
    }
  };

  const StyledInput = getSizeInput();

  return <StyledInput disabled={disabled} invalid={invalid} {...props} />;
};
