import { Meta, StoryFn } from '@storybook/react';
import UnderlineTextField, {
  UnderlineTextFieldProps,
} from './UnderlineTextField';

export default {
  title: 'common/Form/Input/UnderlineTextField',
  component: UnderlineTextField,
  args: {
    placeholder: 'placeholder',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'large', 'responsive'],
      },
    },
    invalid: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} as Meta;
const Template: StoryFn<UnderlineTextFieldProps> = args => (
  <UnderlineTextField {...args} />
);

export const Default = Template.bind({});
Default.args = {};
