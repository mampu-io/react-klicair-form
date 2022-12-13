import React from 'react';
import { Story, Meta } from '@storybook/react';
import Badge, { BadgeProps } from '../../components/atoms/Badge';

export default {
  title: 'Components/Atoms/Badge',
  component: Badge,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

const defaultProps: BadgeProps = {
  label: 'ExampleBadge',
};

export const Normal = Template.bind({});
Normal.args = { ...defaultProps };
