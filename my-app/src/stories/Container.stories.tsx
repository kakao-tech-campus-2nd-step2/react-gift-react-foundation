import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Container from '../components/Container';

export default {
	title: 'Common/Layout/Container',
	component: Container,
	argTypes: {
		flexDirection: {
			control: 'radio',
			options: ['row', 'column'],
		},
		justifyContent: {
			control: 'radio',
			options: ['center', 'flex-start', 'flex-end', 'space-between', 'space-around'],
		},
		alignItems: {
			control: 'radio',
			options: ['center', 'flex-start', 'flex-end', 'baseline', 'stretch'],
		},
		maxWidth: {
			control: 'text',
		},
	},
} as Meta;

const Template: StoryFn<typeof Container> = (args) => <Container {...args}>Hello, world!</Container>;

export const Default = Template.bind({});
Default.args = {
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	maxWidth: '1200px',
};
