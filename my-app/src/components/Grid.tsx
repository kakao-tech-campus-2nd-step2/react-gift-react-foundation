import React from 'react';
import styled from '@emotion/styled';

type ResponseGridStyle = {
	default: number;
	[breakpoint: string]: number;
};

interface GridProps {
	children: React.ReactNode;
	gap?: string;
	columns?: number | ResponseGridStyle;
}

const getGridTemplateColumns = (columns: number | ResponseGridStyle) => {
	if (typeof columns === 'number') {
		return `repeat(${columns}, 1fr)`;
	}
	let styles = `repeat(${columns.default}, 1fr);`;
	Object.entries(columns).forEach(([breakpoint, value]) => {
		if (breakpoint !== 'default') {
			styles += `
        @media (min-width: ${breakpoint}) {
          grid-template-columns: repeat(${value}, 1fr);
        }
      `;
		}
	});
	return styles;
};

const GridContainer = styled.div<GridProps>`
	display: grid;
	gap: ${(props) => props.gap || '16px'};
	grid-template-columns: ${(props) => getGridTemplateColumns(props.columns || 4)};
`;

interface GridItemProps {
	children: React.ReactNode;
}

const GridItemWrapper = styled.div``;

const Grid: React.FC<GridProps> = ({ children, gap, columns }) => {
	return (
		<GridContainer gap={gap} columns={columns}>
			{React.Children.map(children, (child) => (
				<GridItemWrapper>{child}</GridItemWrapper>
			))}
		</GridContainer>
	);
};

const GridItem: React.FC<GridItemProps> = ({ children }) => {
	return <GridItemWrapper>{children}</GridItemWrapper>;
};

export { Grid, GridItem };
