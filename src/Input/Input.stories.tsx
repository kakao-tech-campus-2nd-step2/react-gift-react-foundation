import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Input, { InputProps } from './Input'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta

const Template: StoryFn<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: '검색어를 입력해주세요.',
}

export const Small = Template.bind({})
Small.args = {
  size: 12,
  placeholder: 'Small Input - 검색어를 입력해주세요.',
}

export const Large = Template.bind({})
Large.args = {
  size: 20,
  placeholder: 'Large Input - 검색어를 입력해주세요.',
}

export const Responsive = Template.bind({})
Responsive.args = {
  size: undefined,
  placeholder: 'Responsive Input - 검색어를 입력해주세요.',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  placeholder: 'Disabled Input',
}

export const Invalid = Template.bind({})
Invalid.args = {
  invalid: true,
  placeholder: 'Invalid Input',
}
