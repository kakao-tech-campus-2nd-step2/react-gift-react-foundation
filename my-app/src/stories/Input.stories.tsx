import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from '../components/Input';

export default {
	title: 'Common/Form/Input/UnderlineTextField',
	component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	placeholder: 'placeholder',
};
