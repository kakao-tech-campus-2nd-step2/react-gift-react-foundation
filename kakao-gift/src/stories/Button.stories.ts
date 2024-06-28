import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    theme: { control: 'radio', options: ['kakao', 'outline', 'black', 'lightGray'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Kakao: Story = {
  args: {
    label: 'Kakao Button',
    theme: 'kakao',
  },
}

export const Outline: Story = {
  args: {
    label: 'Outline Button',
    theme: 'outline',
  },
}

export const Black: Story = {
  args: {
    label: 'Black Button',
    theme: 'black',
  },
}

export const LightGray: Story = {
  args: {
    label: 'Light Gray Button',
    theme: 'lightGray',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button',
    theme: 'kakao',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
    theme: 'kakao',
  },
}
