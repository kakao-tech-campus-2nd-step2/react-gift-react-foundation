import type { Meta, StoryObj } from '@storybook/react';
import { useState } from '@storybook/preview-api';
import Input from './Input';

const meta = {
  title: 'COMMON/Form/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UnderlineTextField: Story = {
  args: {
    width: 500,
    height: 30,
  },
  render: function Render(args) {
    const [inputVal, setInputVal] = useState<string>('');
    return (
      <Input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...args}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
    );
  },
};
