import { css } from '@emotion/css';

export interface InputProps {
  size: 'small' | 'medium' | 'large' | 'responsive';
  disabled: boolean;
  invalid: boolean;
}

const Input = ({ size, disabled, invalid }: InputProps) => {
  const inputStyles = css`
    padding: 0.5rem 1rem;
    border: 1px solid ${invalid ? '#dc3545' : '#ced4da'};
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &.input-small {
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
    }

    &.input-medium {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }

    &.input-large {
      padding: 0.75rem 1.5rem;
      font-size: 1.25rem;
    }

    &.input-responsive {
      padding: 0.5rem 1rem;
      font-size: 1rem;

      @media (max-width: 767px) {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
      }
    }

    &:disabled {
      background-color: #f8f9fa;
      cursor: not-allowed;
      opacity: 0.5;
    }
  `;

  return (
    <input
      className={`input ${inputStyles} input-${size} ${invalid ? 'invalid' : ''}`}
      type='text'
      disabled={disabled}
      placeholder='카카오 테크 캠퍼스'
    />
  );
};

export default Input;
