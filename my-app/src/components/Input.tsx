import React from 'react';
import styled from '@emotion/styled';

interface ResponsiveSize {
	fontSize?: string;
}

interface SizeProps {
	fontSize: string;
	responsive?: {
		small: ResponsiveSize;
		medium: ResponsiveSize;
		large: ResponsiveSize;
	};
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	disabled?: boolean;
	invalid?: boolean;
	inputSize?: 'large' | 'small' | 'responsive';
}

const sizeStyles: { [key: string]: SizeProps } = {
	large: {
		fontSize: '20px',
	},
	small: {
		fontSize: '14px',
	},
	responsive: {
		fontSize: '16px',
		responsive: {
			small: {
				fontSize: '14px',
			},
			medium: {
				fontSize: '16px',
			},
			large: {
				fontSize: '20px',
			},
		},
	},
};

const InputStyled = styled.input<{ inputSize?: 'large' | 'small' | 'responsive'; invalid?: boolean }>`
	border: none;
	border-bottom: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
	font-size: ${(props) => sizeStyles[props.inputSize || 'large'].fontSize};
	outline: none;
	transition: border-color 0.3s;
	padding: 10px 0;

	&:focus {
		border-bottom-color: #000;
	}

	&:disabled {
		background-color: transparent;
		cursor: not-allowed;
	}

	${(props) =>
		props.inputSize === 'responsive' &&
		`
    @media (max-width: 600px) {
      font-size: ${sizeStyles.responsive.responsive?.small.fontSize};
    }
    @media (min-width: 601px) and (max-width: 900px) {
      font-size: ${sizeStyles.responsive.responsive?.medium.fontSize};
    }
    @media (min-width: 901px) {
      font-size: ${sizeStyles.responsive.responsive?.large.fontSize};
    }
  `}
`;

const Input: React.FC<InputProps> = ({ disabled, invalid, inputSize = 'large', ...props }) => (
	<InputStyled disabled={disabled} invalid={invalid} inputSize={inputSize} {...props} />
);

export default Input;
