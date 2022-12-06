import React from 'react';
import { Story, Meta } from '@storybook/react';
import CopyButton from '../../components/atoms/CopyButton';
import Label from '../../components/atoms/Label';
import RecordItem, { RecordItemProps } from '../../components/molecules/RecordItem';

export default {
  title: 'Components/Molecules/RecordItem',
  component: RecordItem,
  argTypes: {
    backgroundColor: { control: 'color' },
    width: { control: 'number' },
  },
} as Meta;

const Template: Story<RecordItemProps> = (args) => (
  <div style={{ width: 600 }}>
    <RecordItem {...args} />
  </div>
);

const MEMBER_ID = 'fba26a38-5c23-4482-a4bd-b26d2eccea10';
const defaultProps: RecordItemProps = {
  label: 'Nama Nasabah',
  value: 'Jhon Thor',
  direction: 'horizontal',
  children: null,
};

export const Horizontal = Template.bind({});
Horizontal.args = { ...defaultProps };

export const Vertical = Template.bind({});
Vertical.args = { ...defaultProps, direction: 'vertical' };

export const WithChildren = Template.bind({});
WithChildren.args = {
  ...defaultProps,
  label: 'ID Nasabah',
  children: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Label value={MEMBER_ID} />
      <div style={{ marginLeft: 10 }}>
        <CopyButton valueToCopy={MEMBER_ID} size="small" />
      </div>
    </div>
  ),
};
