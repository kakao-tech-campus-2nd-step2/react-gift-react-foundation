import { css } from '@emotion/css';

export interface ButtonProps {
  theme: string;
  size: 'small' | 'medium' | 'large' | 'responsive';
  disabled: boolean;
  onClick: () => void;
}

const Button = ({ theme, size, disabled, onClick }: ButtonProps) => {
  const buttonStyles = css`
    display: inline-block;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.btn-${theme} {
      background-color: ${theme === 'primary'
        ? '#ffea00'
        : theme === 'secondary'
          ? '#6c757d'
          : '#343a40'};
      color: #000000;

      &:hover {
        background-color: ${theme === 'primary'
          ? '#f07e61'
          : theme === 'secondary'
            ? '#545b62'
            : '#23272b'};
      }
    }

    &.btn-small {
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
    }

    &.btn-medium {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }

    &.btn-large {
      padding: 0.75rem 1.5rem;
      font-size: 1.25rem;
    }

    &.btn-responsive {
      padding: 0.5rem 1rem;
      font-size: 1rem;

      @media (max-width: 767px) {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
      }
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  return (
    <button
      className={`btn ${buttonStyles} btn-${theme} btn-${size}`}
      type='button'
      disabled={disabled}
      onClick={onClick}
    >
      Kakao
    </button>
  );
};

export default Button;
