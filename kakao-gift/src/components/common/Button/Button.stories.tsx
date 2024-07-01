/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Button, { ButtonProps } from './Button'

export default {
    title: 'common/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: {
                type: 'select',
                options: ['kakao', 'default'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'large', 'responsive'],
            },
        },
    },
} as Meta

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

export const Kakao = Template.bind({})
Kakao.args = {
    theme: 'kakao',
    size: 'responsive',
    children: '버튼',
}

export const Default = Template.bind({})
Default.args = {
    theme: 'default',
    size: 'responsive',
    children: '버튼',
}
