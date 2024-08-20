import { Meta, StoryObj } from "@storybook/react";
import ServiceCard from "./ServiceCard";

export default {
  title: "Components/ServiceCard",
  component: ServiceCard,
} as Meta;

type Story = StoryObj<typeof ServiceCard>;

export const Default: Story = {
  args: {
    title: "Service Card",
    content: "This is a service card component",
  },
};
