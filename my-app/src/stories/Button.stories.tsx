import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '../components/Button'; // 경로 수정

export default {
	title: 'Components/Button',
	component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
	<Button theme={args.theme} size={args.size} disabled={args.disabled} onClick={args.onClick}>
		{args.children}
	</Button>
);

export const Primary = Template.bind({});
Primary.args = {
	children: 'Primary Button',
	theme: { primaryColor: '#3498db', secondaryColor: '#2ecc71' },
	size: 'medium',
	disabled: false,
	onClick: () => alert('Primary Button clicked!'),
};

export const Responsive = Template.bind({});
Responsive.args = {
	children: 'Responsive Button',
	theme: { primaryColor: '#e74c3c', secondaryColor: '#8e44ad' },
	size: 'responsive',
	disabled: false,
	onClick: () => alert('Responsive Button clicked!'),
};
