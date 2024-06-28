import React from 'react';
import styled from '@emotion/styled';

interface ThemeProps {
	primaryColor: string;
	secondaryColor: string;
}

interface SizeProps {
	small: string;
	medium: string;
	large: string;
	responsive?: {
		small: string;
		medium: string;
		large: string;
	};
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: ThemeProps;
	size?: 'small' | 'medium' | 'large' | 'responsive';
}

const defaultTheme: ThemeProps = {
	primaryColor: '#3498db',
	secondaryColor: '#2ecc71',
};

const defaultSize: SizeProps = {
	small: '8px 16px',
	medium: '12px 24px',
	large: '16px 32px',
	responsive: {
		small: '8px 16px',
		medium: '12px 24px',
		large: '16px 32px',
	},
};

const ButtonStyled = styled.button<ButtonProps>`
	padding: ${(props) => (props.size ? defaultSize[props.size] : defaultSize.medium)};
	color: white;
	background-color: ${(props) => (props.theme ? props.theme.primaryColor : defaultTheme.primaryColor)};
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: ${(props) => (props.theme ? props.theme.secondaryColor : defaultTheme.secondaryColor)};
	}

	&:disabled {
		background-color: grey;
		cursor: not-allowed;
	}

	${(props) =>
		props.size === 'responsive' &&
		`
    @media (max-width: 600px) {
      padding: ${defaultSize.responsive?.small};
    }
    @media (min-width: 601px) and (max-width: 900px) {
      padding: ${defaultSize.responsive?.medium};
    }
    @media (min-width: 901px) {
      padding: ${defaultSize.responsive?.large};
    }
  `}
`;

const Button: React.FC<ButtonProps> = ({ children, theme, size, ...props }) => (
	<ButtonStyled theme={theme} size={size} {...props}>
		{children}
	</ButtonStyled>
);

export default Button;
