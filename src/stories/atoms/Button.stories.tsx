import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from '../../components/atoms/Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  model: 'primary',
  size: 'short',
  disabled: false,
  loading: false,
};

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: 'Secondary', model: 'secondary' };

export const Success = Template.bind({});
Success.args = { ...Primary.args, label: 'Success', model: 'success' };

export const Danger = Template.bind({});
Danger.args = { ...Primary.args, label: 'Danger', model: 'danger' };

export const Disabled = Template.bind({});
Disabled.args = { ...Primary.args, label: 'Disabled', disabled: true };

export const Loading = Template.bind({});
Loading.args = { ...Primary.args, label: 'Loading', loading: true };

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Primary.args,
  label: 'Pendaftaran User',
  withIcon: true,
  iconName: 'fas fa-add',
  size: 'fit-content',
};
