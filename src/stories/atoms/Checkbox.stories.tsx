import React from 'react';
import { Story, Meta } from '@storybook/react';
import Checkbox, { CheckboxProps } from '../../components/atoms/Checkbox';

export default {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const TemplateStyle = {
  height: 200,
  width: 300,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Template: Story<CheckboxProps> = (args) => (
  <div style={TemplateStyle}>
    <Checkbox {...args} />
  </div>
);

const GenericProps = {
  label: 'Example',
  disabled: false,
  checked: false,
  indeterminate: false,
};

export const Checked = Template.bind({});
Checked.args = {
  ...GenericProps,
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...GenericProps,
  disabled: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  ...GenericProps,
  checked: true,
  indeterminate: true,
};
