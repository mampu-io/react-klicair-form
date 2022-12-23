import React from 'react';
import { Story, Meta } from '@storybook/react';
import FormGroup, { FormGroupProps } from '../../components/molecules/FormGroup';
import InputField, { InputFieldProps } from '../../components/atoms/InputField';

export default {
  title: 'Components/Molecules/FormGroup',
  component: FormGroup,
  argTypes: {
    backgroundColor: { control: 'color' },
    width: { control: 'number' },
  },
} as Meta;

const Template: Story<FormGroupProps> = (args) => (
  <div style={{ width: 600 }}>
    <FormGroup {...args} />
  </div>
);

const inputFieldProps: InputFieldProps = {
  placeholder: 'Masukkan nama sesuai identitas',
  width: 'fluid',
};

const defaultProps: FormGroupProps = {
  label: 'Nama Sesuai Identitas',
  direction: 'horizontal',
  children: (
    <InputField {...inputFieldProps} />
  ),
};

export const Horizontal = Template.bind({});
Horizontal.args = { ...defaultProps };

export const Vertical = Template.bind({});
Vertical.args = { ...Horizontal.args, direction: 'vertical' };

export const WithNote = Template.bind({});
WithNote.args = { ...Horizontal.args, note: '(Maksimal 50 karakter)' };

export const Required = Template.bind({});
Required.args = { ...WithNote.args, isRequired: true };

export const Disabled = Template.bind({});
Disabled.args = {
  ...WithNote.args,
  disabled: true,
  children: (
    <InputField {...inputFieldProps} disabled />
  ),
};
