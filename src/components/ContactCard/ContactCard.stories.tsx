import { Meta, StoryObj } from '@storybook/react';
import ContactCard from './ContactCard';

export default {
  title: 'Components/ContactCard',
  component: ContactCard,
} as Meta;

type Story = StoryObj<typeof ContactCard>;

export const Default: Story = {
    args: {},
};