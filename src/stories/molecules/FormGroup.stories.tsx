import React from 'react';
import { Story, Meta } from '@storybook/react';
import FormGroup, { FormGroupProps } from '../../components/molecules/FormGroup';
import InputField from '../../components/atoms/InputField';

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

export const Horizontal = Template.bind({});
Horizontal.args = {
  label: 'Nama Sesuai Identitas',
  direction: 'horizontal',
  children: (
    <InputField placeholder="Masukkan nama sesuai identitas" width="fluid" />
  ),
};

export const Vertical = Template.bind({});
Vertical.args = { ...Horizontal.args, direction: 'vertical' };
