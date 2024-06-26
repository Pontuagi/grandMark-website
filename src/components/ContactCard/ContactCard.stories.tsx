import { Meta, StoryObj } from '@storybook/react';
import ContactCard from './ContactCard';

export default {
  title: 'Components/ContactCard',
  component: ContactCard,
} as Meta;

type Story = StoryObj<typeof ContactCard>;

export const Default: Story = {
    args: {
        title: 'Get in Touch',
        message: 'Ready to start your surveying project? Contact us today to schedule a consultation and learn how Grandmark Solutions can assist you with your geospatial needs.',
        contacts: ['0723988691', '0742776113', '0715588765'],
      },
};