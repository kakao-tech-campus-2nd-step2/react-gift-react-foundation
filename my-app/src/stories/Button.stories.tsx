import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '../components/Button'; // 절대 경로가 안되서 상대경로로 지정

export default {
	title: 'Common/Button',
	component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
	<Button theme={args.theme} size={args.size} disabled={args.disabled} onClick={args.onClick}>
		{args.children}
	</Button>
);

export const Default = Template.bind({});
Default.args = {
	children: 'Button',
	theme: 'kakao',
	size: 'large',
};
