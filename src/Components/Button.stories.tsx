import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    theme: { control: "radio", options: ["primary", "secondary", "danger"] },
    size: {
      control: "radio",
      options: ["small", "medium", "large", "responsive"],
    },
    children: { control: "text" },
  },
  args: { onClick: () => {} },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    theme: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    theme: "secondary",
    children: "Secondary Button",
  },
};

export const Danger: Story = {
  args: {
    theme: "danger",
    children: "Danger Button",
  },
};

export const Responsive: Story = {
  args: {
    theme: "primary",
    size: "responsive",
    children: "Responsive Button",
  },
};
