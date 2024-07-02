import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
   title: 'Common/Button',
   component: Button,
   tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      theme: 'kakao',
      size: 'responsive',
   },
}
