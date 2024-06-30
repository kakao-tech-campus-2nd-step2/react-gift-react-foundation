import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import GoodsItem, { GoodsItemProps } from './GoodsItem'

export default {
  title: 'Components/GoodsItem',
  component: GoodsItem,
} as Meta

const Template: StoryFn<GoodsItemProps> = args => <GoodsItem {...args} />

export const Default = Template.bind({})
Default.args = {
  imageSrc: 'https://via.placeholder.com/150',
  subtitle: '허브타임',
  title: '"생일/집들이 선물" 플렌느 마블 니치향수 디퓨저 200...',
  amount: 20900,
}

export const Ranking = Template.bind({})
Ranking.args = {
  imageSrc: 'https://via.placeholder.com/150',
  subtitle: '허브타임',
  title: '"생일/집들이 선물" 플렌느 마블 니치향수 디퓨저 200...',
  amount: 20900,
  rankingIndex: 1,
}
