import { Story } from '@storybook/react';

import { Button } from '@orchestra/core/src';

export default {
  title: 'Bases/Button',
  component: Button,
  args: {
    as: 'button',
    text: 'Button',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['SMALL', 'MEDIUM', 'LARGE'],
    },
  },
};

const Template: Story<Record<string, never>> = (args) => <Button {...args} />;

export const Default = Template.bind({});
