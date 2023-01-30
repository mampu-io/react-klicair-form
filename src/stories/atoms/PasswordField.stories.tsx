import React from 'react';
import { Story, Meta } from '@storybook/react';
import PasswordField, { PasswordFieldProps } from '../../components/atoms/PasswordField';

export default {
  title: 'Components/Atoms/PasswordField',
  component: PasswordField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<PasswordFieldProps> = (args) => <PasswordField {...args} />;

const defaultProps: PasswordFieldProps = {
  placeholder: 'example',
  width: 'fixed',
  _size: 'medium',
  disabled: false,
  isError: false,
};

export const Normal = Template.bind({});
Normal.args = { ...defaultProps };
