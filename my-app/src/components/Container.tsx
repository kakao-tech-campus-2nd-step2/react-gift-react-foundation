import React from 'react';
import styled from '@emotion/styled';

interface ContainerProps {
	children: React.ReactNode;
	flexDirection?: 'row' | 'column';
	justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
	alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
	maxWidth?: string;
}

const ContainerWrapper = styled.div<ContainerProps>`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 16px;
	display: flex;
	flex-direction: ${(props) => props.flexDirection || 'row'};
	justify-content: ${(props) => props.justifyContent || 'center'};
	align-items: ${(props) => props.alignItems || 'center'};
`;

const Container: React.FC<ContainerProps> = ({ children, flexDirection, justifyContent, alignItems, maxWidth }) => {
	return (
		<ContainerWrapper
			flexDirection={flexDirection}
			justifyContent={justifyContent}
			alignItems={alignItems}
			maxWidth={maxWidth}
		>
			{children}
		</ContainerWrapper>
	);
};

export default Container;
