import React from 'react';
import { Story, Meta } from '@storybook/react';
import RoundedButton, { RoundedButtonProps } from '../../components/atoms/RoundedButton';

export default {
  title: 'Components/Atoms/RoundedButton',
  component: RoundedButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<RoundedButtonProps> = (args) => <RoundedButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  iconName: 'fas fa-xmark',
  model: 'primary',
  size: 'medium',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, model: 'secondary' };

export const Neutral = Template.bind({});
Neutral.args = { ...Primary.args, model: 'neutral' };

export const Disabled = Template.bind({});
Disabled.args = { ...Primary.args, disabled: true };
