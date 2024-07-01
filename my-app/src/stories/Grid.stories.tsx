import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Grid } from '../components/Grid';

export default {
	title: 'Common/Layout/Grid',
	component: Grid,
	argTypes: {
		gap: {
			control: 'text',
		},
		columns: {
			control: 'object',
		},
	},
} as Meta;

const Template: StoryFn<typeof Grid> = (args) => (
	<Grid {...args}>
		{Array.from({ length: 16 }, (_, i) => (
			<div key={`item-${i + 1}`}>{i + 1}</div>
		))}
	</Grid>
);

export const NumberColumns = Template.bind({});
NumberColumns.args = {
	gap: '16px',
	columns: 4,
};

export const ResponsiveColumns = Template.bind({});
ResponsiveColumns.args = {
	gap: '16px',
	columns: { default: 1, '600px': 2, '900px': 3 },
};
