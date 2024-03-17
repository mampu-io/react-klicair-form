import React from 'react';
import { Story, Meta } from '@storybook/react';
import RadioButton, { RadioButtonProps } from '../../components/atoms/RadioButton';

export default {
  title: 'Components/Atoms/RadioButton',
  component: RadioButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

const defaultProps: RadioButtonProps = {
  id: 'test',
  label: 'PAID BY CUSTOMER',
  checked: false,
  description: 'Biaya transaksi ditanggung oleh nasabah',
  disabled: false,
  onChange: (e) => console.log(`checked: ${e.target.checked}`),
};

export const Normal = Template.bind({});
Normal.args = { ...defaultProps };

export const WithoutDescription = Template.bind({});
WithoutDescription.args = { ...defaultProps, description: '' };

export const Checked = Template.bind({});
Checked.args = { ...defaultProps, checked: true };

export const Disabled = Template.bind({});
Disabled.args = { ...defaultProps, disabled: true };
