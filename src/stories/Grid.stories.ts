import Grid from "@components/Layout/Grid";
import { Meta, StoryObj } from "@storybook/react/*";
import NumberColumns from "./NumberColumns";

const meta = {
  title: "Example/Layout/Grid",
  component: Grid,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    gap: {
      control: {
        type: "number",
      },
    },
    columns: {
      control: {
        type: "number",
      },
    },
    children: {},
  },
  args: {
    gap: 16,
    columns: 3,
    children: NumberColumns,
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gap: 0,
    columns: 3,
    children: NumberColumns,
  },
};

export const Responsive: Story = {
  args: {
    gap: 0,
    columns: {
      initial: 1,
      lg: 4,
      md: 3,
      sm: 2,
    },
    children: NumberColumns,
  },
};
