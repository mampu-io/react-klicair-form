import React from 'react';
import { Story, Meta } from '@storybook/react';
import InputTag, { InputTagProps } from '../../components/molecules/InputTag';

export default {
  title: 'Components/Molecules/InputTag',
  component: InputTag,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<InputTagProps> = (args) => <InputTag {...args} />;

const ROMAN_GODS = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn'];
const TERMS = [1, 3, 6, 12];
const defaultProps: InputTagProps = {
  values: ROMAN_GODS,
  onAddValue: (value: string) => console.log(`add value: ${value}`),
  onRemoveValue: (value: string) => console.log(`remove value: ${value}`),
  placeholder: 'Choose your gods...',
  type: 'text',
  width: 'fixed',
  _size: 'medium',
  _prefix: '',
  suffix: '',
  title: '',
  subtitle: '',
  isError: false,
  disabled: false,
};

export const InputText = Template.bind({});
InputText.args = { ...defaultProps };

export const InputNumber = Template.bind({});
InputNumber.args = {
  ...defaultProps,
  values: TERMS.map((term) => `${term} Bulan`),
  placeholder: 'Masukkan Jangka Waktu',
  type: 'number',
  min: '0',
};

export const Prefix = Template.bind({});
Prefix.args = { ...InputNumber.args, _prefix: 'Rp' };

export const Suffix = Template.bind({});
Suffix.args = { ...InputNumber.args, suffix: 'BULAN' };

export const Title = Template.bind({});
Title.args = { ...InputNumber.args, title: 'Jangka Waktu' };

export const Subtitle = Template.bind({});
Subtitle.args = { ...InputNumber.args, subtitle: 'Jangka waktu maksimal 24 bulan.' };

export const Error = Template.bind({});
Error.args = { ...InputNumber.args, isError: true };

export const Disabled = Template.bind({});
Disabled.args = { ...InputNumber.args, disabled: true };
