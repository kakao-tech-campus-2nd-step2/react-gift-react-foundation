import React from 'react';
import styled from '@emotion/styled';

interface ThemeProps {
	backgroundColor: string;
	color: string;
	border?: string;
}

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

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray';
	size?: 'large' | 'small' | 'responsive';
}

const themeStyles: { [key: string]: ThemeProps } = {
	kakao: {
		backgroundColor: '#FEE500',
		color: '#181600',
	},
	outline: {
		backgroundColor: 'transparent',
		color: '#333',
		border: '1px solid #333',
	},
	black: {
		backgroundColor: '#000',
		color: '#fff',
	},
	lightGray: {
		backgroundColor: '#f5f5f5',
		color: '#333',
	},
	darkGray: {
		backgroundColor: '#555',
		color: '#fff',
	},
};

const sizeStyles: { [key: string]: SizeProps } = {
	large: {
		padding: '15px 30px',
		fontSize: '20px',
	},
	small: {
		padding: '10px 15px',
		fontSize: '10px',
	},
	responsive: {
		padding: '12px 24px',
		fontSize: '14px',
		responsive: {
			small: {
				padding: '10px 15px',
				fontSize: '10px',
			},
			medium: {
				padding: '12px 24px',
				fontSize: '14px',
			},
			large: {
				padding: '15px 30px',
				fontSize: '20px',
			},
		},
	},
};

const ButtonStyled = styled.button<ButtonProps>`
	padding: ${(props) => sizeStyles[props.size || 'large'].padding};
	font-size: ${(props) => sizeStyles[props.size || 'large'].fontSize};
	background-color: ${(props) => themeStyles[props.theme || 'kakao'].backgroundColor};
	color: ${(props) => themeStyles[props.theme || 'kakao'].color};
	border: ${(props) => themeStyles[props.theme || 'kakao'].border || 'none'};
	border-radius: 10px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		opacity: 0.8;
	}

	&:disabled {
		background-color: grey;
		cursor: not-allowed;
	}

	${(props) =>
		props.size === 'responsive' &&
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

const Button: React.FC<ButtonProps> = ({ children, theme = 'kakao', size = 'large', ...props }) => (
	<ButtonStyled theme={theme} size={size} {...props}>
		{children}
	</ButtonStyled>
);

export default Button;
