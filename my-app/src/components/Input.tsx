import React from 'react';
import styled from '@emotion/styled';

interface SizeProps {
	padding: string;
	fontSize: string;
	responsive?: {
		small: {
			padding: string;
			fontSize: string;
		};
		medium: {
			padding: string;
			fontSize: string;
		};
		large: {
			padding: string;
			fontSize: string;
		};
	};
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	disabled?: boolean;
	invalid?: boolean;
	inputSize?: 'large' | 'small' | 'responsive';
}

const sizeStyles: { [key: string]: SizeProps } = {
	large: {
		padding: '20px 30px',
		fontSize: '16px',
	},
	small: {
		padding: '10px 15px',
		fontSize: '12px',
	},
	responsive: {
		padding: '15px 25px',
		fontSize: '14px',
		responsive: {
			small: {
				padding: '10px 15px',
				fontSize: '12px',
			},
			medium: {
				padding: '12px 24px',
				fontSize: '14px',
			},
			large: {
				padding: '20px 30px',
				fontSize: '16px',
			},
		},
	},
};

const InputStyled = styled.input<{ inputSize?: 'large' | 'small' | 'responsive'; invalid?: boolean }>`
	padding: ${(props) => sizeStyles[props.inputSize || 'large'].padding};
	font-size: ${(props) => sizeStyles[props.inputSize || 'large'].fontSize};
	border: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
	border-radius: 4px;
	outline: none;
	box-sizing: border-box;
	transition: border-color 0.3s;

	&:disabled {
		background-color: #f5f5f5;
		cursor: not-allowed;
	}

	${(props) =>
		props.inputSize === 'responsive' &&
		`
    @media (max-width: 600px) {
      padding: ${sizeStyles.responsive.responsive?.small.padding};
      font-size: ${sizeStyles.responsive.responsive?.small.fontSize};
    }
    @media (min-width: 601px) and (max-width: 900px) {
      padding: ${sizeStyles.responsive.responsive?.medium.padding};
      font-size: ${sizeStyles.responsive.responsive?.medium.fontSize};
    }
    @media (min-width: 901px) {
      padding: ${sizeStyles.responsive.responsive?.large.padding};
      font-size: ${sizeStyles.responsive.responsive?.large.fontSize};
    }
  `}
`;

const Input: React.FC<InputProps> = ({ disabled, invalid, inputSize = 'large', ...props }) => (
	<InputStyled disabled={disabled} invalid={invalid} inputSize={inputSize} {...props} />
);

export default Input;
