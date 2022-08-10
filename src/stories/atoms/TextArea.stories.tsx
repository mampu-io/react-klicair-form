import React from 'react';
import { Story, Meta } from '@storybook/react';
import TextArea, { TextAreaProps } from '../../components/atoms/TextArea';

export default {
  title: 'Components/Atoms/TextArea',
  component: TextArea,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  placeholder: 'example',
  rows: 3,
  width: 'fixed',
  disabled: false,
  isError: false,
  resizeable: true,
};

export const Label = Template.bind({});
Label.args = {
  ...Normal.args,
  title: 'Komentar',
};

export const Helper = Template.bind({});
Helper.args = {
  ...Normal.args,
  subtitle: 'Minimal terdiri dari 100 karakter.',
};

export const TitleSubtitle = Template.bind({});
TitleSubtitle.args = {
  ...Normal.args,
  title: 'Komentar',
  subtitle: 'Minimal terdiri dari 100 karakter.',
};

export const Error = Template.bind({});
Error.args = {
  ...Normal.args,
  placeholder: 'example',
  isError: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Normal.args,
  disabled: true,
};
