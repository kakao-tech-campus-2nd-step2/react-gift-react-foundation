import type { Meta, StoryObj } from '@storybook/react'
import { Image } from './Image'

const meta: Meta<typeof Image> = {
  title: 'Example/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultImage: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'Kakao Friends',
  },
}
