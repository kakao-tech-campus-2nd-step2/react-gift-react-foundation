// Button.tsx
import * as styles from './styles';
import { ButtonProps } from './types';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const getSizeButton = () => {
    switch (size) {
      case 'small':
        return styles.SmallButton;
      case 'large':
        return styles.LargeButton;
      case 'responsive':
        return styles.ResponsiveButton;
      case 'medium':
      default:
        return styles.MediumButton;
    }
  };

  const StyledButton = getSizeButton();
  const FinalStyledButton = primary
    ? styles.PrimaryButton
    : styles.SecondaryButton;

  return (
    <FinalStyledButton
      as={StyledButton}
      backgroundColor={backgroundColor}
      {...props}
    >
      {label}
    </FinalStyledButton>
  );
};
