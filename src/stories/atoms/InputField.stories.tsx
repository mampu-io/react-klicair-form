import React from 'react';
import { Story, Meta } from '@storybook/react';
import InputField, { InputFieldProps } from '../../components/atoms/InputField';

export default {
  title: 'Components/Atoms/InputField',
  component: InputField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<InputFieldProps> = (args) => <InputField {...args} />;

const defaultProps: InputFieldProps = {
  placeholder: 'example',
  width: 'fixed',
  _size: 'medium',
  disabled: false,
  isError: false,
};

export const Normal = Template.bind({});
Normal.args = { ...defaultProps };

export const Prefix = Template.bind({});
Prefix.args = {
  ...Normal.args,
  placeholder: '0,00',
  _prefix: 'Rp',
};

export const Suffix = Template.bind({});
Suffix.args = {
  ...Normal.args,
  placeholder: '0',
  suffix: 'PCS',
};

export const PrefixSuffix = Template.bind({});
PrefixSuffix.args = {
  ...Normal.args,
  placeholder: '0,00',
  _prefix: 'Rp',
  suffix: 'PCS',
};

export const Label = Template.bind({});
Label.args = {
  ...Normal.args,
  title: 'Username',
};

export const Helper = Template.bind({});
Helper.args = {
  ...Normal.args,
  subtitle: 'Wajib diisi',
};

export const TitleSubtitle = Template.bind({});
TitleSubtitle.args = {
  ...Normal.args,
  title: 'Username',
  subtitle: 'Wajib diisi',
};

export const Error = Template.bind({});
Error.args = {
  ...Normal.args,
  placeholder: 'example',
  isError: true,
};

export const WithIconButton = Template.bind({});
WithIconButton.args = {
  ...Normal.args,
  iconButtonName: 'fas fa-xmark',
  onClickIconButton: () => console.log('icon button clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...WithIconButton.args,
  disabled: true,
};
