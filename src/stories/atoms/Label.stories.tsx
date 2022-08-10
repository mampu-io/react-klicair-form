import React from 'react';
import { Story, Meta } from '@storybook/react';
import Label, { LabelProps } from '../../components/atoms/Label';

export default {
  title: 'Components/Atoms/Label',
  component: Label,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Important = Template.bind({});
Important.args = {
  value: 'Nama Sesuai Identitas',
  important: true,
};

export const NonImportant = Template.bind({});
NonImportant.args = { ...Important.args, important: false };
