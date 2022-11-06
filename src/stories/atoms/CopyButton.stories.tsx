import React from 'react';
import { Story, Meta } from '@storybook/react';
import CopyButton, { CopyButtonProps } from '../../components/atoms/CopyButton';

export default {
  title: 'Components/Atoms/CopyButton',
  component: CopyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CopyButtonProps> = (args) => <CopyButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  valueToCopy: 'Example',
  size: 'medium',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = { ...Normal.args, disabled: true };
