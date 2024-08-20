import { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
} as Meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    heading: "Welcome to My Site",
  },
};

export const CustomHeading: Story = {
  args: {
    heading: "Custom Heading Text",
  },
};
