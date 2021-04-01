import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';
import Button from '.';

export default {
  title: 'General/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '',
    },
    as: {
      type: '',
    },
  },
} as Meta;

export const Default: Story = (args) => <Button {...args} />;

Default.args = {
  children: 'Get In',
};

export const withIcon: Story = (args) => <Button {...args} />;

withIcon.args = {
  size: 'small',
  children: 'Get In',
  icon: <AddShoppingCart />,
};

export const asLink: Story = (args) => <Button {...args} />;

asLink.args = {
  size: 'large',
  children: 'Get In',
  as: 'a',
  href: '/link',
};
