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

const defaultProps: CheckboxProps = {
  id: 'example',
  label: 'Example',
  disabled: false,
  checked: false,
  indeterminate: false,
  onChange: (e) => console.log(`checked: ${e.target.checked}`),
};

export const Checked = Template.bind({});
Checked.args = { ...defaultProps, checked: true };

export const Disabled = Template.bind({});
Disabled.args = { ...defaultProps, disabled: true };

export const Indeterminate = Template.bind({});
Indeterminate.args = { ...defaultProps, checked: true, indeterminate: true };
