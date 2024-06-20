import { Meta, StoryObj } from '@storybook/react';
import ChooseCard from './ChooseCard';

export default {
  title: 'Components/ChooseCard',
  component: ChooseCard,
} as Meta;

type Story = StoryObj<typeof ChooseCard>;

export const Default: Story = {
  args: {
    title: 'Choose Card',
    content: 'This is a choose card component',
  },
};
