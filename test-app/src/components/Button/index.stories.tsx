// eslint-disable-next-line import/no-duplicates
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Button',
  tags: ['autodocs'],
  args: {
    children: '버튼',
    theme: 'kakao',
    size: 'responsive',
    onClick: () => {
      alert('버튼 클릭');
    },
  },
  argTypes: {
    
  },
  render: (props) => (
    <div style={{ width: '120px' }}>
      <Button {...props} />
    </div>
  ),
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
