import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "@components/UnderlineTextField";

const meta = {
  title: "Common/Form/Input/UnderlineTextField",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    invalid: {
      control: "boolean",
    },
    size: {
      control: false,
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "placeholder",
    disabled: false,
    invalid: false,
  },
};
