import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'common/Button',
  component: Button,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <div style={{ display: 'flex' }}>
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: '버튼',
  onClick: () => {
    window.alert('버튼 클릭');
  },
};
